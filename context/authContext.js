import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { auth } from "../fireBase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
                setUser(user);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
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
    const register = async(email, password, username, profileUrl) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response.user:', response?.user);

            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                profileUrl,
                userId: response?.user?.uid
            })

            return {success: true, user: response?.user};


        } catch (e) {
            let msg = e.message;
            if(msg.includes("(auth/invalid-email)")) msg = "Invalid email";
            return {success: false, error: e.message};
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