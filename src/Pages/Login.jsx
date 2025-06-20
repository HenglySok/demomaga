import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { username, password });
        // Add authentication logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-blue-500 bg-opacity-100 "
            >
                <h2 className="text-2xl font-semibold text-gray-800">Sign in</h2>

                <div>
                    <input
                        type="text"
                        placeholder="Email or phone number"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary-100 text-white py-2 rounded-md hover:bg-primary-75 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
}