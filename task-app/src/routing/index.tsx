import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import LoginPage from "../modules/LoginPage";
import RegisterPage from "../modules/RegisterPage";
import HomePage from "../modules/HomePage";
import { useContext } from "react";
import { AuthContext } from "../modules/LoginPage/AuthContext";


export default function AppRoutes() {
  const {user} = useContext(AuthContext)
    return (
        <Routes>
            <Route path={routes.login.path} element={<LoginPage />}/>
            <Route path={routes.register.path} element={<RegisterPage />}/>
            {user&&<Route path={routes.home.path} element={<HomePage />}/>}
            <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found </h2>
              </div>
            }
          />
         
            
        </Routes>
    );
}
