
import './App.css';

import useAuth, { AuthContext } from './modules/LoginPage/AuthContext';
import AppRoutes from './routing';

function App() {

  const { login,loggedUser } = useAuth();
  return (  
    <div className="App">
       <AuthContext.Provider value={{ user:loggedUser, setUser:login}}>
       <AppRoutes/>
       </AuthContext.Provider>
       
    </div>
  );
}

export default App;
