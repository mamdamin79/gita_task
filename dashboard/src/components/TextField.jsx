import React from 'react'

const TextField = ({name,message,register,errors,faName,pattern,patternMessage,disabled}) => {
  return (
    <div className="relative w-full my-4" data-te-input-wrapper-init>
    <input
    disabled={disabled}
        type="text"
        {...register(`${name}`,{
            required:{
                value:true,
                message
            },
            pattern:{
                value:pattern,
                message:patternMessage
            }
        })}
        lang="fa"
        className=" peer block min-h-[auto] w-full rounded border focus:border-2 bg-transparent px-3 py-[0.6rem] pt-[0.7rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    />
    <label
        className="pointer-events-none absolute right-3 top-[-19px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]"
    >
        <span className="bg-white text-gray-500 px-3">
            {faName} 
        </span>
    </label>
    <small className="text-red-500  block text-right">{errors[name] && errors[name].message}</small>
</div>
  )
}

export default TextField