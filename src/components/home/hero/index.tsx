import { useRouter } from "next/router";
import About_us from "../about_us";
import HeroLinkElement from "./HeroLinkElement";
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from "next/image";
function Hero() {

  return (
    <>
      <main className="w-full    overflow-hidden flex items-center justify-center px-6 lg:px-4 xl:px-6 flex-col  ">
        <div className="w-full lg:w-[90%] xl:w-[80%] text-center lg:text-right flex flex-col lg:flex-row justify-center lg:justify-between
         items-center lg:mt-8 mt-4 ">
        <motion.div 
             animate={{ x : 0,scale : 1 }} 
             initial={{ x : +500,  scale : 0.01}} 
             transition={ { ease : 'easeInOut' ,  duration : 0.5 }}
             className="text-[#404040] mt-14  lg:-mt-12">
          <h1 className="text-[19px] 
          font-extrabold lg:text-[30px] xl:text-[40px] mb-3 lg:mb-0 lg:mt-1 ">
            شرکت نرم افزاری ایتوک
          </h1>
          <p className=" hidden lg:block font-bold mt-3 text-center lg:text-right 
           text-[14px] sm:text-[14px] md:text-[20px] lg:mt-5 
          lg:text-[22px] xl:text-[28px]  leading-4 sm:leading-7">
            باما به سوی دنیای دیجیتال حرکت کن !
          </p>
          <div className=" hidden lg:block ">
          <HeroLinkElement />
          </div>
          <Link href="/aboutus" 
             className="bg-white hidden lg:block  border-black border text-black  text-center lg:mt-3  w-48 2xl:w-56 p-3 
             rounded-[25px] cursor-pointer
              hover:bg-black hover:text-white  transition-all ease-in duration-200">
              درباره ما
             </Link>
        </motion.div> 
        <motion.div 
        
        animate={{ x : 0,scale : 1 }} 
        initial={{ x : -500,  scale : 0.01}} 
        transition={ { ease : 'easeInOut' ,  duration : 0.5 }}>
          <Image src="/Images/heropic2.png" alt=""
          // fill
          // objectFit="cover"
          width={470}
          height={400}
          className="-scale-x-100"
  
           />
          </motion.div > 
          <p className=" lg:hidden block font-bold mt-6 text-center lg:text-right 
           text-[17px] sm:text-[14px] md:text-[20px] mb-3 lg:mb-0 lg:mt-5 
          lg:text-[28px]  leading-4 sm:leading-7">
            باما به سوی دنیای دیجیتال حرکت کن !
          </p>
          <div className="flex mt-8 mb-5 justify-between items-center lg:hidden relative gap-x-2 w-full   ">
          <div className=" lg:hidden block absolute lg:relative right-3  z-20 ">
          <HeroLinkElement />
          </div>
         
          <Link href="/aboutus" 
             className="bg-white lg:hidden block text-sm lg:text-base border-black border text-black  
             text-center lg:mt-3  w-52 pr-16 lg:pr-0 absolute lg:relative left-0 lg:w-48 2xl:w-56 p-2 lg:p-3 
             rounded-[25px] cursor-pointer z-10
              hover:bg-black hover:text-white  transition-all ease-in duration-200">
              درباره ما
             </Link>
          </div>
        </div>
        </main>
        <motion.div 
         animate={{ x : 0,scale : 1 }} 
         initial={{ x : +500,  scale : 0.01}} 
         transition={ { ease : 'easeInOut' ,  duration : 0.5 }}
        className="w-full  flex items-center justify-center xl:px-10 flex-col">
        <div className="w-full lg:w-[90%] xl:w-[80%] flex justify-center lg:justify-between items-center ">
        <div className='grid grid-cols-3 lg:grid-cols-2 w-[95%] lg:w-[65%] 2xl:w-[70%] justify-items-center gap-y-7 lg:gap-y-0 lg:flex items-start justify-between 
     mt-8  mb-6 lg:mb-0  lg:-mt-14 z-40 relative bg-[#fff] text-[#858585]
        shadow-[rgba(0,0,0,_0.13)_0px_0px_16px] rounded-3xl py-2 px-6 lg:px-12'>
            <Link href={'/project/33'} className='text-xs lg:text-sm font-semibold  text-center'>
                <img  className=' h-10 xl:h-16 mb-3 lg:mb-3' src="../../Images/logo/nobitok.svg" alt="" />
               نوبیتوک
            </Link>
            <Link href={'/project/81'}  className='text-xs lg:text-sm font-semibold  text-center'>
                <img  className=' h-10 xl:h-16 mb-3 lg:mb-3' src="../../Images/logo/jiba.svg" alt="" />
                جیبا
            </Link>
            <Link href={'/project'} className='text-xs lg:text-sm font-semibold  text-center'>
                <img  className='   h-10 xl:h-16 mb-3 lg:mb-3' src="../../Images/logo/titanium.svg" alt="" />
              تیتانیوم
            </Link>
            <Link href={'/project/31'} className='text-sm font-semibold hidden lg:block text-center'>
                <img  className=' h-10 xl:h-16 mb-3' src="../../Images/logo/status.ico" alt="" />
               طب کار
            </Link>
          
        </div>
        </div>
        </motion.div>
       
    </>
  );
}

export default Hero;
