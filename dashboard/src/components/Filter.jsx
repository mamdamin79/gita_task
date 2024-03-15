import React, { useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { UserContext } from '../context/UserContext'

const Filter = () => {
    const {nameQuery,setNameQuery,lastNameQuery,setLasNameQuery,nationalCode,setNationalCode} = useContext(UserContext)
  return (
     <div className="w-full mb-6">
     <div className="mx-auto w-full max-xl-md rounded-2xl bg-white p-2">
       <Disclosure>
         {({ open }) => (
           <>
             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500/75">
               <span>فیلتر بر اساس</span>
               <FaChevronDown
                 className={`${
                   open ? 'rotate-180 transform' : ''
                 } h-5 w-5 text-slate-500`}
               />
             </Disclosure.Button>
             <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm  text-gray-500">
                <input className='rounded-md shadow-md mx-1 outline-none p-2' placeholder='نام' onChange={(e)=>setNameQuery(e.target.value)} value={nameQuery}/>
                <input className='rounded-md shadow-md mx-1 outline-none p-2' placeholder=' نام خانوادگی' onChange={(e)=>setLasNameQuery(e.target.value)} value={lastNameQuery}/>
                <input className='rounded-md shadow-md mx-1 outline-none p-2' placeholder='کد ملی' onChange={(e)=>setNationalCode(e.target.value)} value={nationalCode}/>
             </Disclosure.Panel>
           </>
         )}
       </Disclosure>
       
     </div>
   </div>
  )
}

export default Filter