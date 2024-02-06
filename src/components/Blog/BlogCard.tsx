import React from 'react';
import Link from "next/link";
import { SwiperSlide } from 'swiper/react';
// import { url } from 'inspector';
import { Button, Divider } from "antd";
import Cookies from "js-cookie";

const BlogCard = (props:any) => {
    const { image, title , description , id} = props
    console.log(id);
    
    return (
      //   <SwiperSlide className="">
      //   <div className="relative bgcard pl-10 pr-8 sm:w-[365px] h-[530px] 
      //   sm:h-[500px] text-center sm:text-right drop-shadow-md flex items-center 
      //   sm:items-start flex-col pt-10   ">
      //     <img
      //       src={image}
      //       alt=""
      //       className="h-fit w-full px-1  rounded-lg lg:h-[200px] clippath "
      //     />
       
      //     <h2 className="w-full mt-5  text-lg font-semibold">
      //      {title}
      //     </h2>
      //     <p className="text-sm mt-2  sm:font-normal maxline3  overflow-hidden  w-3/4 ">
      //      {description}
      //      {description}
           
      //     </p>
      //     <Link 
      //     href={`/blog/${id}`}
      //     onClick={() =>  {
      //       Cookies.set('idblog', id) 
      //       Cookies.set('titleblog', title)
      //     }}
      //      className='absolute bottom-10'>
      //       <Button
      //         className="bg-[#4355FF] mt-8 sm:mt-0 w-48"
      //         size="middle"
      //         type="primary"
      //       >
      //         بیشتر بخوانید
      //       </Button>
      //     </Link>
      //   </div>
      // </SwiperSlide>
   
      <div dir='rtl' className="w-[340px] md:w-[330px]   my-2 min-h-[440px] md:h-[470px] text-right 
        py-3 rounded-[25px] 
        shadow-[-7px_7px_1px_1px_#1a202c]
       flex flex-col gap-2 items-center justify-center
       border  border-[#31374D]">
               <img
                 className="w-[270px] md:w-[370px] px-3 rounded-3xl h-[150px] md:h-[200px]"
                 src={image}
                 alt=""
               />
               <div className="items-center pt-4  px-3 h-full flex justify-between  flex-col">
                 <div className="flex gap-3 items-center text-center flex-col">
                   <h1 className="px-1 text-[17px] font-bold">{title}</h1>
                   <p className=" px-1 text-[12px] leading-6 block min-h-[110px] max-h-[110px]">
                     {description}
                   </p>
                 </div>
                 <Link href={`/blog/${id}`}
                   className="  cartButton mt-1  w-full h-[50px] flex justify-around blogslider">
                        <button dir="ltr" className="learn-more ">
                     <span className="circle bg-[#3D64F0]" aria-hidden="true">
                       <span className="icon arrow"></span>
                     </span>
                     <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                   </button>
                 </Link>
               </div>
             </div>
    
    );
};

export default BlogCard;