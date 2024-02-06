import { Button } from "antd";
import Link from "next/link";
import { useState, useContext } from "react";
import { appflow_Handller } from "@/context/appflow";
import { Link as ScrollLink } from "react-scroll";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Nav() {
  const [showmegamenu, setshowmegamenu] = useState(false);
  const [showmeHamber, setShowmeHamber] = useState(true);
  const { state, dispatch } = useContext(appflow_Handller);
  const scrollOptions = {
    duration: 100, // Scroll duration in milliseconds
    offset: -100, // Scroll offset (positive or negative) from the top of the target element
    smooth: true, // Enable smooth scrolling
    spy: true, // Enable active state on navigation based on scroll position
    hashSpy: true, // Enable active state on navigation based on hash changes
  };
  const squareVariants = {
    visible: { y:1 , opacity: 1, scale: 1, transition: { duration: 0.8  } },
    hidden: { opacity: 0, scale: 1, y : -10 }
  };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  return (
    <>
    <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      // className="square"
      // animate={{ y : 0,scale : 1 }} 
      // initial={{ y : -100,  scale : 0.01}} 
      transition={ { ease : 'circIn' }}
     className=" flex justify-center items-center flex-col  lg:mt-4 lg:mb-8">
      <div className=" hidden lg:w-[95%]  xl:w-[90%] rounded-2xl h-auto
       pl-6 xl:pl-0 xl:px-[0px]  py-3 font-extrabold text-[14px] 
      lg:text-[14px] 2xl:text-[20px] z-10 text-white  
             lg:flex items-center justify-between bg-[#232636] ">
        <div className="flex pr-8  items-center justify-around w-3/4 lg:gap-x-4 xl:gap-x-[10px] xl:[100px]  ">
          <Link href={'/'}>
            <img
              className="cursor-pointer"
              src="../../../Images/logo/logo.svg"
              alt=""
            />
          </Link>
  
          <Link href={'/project/33'}>
            <p className="cursor-pointer">نوبیتوک </p>
          </Link>
          <ScrollLink to="targetElement2" {...scrollOptions}>
            <p className="cursor-pointer">تکنولوژی ها</p>
          </ScrollLink>
          <div
            className={`relative ${
              showmegamenu ? "border-b-[2px] border-white" : ""
            }`}
          >
            <p
              onClick={() => setshowmegamenu(!showmegamenu)}
              className="cursor-pointer flex items-center gap-x-1 "
            >
              خدمات ما
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>

            </p>
            <div
              className={`w-[450px] h-[150px] text-black text-sm font-normal shadow-2xl top-[45px] ${
                showmegamenu ? "grid grid-cols-9" : "hidden"
              } bg-white rounded-2xl rounded-tr-none absolute`}
            >
              <div className="flex flex-col pt-5 pr-7 gap-5 col-span-4">
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 0 })}
                  href={'/services'}
                >
                  طراحی رابط کاربری
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 1 })}
                  href={'/services'}
                >
                  طراحی سایت
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 2 })}
                  href={'/services'}
                >
                  طراحی اپلیکیشن
                </Link>
              </div>
              <div className=" w-full h-full flex justify-center items-center">
                <div className="bg-black w-[1.5px] h-[80%]"></div>
              </div>
              <div className="flex flex-col pt-5 pr-7 gap-5 col-span-4">
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 3 })}
                  href={'/services'}
                >
                  سئو
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 4 })}
                  href={'/services'}
                >
                  مشاوره کسب و کار
                </Link>
              </div>
            </div>
          </div>
          <Link href={'/project'}>
            <p className="cursor-pointer">پروژه ها</p>
          </Link>
          <Link href='/blog'>
            <p className="cursor-pointer">بلاگ</p>
          </Link>
          <Link href={'/aboutus'}>
            <p className="cursor-pointer">درباره ما</p>
          </Link>
        </div>
        <div>
          <ScrollLink to="targetElement" {...scrollOptions}>
            <Button className=" font-medium xl:ml-9 xl:mt-0 border-white text-white
            hover:bg-white hover:text-black
            transition-all ease-in duration-200
             text-[14px] rounded-2xl px-8 "  type="ghost">
            تماس با ما 
            </Button>
          </ScrollLink>
        </div>
      </div>
    </motion.div >

      <div className={` w-full  absolute z-50 top-0 lg:hidden ${showmeHamber ? 'px-6' : ''} `}>
        <div className={` w-full  mb-2 text-white 
       ${showmeHamber ? 'bg-[#232636] mt-4 pl-[15px] pr-[30px]' : 'mt-2'}  rounded-2xl 
        
        py-2 font-extrabold text-[14px] lg:text-[18px] z-10 
        flex items-center justify-between`}>
          {showmeHamber && (
            <div className="block" onClick={() => setShowmeHamber(false)}>
              <img
                src="../../../meh/hamberger2.svg"
                className="cursor-pointer h-4"
                alt=""
              />
            </div>
          )}
          {showmeHamber && (
            <Link href={'/'}>
              <img
                src="../../../Images/logo/logo.svg"
                className="cursor-pointer  sm:h-auto  h-6 "
                alt=""
              />
            </Link>
          )}
          {showmeHamber === false && (
            <div className=" fixed top-0 bg-[#232636] text-white w-[75%] px-6 pt-14 py-6
             flex flex-col gap-y-5 
            rounded-l-2xl ">
              <div>
                <p className="cursor-pointer">ما کی هستیم؟</p>
              </div>
              <Link href={'/project/33'}
                    //  onClick={() =>  {
                    //   // Cookies.set('id','33') 
                    // } }
              >
            <p className="cursor-pointer">نوبیتوک </p>
          </Link>
          <ScrollLink to="targetElement2" {...scrollOptions}>
                <p className="cursor-pointer">تکنولوژی ها</p>
              </ScrollLink>
              <div
            className={`relative ${
              showmegamenu ? "" : ""
            }`}
          >
            <p
              onClick={() => setshowmegamenu(!showmegamenu)}
              className="cursor-pointer flex items-center gap-x-1 mb-1 "
            >
              خدمات ما
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>

            </p>
            <div
              className={`text-white text-xs font-normal  ${
                showmegamenu ? "grid  grid-cols-1 pr-3 border-r border-white" : "hidden"
              }  `}
            >
              <div className="flex flex-col pt-2  gap-y-3 ">
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 0 })}
                  href={'/services'}
                >
                  طراحی رابط کاربری
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 1 })}
                  href={'/services'}
                >
                  طراحی سایت
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 2 })}
                  href={'/services'}
                >
                  طراحی اپلیکیشن
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 3 })}
                  href={'/services'}
                >
                  سئو
                </Link>
                <Link
                  onClick={() => dispatch({ type: "Edit", payload: 4 })}
                  href={'/services'}
                >
                  مشاوره کسب و کار
                </Link>
              </div> 
            </div>
          </div>
              {/* <Link
                href={'/services'}
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
              </Link> */}
              <Link href={'/project'}>
                <p className="cursor-pointer">پروژه ها</p>
              </Link>
              <Link href='/blog'>
                <p className="cursor-pointer">بلاگ</p>
              </Link>
              <Link href={'/aboutus'}>
                <p className="cursor-pointer">درباره ما</p>
              </Link>
              <div
                onClick={() => setShowmeHamber(true)}
                className="absolute top-3 left-5 text-xl"
              >
                <img src="../../Images/logo/exit.svg" alt="" />
              </div>
              <Link href='/'  className="absolute top-3 right-5 text-xl">
                <img src="../../Images/logo/logohamber.svg" alt="" />
              </Link>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default Nav;
