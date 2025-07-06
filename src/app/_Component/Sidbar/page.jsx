import Link from 'next/link'
import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { BsBroadcast } from "react-icons/bs";

export default function Sidbar() {
    const sidbarDetails = [
        { name: "الرئيسيه", url: "/", icon: <IoHomeSharp /> },
        { name: "القراء", url: "./Reader", icon: <FaMusic /> },
        { name: "السور", url: "", icon: <IoIosBook /> },
        { name: "مباشر", url: "", icon: <BsBroadcast /> },
    ];

    return (
        <div className=' p-4 text-white hidden md:block w-[25%] fixed top-[80px] right-0 bottom-0'>
          {/* favorites  */}
          <div className='py-2'>
            <Link href={""} className='flex items-center gap-2 text-2xl w-full bg-[rgb(34,34,34)] p-2 rounded '>
          المفضله
            </Link>

          </div>
            <div className='border-t border-[rgb(42,42,42)] py-3'>
                <h2 className='text-2xl mb-4'>قائمة التصفح</h2>
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
        </div>
    );
}
