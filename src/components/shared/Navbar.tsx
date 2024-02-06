import { Button } from 'antd';
import Link from 'next/link';
import React, { useState,useContext } from 'react';
import { appflow_Handller } from '@/context/appflow';
import { Link as ScrollLink } from "react-scroll";
import Cookies from 'js-cookie';





const Navbar = () => {
  const [showmegamenu, setshowmegamenu] = useState(false);
  const { state, dispatch } = useContext(appflow_Handller);
  const [showmeHamber, setShowmeHamber] = useState(true);
  const scrollOptions = {
    duration: 800, // Scroll duration in milliseconds
    offset: -100, // Scroll offset (positive or negative) from the top of the target element
    smooth: true, // Enable smooth scrolling
    spy: true, // Enable active state on navigation based on scroll position
    hashSpy: true, // Enable active state on navigation based on hash changes
  };

    return (
        <div>
            <div className='hidden lg:flex items-center w-full justify-between px-6 sm:px-14 py-6 sm:py-7'>
                <div className='block lg:hidden '>
                <img src='../../../meh/hamberger.svg' className='cursor-pointer h-4' alt="" />
                </div>
            <div className='flex justify-between items-center gap-x-24 z-30'>
                <Link href={'/'}>
                <img src='../../../meh/logo.svg' className='cursor-pointer  sm:h-auto  h-8 ' alt="" />
                </Link>
                <ul className='hidden lg:flex  justify-between items-end gap-x-8 xl:gap-x-20 text-sm xl:text-lg font-semibold'>
                    {/* <Link href={'/'}><li>ما کی هستیم؟</li>     </Link> */}
                    <Link href={'/project/33'}>
                       <p className="cursor-pointer">نوبیتوک </p>
                     </Link >
                    {/* <Link href={'/'}><li>تکنولوژی ها</li>     </Link> */}
                    <div
            className={`relative ${
              showmegamenu ? "border-b-[2px] border-white" : ""
            }`}
          >
            <p
              onClick={() => setshowmegamenu(!showmegamenu)}
              className="cursor-pointer "
            >
              خدمات ما
            </p>
            <div
              className={`w-[450px] h-[150px] text-black text-sm font-normal shadow-2xl top-[45px] ${
                showmegamenu ? "grid grid-cols-9" : "hidden"
              } bg-white rounded-2xl rounded-tr-none absolute`}
            >
              <div className="flex flex-col pt-5 pr-7 gap-5 col-span-4">
                <Link onClick={() => dispatch({ type : 'Edit' , payload : 0})} href={'/services'}>طراحی رابط کاربری</Link>
                <Link onClick={() => dispatch({ type : 'Edit' , payload : 1})} href={'/services'} >طراحی سایت</Link>
                <Link onClick={() => dispatch({ type : 'Edit' , payload : 2})} href={'/services'}>طراحی اپلیکیشن</Link>
              </div>
              <div className=" w-full h-full flex justify-center items-center">
                <div className="bg-black w-[1.5px] h-[80%]"></div>
              </div>
              <div className="flex flex-col pt-5 pr-7 gap-5 col-span-4">
                <Link onClick={() => dispatch({ type : 'Edit' , payload : 3})} href={'/services'}>سئو</Link>
                <Link onClick={() => dispatch({ type : 'Edit' , payload : 4})} href={'/services'}>مشاوره کسب و کار</Link>
              </div>
            </div>
          </div>
                    <Link href={'/project'}><li>پروژه ها</li>     </Link>
                    <Link href={'/blog'}><li>بلاگ</li>     </Link>
                    <Link href={'/aboutus'}><li>درباره ما</li>     </Link>

                </ul>
            </div>
            <div className='hidden lg:flex '>
            <div>
          <ScrollLink to="targetElement" {...scrollOptions}>
            <Button className="bg-white font-medium xl:ml-9 xl:mt-1 border-[#272E48] text-[#272E48] text-[14px] rounded-2xl px-8 "  type="primary">
            تماس با ما 
            </Button>
          </ScrollLink>
        </div>
            </div>
            </div>


            <div className='flex font-semibold text-sm lg:hidden items-center w-full justify-between px-6 sm:px-14 py-6 sm:py-7'>
            {showmeHamber &&
            <div className='flex justify-between items-center w-full'>
                <div className='block  '>
                <img 
                 onClick={() => setShowmeHamber(false)}
                 src='../../../meh/hamberger.svg' className='cursor-pointer h-4' alt="" />
                </div>
                     <Link href={'/'}>
                     <img src='../../../meh/logo.svg' className='cursor-pointer  sm:h-auto  h-8 ' alt="" />
                     </Link>
                    </div>
               }
              {showmeHamber === false &&
            <div className="absolute left-4 w-[92%] top-5 border-black border  z-40 bg-white text-black  p-3 flex flex-col gap-y-2 rounded-lg">
            <Link href={'/'}>
            <p className="cursor-pointer">خانه</p>
          </Link>
          <Link href={'/project/33'}
                //  onClick={() =>  {
                //   Cookies.set('id','33') 
                // } }
          >
            <p className="cursor-pointer">نوبیتوک </p>
          </Link >
          {/* <Link href={'/'}>
            <p className="cursor-pointer">تکنولوژی ها</p>
          </Link> */}
          <Link href={'/services'}
            className={`relative ${
              showmegamenu ? "border-b-[2px] border-white" : ""
            }`}
          >
            <p
              onClick={() => setshowmegamenu(!showmegamenu)}
              className="cursor-pointer"
            >
             خدمات ما
            </p>
          </Link>
          <Link href={'/project'} >
            <p className="cursor-pointer">پروژه ها</p>
          </Link>
          <Link  href='/blog'>
            <p className="cursor-pointer">بلاگ</p>
          </Link >
          <Link href={'/aboutus'}>
          <p className="cursor-pointer">درباره ما</p>
          </Link>
          <div onClick={() => setShowmeHamber(true)}
          className="absolute top-3 left-5 text-xl">
            x
          </div> 
            </div>}
            </div>
        </div>
    );
};

export default Navbar;