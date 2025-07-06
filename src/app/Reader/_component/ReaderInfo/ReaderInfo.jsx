"use client"
import Loader from '@/app/_Component/Loader/Loader';
import { getAllReader } from '@/lib/redux/slices/readerSlice'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlay } from "react-icons/fa";


export default function ReaderInfo() {
  const { reader, loading, error } = useSelector(state => state.reader);
  console.log(reader);
  
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllReader())
    },[])
  return (
    <>
    <h3 className='text-4xl font-bold hover:underline'>جميع القراء</h3>
   <div className='flex flex-col items-center justify-center  h-full min-h-screen '>
     <div className='grid grid-cols-3 md:grid-cols-4 max-[360px]:grid-cols-2 lg:grid-cols-6 gap-4  '>
    {loading ? (<Loader/>):(reader.map((reciter) => (
        <Link href={`/Reader/${reciter.id}`} className="reader-card flex flex-col items-center justify-center px-1 py-3 hover:bg-[rgb(42,42,42)] transition-all duration-100 rounded " key={reciter.id}>
           <div className='relative '> 
             <Image src="/user.png" alt={reciter.name} width={100} height={100} />
            <FaPlay  className='text-2xl absolute bottom-0.5 right-0.5 text-green-600 '/>
           </div>

          <h3 className='text-lg line-clamp-1'>{reciter.name}</h3>
          <h2 className='text-sm text-gray-400'>Quran Reciter</h2>

        </Link>
      )))}
        
    </div>
   </div>
    </>
  )
}
