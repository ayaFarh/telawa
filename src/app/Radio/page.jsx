"use client"
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getAllRadioReader } from '@/lib/redux/slices/radio';
import RadioPlayer from './_Component/RadioPlayer';
import Loader from '../_Component/Loader/Loader';

export default function Radio() {
    const [playAudio,setPlayAudio]=useState(false)
    const [currentRadioUrl, setCurrentRadioUrl] = useState('')
    const { radio, loading, error } = useSelector(state => state.radio);
    console.log(radio);
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllRadioReader())
    },[])

    const handlePlay=(url)=>{
        setPlayAudio(true)
        setCurrentRadioUrl(url)

    }
  return (
    <>
    <div className='text-white space-y-4 relative'>
    <h1 className='text-3xl text-white hover:underline'>راديو مباشر</h1>
    {loading && <div className='flex justify-center items-center min-h-screen'><Loader /></div>}
   <div className='grid grid-cols-1 md:grid-cols-2 max-[360px]:grid-cols-1 lg:grid-cols-3 gap-4'>
    {radio.map((radio)=><h2 className='text-xl px-4 py-2 bg-gradient-to-b from-gray-500 to-green-900  rounded  cursor-pointer  ' key={radio.id} 
    onClick={()=>handlePlay(radio.url)}
    >{radio.name}</h2>) }
   </div>
    </div>
    {playAudio && <RadioPlayer src={currentRadioUrl}  />}
    </>
  )
}
