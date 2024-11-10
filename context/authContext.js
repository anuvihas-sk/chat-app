import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { auth } from "../fireBaseConfig";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../fireBaseConfig";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const[user, setUser] = useState(null);
    const[isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect (() => {
    //     if (typeof isAuthenticated == "undefined") return;
    //     const inApp = segments[0] === "app";
    //     if(isAuthenticated && !inApp) {
    //         router.replace("/home");
    //     }else if (isAuthenticated==false) {
    //         router.replace("/signIn");
    //     }
        

    // setTimeout(() => {
    //     setIsAuthenticated(true);
    //     router.replace("/home");
        
    // })    

        const unsub = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        })

        return unsub;
    },[])

    const login = async(email, password) => {
        try {

        } catch (e) {
            
        }  
    }
    const logout = async() => {
        try {

        } catch (e) {
            
        }  
    }
    const register = async(email, password, username) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response.user:', response?.user);

            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                profileUrl,
                userId: response?.user?.uid
            })

            return {success: true, data: response?.user};


        } catch (e) {
            let msg = e.message;
            if(msg.includes("(auth/invalid-email)")) msg = "Invalid email";
            return {success: false, msg: e.message};
        }  
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )

    
};

export const useAuth = () => {
    const value =  useContext(AuthContext);

    if (!value) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return value
}