"use client"
import Loader from '@/app/_Component/Loader/Loader';
import { getAllReader } from '@/lib/redux/slices/readerSlice'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlay } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";




export default function ReaderInfo() {
  const { reader, loading, error } = useSelector(state => state.reader);
    const [page,setPage]=useState(1)
    const limit =18
     const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
    const currentPageData = reader.slice(startIndex, endIndex);
  
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAllReader());
    },[])
  return (
    <div className=''>
      <h3 className='text-4xl font-bold hover:underline  my-6'>جميع القراء</h3>

      {loading ? (
        <div className='flex items-center justify-center min-h-screen'>
          <Loader />
        </div>
      ) : 
      (

        
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='grid grid-cols-3 md:grid-cols-4 max-[360px]:grid-cols-2 lg:grid-cols-6 gap-4 min-w-full'>
            {currentPageData.map((reciter) => (
              <Link
                href={`/Reader/${reciter.id}`}
                 prefetch={true}
                key={reciter.id}
                className="reader-card flex flex-col items-center justify-center px-1 py-3 hover:bg-[rgb(42,42,42)] transition-all duration-100 rounded"
              >
                <div className='relative group'>
                  <Image src="/user.png" alt={reciter.name} width={100} height={100} />
                  <FaPlay className='text-2xl absolute bottom-0.5 right-0.5 text-green-600 hidden group-hover:block transition-all duration-200' />
                </div>
                <h3 className='text-lg line-clamp-1'>{reciter.name}</h3>
                <h2 className='text-sm text-gray-400'>Quran Reciter</h2>
              </Link>
            ))}
            


          </div>
        <div className='flex gap-4 mt-4'>

  {/* زر السابق */}
  <button
    onClick={() => setPage((p) => Math.max(p - 1, 1))}
    disabled={page === 1}
    className='py-2 px-3 rounded bg-gray-400 text-black disabled:opacity-50 cursor-pointer flex items-center justify-center'
  >
   
     <GrFormNext />
  </button>

  {/* زر التالي */}
  <button
    onClick={() => {
      const maxPage = Math.ceil(reader.length / limit);
      if (page < maxPage) setPage((p) => p + 1);
    }}
    disabled={page >= Math.ceil(reader.length / limit)}
    className='py-2 px-3 rounded bg-gray-400 text-black disabled:opacity-50 cursor-pointer flex items-center justify-center'
  >
    <GrFormPrevious />
  </button>
</div>

        </div>
      )}
    </div>
  );
}
