'use client'

import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { BsBroadcast } from "react-icons/bs";
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';

export default function PhoneNav({ onClose }) {
  const sidbarDetails = [
    { name: "الرئيسيه", url: "/", icon: <IoHomeSharp /> },
    { name: "القراء", url: "./Reader", icon: <FaMusic /> },
    { name: "السور", url: "./Surah", icon: <IoIosBook /> },
    { name: "مباشر", url: "./Direct", icon: <BsBroadcast /> },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className='w-full h-screen bg-black/50 text-white fixed top-[80px] left-0 z-[999]'
        onClick={onClose}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div 
          className='p-4 h-full w-full bg-black' 
          onClick={(e) => e.stopPropagation()} 
        >
          <input
            type='text'
            className='rounded-full w-full bg-[rgb(42,42,42)] p-2 mb-4'
            placeholder='الي ماذا تريد ان تستمع؟'
          />

          <div className='py-3'>
            <h2 className='text-2xl mb-4 border-y py-3 border-[rgb(42,42,42)]'>قائمة التصفح</h2>
            <ul className='space-y-2'>
              {sidbarDetails.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className='flex items-center gap-2 text-xl w-full hover:bg-[rgb(42,42,42)] p-2 rounded'
                    onClick={onClose}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='text-white flex gap-4 items-center justify-center mt-6'>
            <Link href="#" onClick={onClose}>انشاء حساب</Link>
            <Link href="#" onClick={onClose} className='bg-white rounded-full px-4 py-2 font-semibold text-black'>تسجيل دخول</Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
