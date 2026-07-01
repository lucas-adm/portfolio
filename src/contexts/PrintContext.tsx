'use client';

import { createContext, useEffect } from 'react';

export const PrintContext = createContext({});

export const PrintProvider = ({ children }: { children: React.ReactNode }) => {

    const greeting = `
                       _            
                      | |           
 ___ _   _ _ __     __| | _____   __
/ __| | | | '_ \\   / _\` |/ _ \\ \\ / /
\\__ \\ |_| | |_) | | (_| |  __/\\ V / 
|___/\\__,_| .__/   \\__,_|\\___| \\_/  
          | |                       
          |_|                       

curious? it's all public: https://github.com/lucas-adm/portfolio
`;

    useEffect(() => {
        console.log(greeting);
    }, [greeting])

    return (
        <PrintContext.Provider value={{}}>
            {children}
        </PrintContext.Provider>
    )

}