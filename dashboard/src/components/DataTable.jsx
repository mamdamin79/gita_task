import React, { useContext } from 'react'
import Modal from './Modal'
import { FaChartBar, FaEdit, FaInfo, FaMap, FaTrash } from "react-icons/fa";
import { UserContext } from '../context/UserContext';

const DataTable = () => {
    const {users,setUsers,filteredUsers} = useContext(UserContext)

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    نام
                </th>
                <th scope="col" className="px-6 py-3">
                    نام خانوادگی
                </th>
                <th scope="col" className="px-6 py-3">
                    کد ملی
                </th>
                <th scope="col" className="px-6 py-3">
                    عملیات
                </th>
            </tr>
        </thead>
        <tbody>
            {
                filteredUsers.map(user=>
                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                </th>
                <td className="px-6 py-4">
                    {user.lastName}
                </td>
                <td className="px-6 py-4">
                    {user.nationalCode}
                </td>
                <td className="px-6 py-4 flex items-center justify-between gap-2">
                    <Modal work={"مشاهده"} user={user}  icon={<FaInfo />} />
                    <Modal work={"ویرایش"} user={user}  icon={<FaEdit />}/>
                    <Modal work={"حذف"} user={user}  icon={<FaTrash />}/>
                    <Modal work={"نمودار"} user={user}  icon={<FaChartBar />}/>
                    <Modal work={"نقشه"} user={user}  icon={<FaMap />}/>
                </td>
            </tr>
                )
            }
        </tbody>
    </table>
</div>

  )
}

export default DataTable