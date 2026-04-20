import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

function AuthProvider({children}){
    const [loginStatus, setLogin] = useState(false);
    return(
        <LoginContext.Provider value={{loginStatus, setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider;