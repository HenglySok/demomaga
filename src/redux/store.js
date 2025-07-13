import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './services/authSlice';
import { mangaApi } from './services/mangaSlice';
import { episodeApi } from './services/episodeSlice';
import { contentApi } from './services/contentSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mangaApi.reducerPath]: mangaApi.reducer,
    [episodeApi.reducerPath]: episodeApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer, // ← Add this
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(mangaApi.middleware)
      .concat(episodeApi.middleware)
      .concat(contentApi.middleware), // ← And this
});


// Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);