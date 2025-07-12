// baseQueryWithReauth.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_VIEW_BASE_API,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    // Wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // Checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (refreshToken) {
                    // Try to get a new token
                    const refreshResult = await baseQuery(
                        {
                            url: '/auth/refresh',
                            method: 'POST',
                            body: { refreshToken },
                        },
                        api,
                        extraOptions
                    );

                    if (refreshResult.data) {
                        // Store the new token
                        localStorage.setItem('accessToken', refreshResult.data.accessToken);
                        localStorage.setItem('refreshToken', refreshResult.data.refreshToken);
                        // Retry the initial query
                        result = await baseQuery(args, api, extraOptions);
                    } else {
                        // Refresh failed - logout the user
                        localStorage.removeItem('accessToken');
                        localStorage.removeItem('refreshToken');
                        // You might want to redirect to login here
                        window.location.href = '/login';
                    }
                }
            } finally {
                // Release must be called once the mutex should be released again
                release();
            }
        } else {
            // Wait until the mutex is available and retry
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};