import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

function AuthProvider({children}){
    const [loginStatus, setLogin] = useState("false");
    const toggleLogin = () => setLogin((t) => (t === 'false' ? 'true' : 'false'));
    return(
        <LoginContext.Provider value={{loginStatus, toggleLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider;