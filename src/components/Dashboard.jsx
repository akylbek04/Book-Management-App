import { Navigate } from "react-router-dom";
import { Header } from "./Header";
import { useState } from "react";
import { UserFetch } from "../CustomHooks/fetchUsers";
import { BookList } from "./BookList";

export const Dashboard = ({ token }) => {
  const [users] = UserFetch();

  const [activepage, setActivepage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(6);
  const [query, setQuery] = useState("");
  const totalPages = Math.ceil(users.length/bookPerPage);
  console.log(totalPages)

  const next = () => {
    if (activepage < totalPages) {
      setActivepage((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (activepage > 1) {
      setActivepage((prev) => prev - 1);
    }
  };

  if (!token) {
    return <Navigate to="/" />;
  }

  const headerProps = {
    activepage,
    prev, 
    next,
    query,
    setQuery,
    totalPages
  }

  const bookListProps = {
    users,
    query,
    activepage,
    bookPerPage,
    totalPages,
    
  }

  return (
    <div>
      <Header {...headerProps} />
      <BookList {...bookListProps} />
    </div>
  );
};
