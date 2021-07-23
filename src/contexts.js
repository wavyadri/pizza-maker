import React, {useState, useContext, useEffect} from 'react'
import {menu} from './components/menu'

const AppContext = React.createContext();

// always access children
const AppProvider = ({children}) => {

    const [menuItems, setMenuItems] = useState(menu);
    // const [catgeories, setCategories] = useState(allCategories);

    return <AppContext.Provider value={menuItems}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}