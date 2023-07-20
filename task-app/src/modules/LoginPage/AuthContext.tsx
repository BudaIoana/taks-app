import {createContext,  useEffect, useState } from "react"

type User = {
    email:string
}

interface AuthContextProp {
    user: User | null;
    setUser: (user: User | null) => void;
  }
  
 export const AuthContext = createContext<AuthContextProp>({
    user: null,
    setUser: () => {},
  });

export default function useAuth()
{
 

  const [loggedUser,setLoggedUser] = useState(null);

    useEffect(() => {
      const authUser = localStorage.getItem('user')
      if(authUser){
       setLoggedUser(authUser)
      }
    
    }, [])

    const login = (user:User) =>{
        localStorage.setItem('user',JSON.stringify(user))
        setLoggedUser(user)
    }



  return {login,loggedUser}

}