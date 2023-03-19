import { createContext } from "react";

export const ToggleContext = createContext();

export default function ToggleProvider({children}){
    <ToggleContext.Provider value={{arcade: 9, advanced:12, pro: 150, online: 1, larger: 2, custom: 2}}>
        {children}
    </ToggleContext.Provider>
}