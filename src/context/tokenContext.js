import React, { useState } from 'react';

export const TokenContext = React.createContext();

export const TokenProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    console.log(accessToken);
    //console.log(refreshToken);
    return (
        <TokenContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken }}>
            {children}
        </TokenContext.Provider>
    );
};
