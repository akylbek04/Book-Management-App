import { Navigate } from "react-router-dom";
import { Header } from "./Header";

export const Dashboard = ({token}) => {
  if(!token){
    return <Navigate to='/'/>
  }
  
  return <div>
    <Header/>
    <BookList/>
  </div>;
};
