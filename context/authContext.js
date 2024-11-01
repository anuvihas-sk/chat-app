import { useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const[user, setUser] = useState(null);
    const[isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect (() => {},[])

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