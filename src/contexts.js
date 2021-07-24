import React, {useState, useContext, useEffect} from 'react'
import menu from './components/menu'

const AppContext = React.createContext();

// always access children
const AppProvider = ({children}) => {

    // M E N U
    const [menuItems, setMenuItems] = useState(menu);
    // new array of only unique categories
    const allCatgeories = [...new Set(menu.map((item) => item.category))];
    const [categories, setCategories] = useState(allCatgeories)

    const filterMenu = (category) => {
        const newMenu = menu.filter((item) => item.category === category);
        setMenuItems(newMenu);
    }

    return <AppContext.Provider value={{menuItems}}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

// we want to export the context and the provider
export {AppContext, AppProvider}