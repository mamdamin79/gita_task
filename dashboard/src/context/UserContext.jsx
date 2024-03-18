import { createContext, useEffect, useState } from "react";
import React from 'react'
export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    let filteredUsers;
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('userList')) || [{
      name: "محمدامین",
      lastName: "صاحب",
      nationalCode: "0023934032",
      chartData: {
        "labels": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [
              5,
              10,
              20,
              1,
              3,
              8,
              0
            ],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          }
        ]
      },
      id: 1,
      location: [
        35.699947, 51.335981
      ]
    },]);

    useEffect(() => {
      localStorage.setItem('userList', JSON.stringify(users));
    }, [users]);
    const [nameQuery,setNameQuery] = useState("");
    const [lastNameQuery,setLasNameQuery] = useState("");
    const [nationalCode,setNationalCode] = useState("");
    // filter by all :)
    filteredUsers = users.filter(user=>user.name.toLowerCase().includes(nameQuery.toLowerCase())).filter(user=>user.lastName.toLowerCase().includes(lastNameQuery.toLowerCase())).filter(user=>user.nationalCode.toLowerCase().includes(nationalCode.toLowerCase()))
    return (
    <UserContext.Provider value={{filteredUsers,users,setUsers,nameQuery,setNameQuery,lastNameQuery,setLasNameQuery,nationalCode,setNationalCode}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider



// [{
//   name: "محمدامین",
//   lastName: "صاحب",
//   nationalCode: "0023934032",
//   chartData: {
//     "labels": [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July"
//     ],
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [
//           5,
//           10,
//           20,
//           1,
//           3,
//           8,
//           0
//         ],
//         backgroundColor: "rgba(255, 99, 132, 0.5)"
//       }
//     ]
//   },
//   id: 1,
//   location: [
//     35.699947, 51.335981
//   ]
// },]