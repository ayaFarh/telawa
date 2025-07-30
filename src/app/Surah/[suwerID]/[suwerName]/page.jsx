"use client"
import Loader from '@/app/_Component/Loader/Loader';
import { getSurahDetails } from '@/lib/redux/slices/surhSlice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaReadme } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
export default function SuwerDetails() {
   const { surah, loading, error } = useSelector(state => state.surah);
  console.log(surah);
  const params= useParams();
 const suwername = decodeURIComponent(params.suwerName);
  const id=params.suwerID
    const [currentPage, setCurrentPage] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSurahDetails(id))
    },[id])
     useEffect(() => {
    if (surah.length > 0) {
      const firstPage = surah[0]?.page;
      setCurrentPage(firstPage);
    }
  }, [surah])
   const uniquePages = [...new Set(surah.map(item => item.page))];
  const currentIndex = uniquePages.indexOf(currentPage);

  const handleNext = () => {
    if (currentIndex < uniquePages.length - 1) {
      setCurrentPage(uniquePages[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentPage(uniquePages[currentIndex - 1]);
    }
  };

 const currentAyat = surah.filter(
  item =>
    item.page === currentPage &&
    item.ayah !== 0 &&
    item.polygon
);

  return (
    <div  className='text-white   space-y-4'>
        <h2 className='text-2xl font-bold text-gray-300'>في هدوء الحروف، دعونا نبحث عن سلامٍ لا تمنحه الأيام<FaReadme className='text-3xl mr-2 text-green-300 inline-block' /></h2>
           <h3 className='text-2xl font-bold text-gray-300'>سوره {suwername} </h3>
    <div className='bg-green-950 w-[100%] p-3 mx-auto '>
      <div className='w-[85%] bg-white flex  flex-col items-center justify-center mx-auto'>
         {/* pagenation */}
      <div className='flex items-center justify-between gap-4 bg-gray-100  w-full p-3'>
          <div onClick={handleNext} className='bg-[rgba(42,42,42)] py-2 px-6 rounded cursor-pointer '>next</div>
          <div onClick={handlePrev} className='bg-[rgba(42,42,42)] py-2 px-6 rounded cursor-pointer '>prev</div>
      </div>
        <div className='flex flex-col items-center justify-center w-full h-full  bg-white border border-gray-300 shadow-2xl rounded'>
          
          {loading ? (<Loader/>):(
          currentPage ? (
  <img src={currentPage} alt="page" className="w-full max-w-4xl" />
) : (
  <div className='text-gray-500 text-3xl min-h-screen flex items-center justify-center '>بسم الله الرحمن الرحيم</div>
)
        )
}
        </div>
      </div>
    </div>
    </div>
  )
}

