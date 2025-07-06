"use client"
import Image from 'next/image'
import Link from 'next/link'
import { IoHomeSharp } from "react-icons/io5";
import React, { useState } from 'react'
import PhoneNav from '../PhoneNav/page';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


export default function Navbar() {
  const [smallScreen, setSmallScreen] = useState(false); // الحالة للتحكم في منيو الموبايل

  return (
    <div className='bg-black fixed top-0 z-[9999] left-0 right-0 w-full'>
      <div className='containerA py-4 flex items-center justify-between   gap-4'>
        
        {/* الشمال: اللوجو + زرار الهوم + البحث */}
        <div className='flex items-center justify-between md:justify-center gap-4 w-full md:w-fit'>
          
          {/* اللوجو */}
          <Link href="#">
            <Image src="/images.png" className='rounded-full' width={50} height={50} alt='logo' />
          </Link>

          {/* زرار الهوم */}
          <Link href="#" className='inline-block text-white text-2xl p-4 bg-[rgb(42,42,42)] rounded-full'>
            <IoHomeSharp />
          </Link>

          {/* زرار منيو الموبايل */}
         <div className='p-4   bg-[rgb(42,42,42)] rounded-full text-white text-2xl md:hidden block cursor-pointer'>
          {
            smallScreen ? (
               <FaXmark onClick={() => setSmallScreen(false)}/>
            ) : (
             
              <FaBars onClick={() => setSmallScreen(true)} className=' '/>
          )}
          </div>

         
         
        </div>
         {/* بوكس البحث (ديسكتوب فقط) */}
         <div className='md:block hidden w-[380px]'>
            <input 
              type='text' 
              className='rounded-full w-full bg-[rgb(42,42,42)] p-2 text-white' 
              placeholder='ابحث باسم السوره او القارئ ؟' 
            />
          </div>

        {/* تسجيل الدخول وإنشاء حساب (ديسكتوب فقط) */}
        <div className='text-white md:flex gap-4 items-center hidden'>
          <Link href="#">انشاء حساب</Link>
          <Link href="#" className='bg-white rounded-full px-4 py-2 font-semibold text-black'>
            تسجيل دخول
          </Link>
        </div>
      </div>

      {/* منيو الموبايل */}
      {smallScreen && (
        <div className='md:hidden block containerA '>
          <PhoneNav />
        </div>
      )}
    </div>
  )
}
