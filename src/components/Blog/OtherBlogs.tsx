import React from 'react';
import Previeousblogs from '../blogscrollcard/Previeousblogs';
import SubjectBlogs from '../blogscrollcard/SubjectBlogs';
import { Button } from "antd";


const OtherBlogs = () => {
    return (
        <div dir='ltr' className='flex justify-center items-center flex-col   mt-0 lg:mt-6 mb-16
        '>
         <div className='bg-[#444757]  h-auto w-[95%] lg:w-[90%] rounded-[20px]
        pt-2  lg:pt-5 pb-12 px-3 lg:px-6'>
           <Previeousblogs />
           <h2 dir='rtl' className='text-white flex gap-x-2 mt-12 mb-10 lg:mb-20 
            pr-3 text-sm lg:pr-2 lg:text-2xl '>  
             <span>  مطالب گذشته</span>
              <div className='flex'>
              <img src="../../Images/Vector147.svg" alt="" />
              <img src="../../Images/Vector147.svg" alt="" />
              <img src="../../Images/Vector147.svg" alt="" />
              </div>
             </h2>
             <div dir='rtl' className='lg:mr-5 grid grid-cols-2 gap-2 lg:block'>
                      <Button  className=" bg-white font-medium xl:ml-5 xl:mt-1 border-[#272E48] text-[#272E48] text-[11px] lg:text-[14px] rounded-2xl px-4 lg:px-8  h-10 lg:h-12"  type="primary">
                   آموزشی
                     </Button>
                     <Button  className=" bg-white font-medium xl:ml-5 xl:mt-1 border-[#272E48] text-[#272E48]  text-[11px] lg:text-[14px] rounded-2xl px-4 lg:px-8  h-10 lg:h-12"  type="primary">
                   تکنولوژی
                     </Button>
                     <Button  className=" bg-white font-medium xl:ml-5 xl:mt-1 border-[#272E48] text-[#272E48]  text-[11px] lg:text-[14px] rounded-2xl px-4 lg:px-8  h-10 lg:h-12"  type="primary">
                     برنامه نویسی
                     </Button>
                     <Button  className=" bg-white font-medium xl:ml-5 xl:mt-1 border-[#272E48] text-[#272E48]  text-[11px] lg:text-[14px] rounded-2xl px-4 lg:px-8  h-10 lg:h-12"  type="primary">
                     اطلاعات عمومی
                     </Button>
             </div>
           <SubjectBlogs />     
         </div>
         </div>
    );
};

export default OtherBlogs;