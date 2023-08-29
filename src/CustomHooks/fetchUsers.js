import { useEffect, useState } from "react";


export const UserFetch = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://64a65266096b3f0fcc7f9186.mockapi.io/api/v1/books`;
    fetchUsers(url);
  }, []);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("bad request");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return [users]
};
