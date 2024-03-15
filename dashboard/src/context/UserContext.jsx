import { createContext, useEffect, useState } from "react";
import React from 'react'
export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    let filteredUsers;
    const [users,setUsers] = useState([]);
    const [nameQuery,setNameQuery] = useState("");
    const [lastNameQuery,setLasNameQuery] = useState("");
    const [nationalCode,setNationalCode] = useState("");
    // filter by all :)
    filteredUsers = users.filter(user=>user.name.toLowerCase().includes(nameQuery.toLowerCase())).filter(user=>user.lastName.toLowerCase().includes(lastNameQuery.toLowerCase())).filter(user=>user.nationalCode.toLowerCase().includes(nationalCode.toLowerCase()))
    useEffect(()=>{
      const getUsers = async()=>{
        const res = await fetch("https://gita-task.liara.run/users");
        const users = await res.json();
        setUsers(users)
        }
      getUsers();
  
    },[])
    return (
    <UserContext.Provider value={{filteredUsers,users,setUsers,nameQuery,setNameQuery,lastNameQuery,setLasNameQuery,nationalCode,setNationalCode}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider