import React, { createContext, useState } from 'react'

export const UserContextData = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    const value = {
        user,
        setUser
    };

    return (
        <UserContextData.Provider value={value}>
            {children}
        </UserContextData.Provider>
    );
}

export default UserContext;
