import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { BsBroadcast } from "react-icons/bs";
import Link from 'next/link'

export default function PhoneNav() {
    const sidbarDetails = [
         { name: "الرئيسيه", url: "/", icon: <IoHomeSharp /> },
                { name: "القراء", url: "./Reader", icon: <FaMusic /> },
                { name: "السور", url: "./Surah", icon: <IoIosBook /> },
                { name: "مباشر", url: "./Direct", icon: <BsBroadcast /> },
      ];
  return (
    <div className='w-full h-screen bg-black/50 text-white'>
       <div className=''>
      <input type='text' className='rounded-full w-full focus:border-none bg-[rgb(42,42,42)] p-2 text-' placeholder=' الي ماذا تريد ان تستمع '/>
    </div>
    {/* input */}
        <div className=' py-3'>
                <h2 className='text-2xl mb-4 border-y py-3 border-[rgb(42,42,42)]'>قائمة التصفح</h2>
                <ul className='space-y-2'>
                    {sidbarDetails.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.url}
                                className='flex items-center gap-2 text-xl w-full hover:bg-[rgb(42,42,42)] p-2 rounded '
                            >
                                <span>{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
             {/* auth */}
     <div className='text-white flex gap-4 items-center justify-center'>
     
      <Link href={""}>انشاء حساب</Link>
       <Link href={""} className='bg-white rounded-full px-4 py-2 font-semibold text-black'>تسجيل دخول</Link>
     </div>
    </div>
  )
}
