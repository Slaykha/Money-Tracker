import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    const login = () => {
        setToken("token123456")
    }

    const logout = () => {
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ login, logout, token }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider