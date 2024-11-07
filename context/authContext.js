import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { auth } from "../fireBase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const[user, setUser] = useState(null);
    const[isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect (() => {
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
            console.log('response.user', response?.user);

        } catch (e) {
            
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