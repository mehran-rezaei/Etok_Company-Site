import { Button } from 'antd';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const BlogSwiperSlider = (props:any) => {
    const  {image,image2,title ,description ,id} = props
    console.log(id);
    
    return (
        <SwiperSlide className='w-full lg:w-[940px]   lg:h-[420px]   px-3 sm:px-6 mt-1  '>
        <div className=' rounded-2xl lg:rounded-lg px-2 lg:px-12 py-3  sm:py-6
        shadow-[rgba(0,0,0,_0.13)_0px_0px_16px]
        flex items-center 
         lg:items-start justify-between flex-row mb-8 lg:mb-0 '>
        <div className='lg:w-1/2'>
          <img src={image}  className='rounded-md object-cover  lg:hidden w-80 h-56 lg:h-80  lg:w-60' alt="" />
          <img src={image}  className='rounded-md  object-cover hidden lg:block w-full h-40 sm:h-80 ' alt="" />
        </div>
        <div className='w-full lg:w-2/4  text-right lg:text-right leading-8 lg:pr-6 pt-3 lg:pt-5'>
                  <h1 className='min-h-[45px] sm:h-auto text-sm lg:text-lg font-semibold px-3 lg:px-0 '>
                    {title}
                  </h1>
                  <h2 className='min-h-[80px] sm:h-auto pr-4 maxline5 lg:px-2 block mt-4 lg:mt-6 font-medium 
                  text-xs lg:text-sm 
                 '>
                {description}
                  </h2>
                  <div  className='flex justify-center lg:absolute lg:left-20 lg:bottom-6  lg:justify-end mt-3 lg:mt-10'>

                    <Link href={`/blog/${id}`}
                    className="  cartButton lg:mt-3  w-full h-[50px] flex justify-around ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[black]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm">بیشتر بخوانید</span>
                    </button>
                  </Link>
                  </div>
        </div>
        </div>
        </SwiperSlide> 
    );
};

export default BlogSwiperSlider;