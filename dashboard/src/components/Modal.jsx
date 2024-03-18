import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import TextField from './TextField';
import Chart from './Chart';
import { UserContext } from '../context/UserContext';
import Location from './Location';

export default function Modal({work,icon,user}) {
    const {users,setUsers} = useContext(UserContext)
  let [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
        name:user && user.name,
        lastName:user && user.lastName,
        nationalCode:user && user.nationalCode,
    }
  });

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onSubmit = async(data) =>{
    switch (work) {
        case "افزودن":
            try {
                reset()
                setUsers([...users,data])
                closeModal();        
            } catch (error) {
                console.log(error)
            }
            break;
        case "مشاهده":
            closeModal();        
        break;
        case "ویرایش":
                setUsers([...users.filter(item=>item.id !== user.id),data])
                closeModal();
            break;
        case "حذف":
            setUsers(users.filter(item=>item.id !== user.id ))
            closeModal();
            break;
        default:
            break;
    }
  }  
  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {
            icon
          }
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md text-center transform overflow-hidden rounded-2xl bg-white p-2  align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {
                        work
                    }
                  </Dialog.Title>

                {
                    work === "حذف" && <>ایا از حذف کردن {user.name} مطمینید؟ <div><button className='bg-gray-50 p-2 shadow-md rounded-md' onClick={closeModal}>لغو</button><button className='bg-gray-100 p-2 shadow-md rounded-md'  onClick={onSubmit}>حذف</button></div></>
                }
                {
                    (work === "مشاهده" || work === "ویرایش" || work === "افزودن") && <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField disabled={work === "مشاهده"} name={"name"} message={"فیلد نام الزامی است."} register={register} errors={errors} faName={"نام"} pattern={/^[آ-ی\s-_]*$/} patternMessage={"فرمت نام خانوادگی را درست وارد کنید."}/>
                        <TextField disabled={work === "مشاهده"} name={"lastName"} message={"وارد کردن  نام خانوادگی الزامیست."} register={register} errors={errors} faName={"نام خانوادگی"} pattern={/^[آ-ی\s-_]*$/} patternMessage={"فرمت نام خانوادگی را درست وارد کنید."}/>
                        <TextField disabled={work === "مشاهده"} name={"nationalCode"} message={"وارد کردن کد ملی الزامیست."} register={register} errors={errors} faName={"کد ملی"} pattern={/^\d{10}$/} patternMessage={"کد ملی 10 رقمی است."}/>
                    <button type='submit' className='bg-gray-50 shadow-md rounded-md p-2'>{work === "افزودن" ? "افزودن" : work === "ویرایش" ? "ویرایش" : "بستن"}</button></form>
                }
                {
                    work === "نمودار" && <Chart data={user.chartData}/>
                }
                {
                    work === "نقشه" && <Location data={user.location} user={user}/>
                }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
