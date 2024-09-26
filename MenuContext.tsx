import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext<{ selectedMenu: string; setSelectedMenu: (menu: string) => void } | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedMenu, setSelectedMenu] = useState<string>('Home'); // Default menu
    return (
        <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
