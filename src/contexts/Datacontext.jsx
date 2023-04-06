import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext()

const DataProvider = (props) => {

    const [togglebar, setToggle] = useState(true)
    
    const [mobile, setMobile] = useState(false)
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({});
    const [search, setSearch] = useState(false)
    
       function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setToggle(false);
            setMobile(true)
            
        }
       }
    
    return (
        <DataContext.Provider value={{togglebar,setToggle,getWindowsWidth,mobile,setMobile,auth,setAuth,user,setUser,search,setSearch}}>
            {props.children}
        </DataContext.Provider>
    )
}


export default DataProvider;