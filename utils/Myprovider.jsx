/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext,useState,useEffect } from "react";
import {jwtDecode} from "jwt-decode"
export const mycontext=createContext({})

const Myprovider=({children})=>{
const [token,settoken]=useState(null)    
const [user,setuser]=useState(()=>{
    const token=localStorage.getItem("token")
    if(token)
    return localStorage.getItem("useron")
    return null
});
useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!token)
        return
    try{
        const decoded=jwtDecode(token);
        const exp=decoded.exp*1000;
        const now=Date.now();
        const timeout=exp-now;
        if(timeout<=0){

            handleLogout();
        }
        else
        {
            const timer=setTimeout(()=>{
                handleLogout();
            },timeout)
            return ()=> clearTimeout(timer)
        }
    }
    catch (err){
        handleLogout();
    }

},[user])

function handleLogout(){
    localStorage.removeItem("useron")
    localStorage.removeItem("token")
    setuser(null)
    window.location.href="/login"
}
    return(
        <mycontext.Provider value={{user,setuser,token,settoken}}>
            {children}
        </mycontext.Provider>
    )

}

export default Myprovider;