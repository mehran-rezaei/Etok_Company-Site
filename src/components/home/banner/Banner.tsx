import { Button } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useState , useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Banner = () => {
    const [hoverActived , setHoverActived] = useState(false)
    const squareVariants = {
      visible: { y:1 , opacity: 1, scale: 1, transition: { duration: 1.1  } },
      hidden: { opacity: 0.5, scale: 0.5, y : 1 }
    };
      const controls = useAnimation();
      const [ref, inView] = useInView();
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
  
    return (
      <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      // className="square"
      // animate={{ y : 0,scale : 1 }} 
      // initial={{ y : -100,  scale : 0.01}} 
      transition={ { ease : 'easeIn' }}
         className='w-[100%]  lg:w-auto flex justify-center items-center  mt-[125px] lg:mt-[300px] 2xl:mt-[380px] '>
            <section 
            className='w-[320px] sm:w-[420px] bgbanner lg:w-[90%]  xl:w-[75%]   text-center lg:text-right
             h-[420px]  lg:h-auto  2xl:h-[330px] lg:relative flex justify-around
             items-center  lg:flex-row flex-col-reverse'
      >
        <div>
          <h2 className="text-[18px] lg:text-[25px] font-semibold">نوبیتوک</h2>
          <h3 className="text-[14px] lg:text-[19px] mb-[50px] lg:my-3 font-semibold ">
            {" "}
            همین حالا مدیریت خود را ارتقا بده !{" "}
          </h3>
          <Link
            href={`/project/${33}`}
            className="flex justify-center"
            onClick={() => {
              Cookies.set("id", "33");
            }}>  
            <Button
              onMouseEnter={() => setHoverActived(true)}
              onMouseLeave={() => setHoverActived(false)}
              type="ghost"
              className="text-base lg:text-lg text-white bg-[#3AD685]
                         transition-all ease-in duration-200
                          hover:-bottom-[4px]
                          rounded-[35px] hover:-mr-1  h-9 lg:h-12  w-44  flex justify-center
                           items-center 
                           text-center lg:absolute bottom-9 lg:bottom-5 xl:-bottom-0 font-medium
                           "
            >
              <p
                className={`  z-50    absolute text  transition-all ease-in duration-200 ${
                  hoverActived ? " opacity-0 " : "opacity-100  z-50  "
                }`}
              >
                ارتقا ..!{" "}
              </p>
              <p
                className={`   z-50  absolute transition-all ease-in duration-200 ${
                  hoverActived ? " opacity-100   z-50   " : "opacity-0"
                }`}
              >
                بهترین تصمیم
              </p>
              <div 
               className={`text-lg text-white border-b border-r border-[#3AD685]
               transition-all ease-in duration-400 hidden lg:flex
               
                rounded-[35px] -mr-1   h-12 relative z-0  w-44   justify-center
                 items-center 
                 text-center lg:absolute bottom-7 lg:-bottom-1 font-medium
                 ${
                  hoverActived ? "lg:bottom-1 mr-1 border-none   transition-all ease-in duration-400 " : ""}
                 `}> 
              </div>
            </Button>
          </Link>
        </div>
        <Link href={`/project/${33}`} className="min-h-8">
          <img
            src="../../../../Images/DeviceMacbookAir.svg"
            className="h-32 lg:h-64 "
            alt="lb"
          />
        </Link>
      </section>
    </motion.div >

  );
};

export default Banner;
