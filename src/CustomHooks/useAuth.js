import { useNavigate } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";
import { useState } from "react";


export const useAuth = () => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const handleUserLogin = async () => {
      const token = fakeAuth();

      if (!token) {
        navigate("/");
      } else {
        setToken(token)
        navigate("/dashboard");
      }
    };

    const handleUserLogout = () => {
      setToken(null);
      navigate("/");
    };

    const values = {
        handleUserLogin,
        handleUserLogout,
        token
    }

    return values
}