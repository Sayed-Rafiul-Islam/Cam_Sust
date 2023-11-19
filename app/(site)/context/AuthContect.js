"use client"
import { useContext, createContext, useEffect, useState } from "react";
import { signInWithPopup,signOut,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { toast } from "react-toastify";
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState('')

    const googleSignIn  = () => {

        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        user && toast.success(`${user?.displayName} signed in successfully`)
       
        
    }

    const logOut = () => {
        toast.error(`${user.displayName} signed out`)
        signOut(auth)
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser)
        })

        return () => unsubscribe()
    },[user])

    return  (
    <AuthContext.Provider value={{user,googleSignIn,logOut}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}