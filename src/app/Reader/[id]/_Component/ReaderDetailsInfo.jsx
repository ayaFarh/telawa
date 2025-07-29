"use client"
import Loader from '@/app/_Component/Loader/Loader';
import { getSpacialReader } from '@/lib/redux/slices/readerSlice';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaBookOpen } from "react-icons/fa";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaRegHeart } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { getAllSurah } from '@/lib/redux/slices/surhSlice';
import { FaPlay } from "react-icons/fa6";




export default function ReaderDetailsInfo() {
  const { reader, loading, error } = useSelector(state => state.reader);
   const { surah, loading: surahLoading, error: surahError } = useSelector(state => state.surah);
   const dispatch = useDispatch()
   const params = useParams();
   const id = params.id
 console.log(surah);
 
  const [selectedMoshafIndex, setSelectedMoshafIndex] = useState(0);
   const [currantSurah, setCurrentSurah] = useState("001");
   const moshafList= reader[0]?.moshaf || []
 const selectedMoshaf = moshafList[selectedMoshafIndex];
 const handlePlay = (surahNum) => {
    const padded = surahNum.toString().padStart(3, "0");
    setCurrentSurah(padded);
  };


   console.log(reader);
   
    useEffect(() => {
        dispatch(getSpacialReader(id))
    },[])

useEffect(() => {
        dispatch(getAllSurah())
    },[])
  return (
    <div className='space-y-4'>
     
      <div className='flex items-center gap-3'>
            <FaBookOpen className='text-2xl text-green-400 inline-block' />
            <h2>Good Reciter</h2>
         </div>

      {loading ? (<Loader/>):(reader.map((reciter) => (
        <div className="reader-card space-y-2" key={reciter.id}>
         <h3 className='text-5xl line-clamp-1'> {reciter.name} </h3>

     {/* play surah */}

         <div>
          <div className="mb-4 flex gap-2 flex-wrap">
        {moshafList.map((moshaf, index) => (
          <button
            key={moshaf.id}
            onClick={() => {
              setSelectedMoshafIndex(index);
              setCurrentSurah("001");
            }}
            className={`py-1 px-3 text-black rounded border ${
              index === selectedMoshafIndex
                ? "bg-green-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {moshaf.name}
          </button>
        ))}
      </div>

      {/* ✅ مشغل الصوت */}
      <AudioPlayer
      key={currantSurah}
       
        src={`${selectedMoshaf.server}${currantSurah}.mp3`}
        className="w-full fixed bottom-0 left-0 z-[4444]"
      />

      {/* ✅ عرض السور */}
      <div className="w-full overflow-y-auto">
        {selectedMoshaf.surah_list
  .split(",")
  .map((num) => {
    const surahInfo = surah.find((s) => s.id === Number(num));
    return (
      <div
        className='flex items-center justify-between  hover:bg-[rgba(42,42,42)] px-2 py-4 text-white text-xl  group transition-all duration-200'
        key={num}
      >
        <div
          className='flex items-center cursor-pointer gap-2  justify-center ' 
          onClick={() => handlePlay(num)}
        >
          <button className='min-w-[30px]  text-xl  group-hover:hidden'>{num}</button>
          <FaPlay className='hidden text-xl min-w-[30px] text-green-600 group-hover:block ' />

          <div className='w-12 h-12 bg-[rgba(18,18,18)] rounded'></div>
          <span className='text-md text-white font-semibold'>{surahInfo?.name || "سورة غير معروفة"}</span>
        </div>
        <div className='flex gap-2'>
          <FaRegHeart />
          <IoIosCloudDownload />
        </div>
      </div>
    );
  })}

      </div>
         </div>
        </div>
      )))}

    </div>
  )
}

