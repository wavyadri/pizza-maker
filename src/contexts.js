import React, {useState, useContext, useEffect} from 'react'

const AppContext = React.createContext();

// always access children
const AppProvider = ({children}) => {

    // const [catgeories, setCategories] = useState(allCategories);

    return <AppContext.Provider value={'hello world'}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}