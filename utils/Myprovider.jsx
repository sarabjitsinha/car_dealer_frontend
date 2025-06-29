/* eslint-disable react-refresh/only-export-components */
import { createContext,useState } from "react";

export const mycontext=createContext({})

const Myprovider=({children})=>{
const [user,setuser]=useState(()=>localStorage.getItem("useron"));
const [token,settoken]=useState(null)
    return(
        <mycontext.Provider value={{user,setuser,token,settoken}}>
            {children}
        </mycontext.Provider>
    )

}

export default Myprovider;