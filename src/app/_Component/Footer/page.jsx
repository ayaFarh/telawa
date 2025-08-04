import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";



export default function Footer() {
  return (
    <div className='rounded-t-xl mt-4  text-gray-300 bg-[rgb(18,18,18)] absolute bottom-[-1] left-0 right-0 '> 
  <div className='containerA '>
    <div className='grid grid-cols-12  gap-4 py-8'>
        {/* القران */}
        <div className='col-span-12  md:col-span-4 sm:col-span-4'>
          <p className='text-white flex items-center gap-2 text-2xl mb-2   '>
            القران
          </p> 
         
           <Link href={"/Surah"} className='flex items-center gap-2 text-xl  hover:text-white transition-all duration-100'>
           سور القران
          </Link>
           <Link href={"/Reader"} className='flex items-center gap-2 text-xl  hover:text-white transition-all duration-100'>
           القراء
          </Link>
         
        </div>

        {/* تواصل */}
        <div className='col-span-12 md:col-span-4 sm:col-span-4'>
            <p className='text-2xl mb-2 text-white'>تواصل معنا</p>
            <Link href={""} className='flex items-center gap-2 text-xl  hover:text-white transition-all duration-100'>
            <FaTwitter />
            تويتر
          </Link> 
           <Link href={""} className='flex items-center gap-2 text-xl  hover:text-white transition-all duration-100'>
           <FaFacebook />
            فيس بوك
          </Link> 
        </div>

        {/* الحقوق  */}
        <div className='col-span-12 md:col-span-4 sm:col-span-4'>
            <p className='text-2xl mb-2 text-white'>الحقوق</p>
            <Link href={"/"} className='flex items-center gap-2 text-xl  hover:text-white transition-all duration-100'>
            حقوق النشر
          </Link>
          <Link href={"/"} className='flex items-center gap-2 text-xl  hover:text-white transition-all duration-100'>
            سياسة الخصوصية
          </Link>
        </div>
    </div>

    {/*  */}
   <div className='flex items-center justify-center w-full border-t text-gray-400 border-[rgb(42,42,42)] py-4'>
     <p>© 2024 - 2025 | جميع الحقوق محفوظة</p>
   </div>
  </div>
    </div>
  )
}
