"use client"
import { useContext, createContext, useEffect, useState } from "react";
import { signInWithPopup,signOut,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { toast } from "react-toastify";
import createUser from "@/utils/createUser";
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const googleSignIn  = async () => {
        const provider = new GoogleAuthProvider()
         signInWithPopup(auth,provider)
         

         
        
    }

    const logOut = () => {
        toast.error(`${user.displayName} signed out`)
        signOut(auth)   
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser)
            if (user && currentUser) {
                toast.success(`${currentUser.displayName} signed in successfully`)
                console.log(user)
                const newUser = {
                    email: currentUser.email,
                    name : currentUser.displayName,
                    role : "user"
                }
                createUser(newUser)
            }            
        })

        return () => user && unsubscribe()
    },[user])

    return  (
    <AuthContext.Provider value={{user,googleSignIn,logOut}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}