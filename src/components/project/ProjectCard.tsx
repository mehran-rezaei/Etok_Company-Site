import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Button, Divider } from "antd";
import Cookies from "js-cookie";


const ProjectCard = (props:any) => {
    const { image , title , description, id  , buttonText} = props
    return (
        <SwiperSlide className=" w-full flex flex-col items-center justify-center">
        <div
        className={`w-[100%] mt-12  relative  lg:w-[85%] h-[400px]   text-right lg:text-right drop-shadow-md flex
          lg:items-center flex-col lg:flex-row lg:mt-3 items-center 
          justify-center ${buttonText ? 'mt-12 lg:h-[340px]' : 'mt-24 lg:h-[250px]'}`}>
          <div className='absolute lg:scale-75 xl:scale-[1.3] -top-5 lg:top-auto lg:right-0 mr-0 lg:mr-0 lg:ml-0 mb-0 md:mb-0 lg:mb-0
           '>
            <Link href={`/project/${id}`}>
          <img
               src={image}
            alt=""
            className={`lg:h-[220px]  ${buttonText ? ' w-[320px]' : '-top-14 lg:-top-0 w-[250px] lg:w-[150px] lg:mr-6'}  relative z-50 `}
          />
           </Link>
          </div>
          <div className=' bg-white/20 rounded-[20px] w-[90%] h-[400px] lg:h-[200px] lg:w-[100%] text-white 
          text-center lg:text-right  grid items-end lg:items-end    lg:gap-y-4 py-2  lg:py-3 lg:px-8 '>
            <div className='  flex flex-col justify-center lg:justify-end 
              items-center lg:items-end  '>
              <div className='w-[100%] lg:w-[60%]'>
            <h2 className="w-full  text-lg font-medium">
            {title}
          </h2>
          <p className="block text-sm mt-3 px-2 leading-7 sm:leading-6 sm:font-medium  w-full ">
          {description}
          </p>
          </div>
           <Link href={`/project/${id}`} 
            onClick={() =>  {
              Cookies.set('id', id)
              // Cookies.set('titlepr', data.title) 
            } }
        className={`cartButton   w-full   flex justify-center lg:justify-end
        ${buttonText ? 'opacity-100 h-[50px] mt-3' : 'opacity-0 '} `}>      
          <button dir="ltr" className="learn-more ">
            <span className="circle bg-[#2983F6]" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-sm text-white"> {buttonText}</span>
          </button>
        </Link> 

            </div>
          

{/* <div>zdlmdm</div> */}
          </div>
        </div>
      </SwiperSlide>
    );
};

export default ProjectCard;