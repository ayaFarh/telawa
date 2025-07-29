import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="text-white space-y-4">
        <div className='relative'><Image src="/close-up-islamic-new-year-with-quran-book.jpg" alt='cover' width={500} height={500} className='w-full h-[300px] object-cover '/>
           <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        </div>
        <div className=' text-white text-center space-y-4'><h1 className='text-3xl  max-[780px]:text-xl text-green-200'>كتاب أنزلناه إليك مبارك ليدبروا آياته وليتذكر أولوا الألباب </h1>
        <p className='w-[80%] m-auto text-2xl max-[780px]:text-xl text-gray-400'>عن أبي أمامة الباهلي رضي الله عنه قال : سمعت رسول الله صلى الله عليه وسلم يقول : اقرءوا القرآن فإنه يأتي يوم القيامة شفيعا لأصحابه , اقرءوا الزهراوين البقرة وسورة آل عمران فإنهما تأتيان يوم القيامة كأنهما غمامتان أو كأنهما غيايتان أو كأنهما فرقان من طير صواف تحاجان عن أصحابهما اقرءوا سورة البقرة فإن أخذها بركة وتركها حسرة ولا تستطيعها البطلة .... رواه مسلم</p>

</div>
        
    </div>
  )
}
