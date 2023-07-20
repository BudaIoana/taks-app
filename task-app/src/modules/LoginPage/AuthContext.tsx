import {createContext, useContext, useEffect, useState } from "react"

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
  const { user, setUser } = useContext(AuthContext);

  const [loggedUser,setLoggedUser] = useState(null);

    useEffect(() => {
      const authUser = localStorage.getItem('user')
      console.log('aici tot intram',authUser)
      if(authUser){
       // setUser(JSON.parse(authUser))
       setLoggedUser(authUser)
      }
    
    }, [])

    const login = (user:User) =>{
        localStorage.setItem('user',JSON.stringify(user))
        //setUser(user)
        console.log('am facut login',user);
        setLoggedUser(user)
    }



  return {login,loggedUser}

}