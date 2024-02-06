import React from 'react';
import BlogSlider from './BlogSlider';
import Navbar from '../shared/Navbar';
import Card from './Card';
import NewSlider from '../blogscrollcard/NewSlider';
import OtherBlogs from './OtherBlogs';
import Contact_us from '../home/contact_us';
import Nav from '../home/nav/nav';

const BlogMain = () => {
    return (
        <div className='min-h-[100vh]'>
                   <div className="relative z-40">
      <Nav />
      </div>
            <div className='mt-[85px] md:mt-28 lg:mt-14  '> </div>
            <BlogSlider />
            <div className="mt-10 lg:mt-0 lg:w-[90%]  flex justify-start items-center mr-6 lg:mr-20 mb-1 lg:mb-3">
            <h1 className="bgtitle text-xl lg:text-[30px] pl-3 lg:pl-0 pt-2 lg:pt-3 pr-5 lg:pr-10 h-[50px] lg:h-[70px] font-extrabold">
                تازه ها
            </h1>
           </div>
            <div dir='' className='flex justify-center items-center flex-col'>
            <NewSlider />
            </div>
            <Card />
            <div className="lg:w-[90%] flex justify-center lg:justify-start items-center lg:mr-20 mb-0">
            <h1 className="bgtitle text-[20px] lg:text-[25px] pt-3 lg:pr-10 h-[60px] lg:h-[70px] font-extrabold">
                 دیگر مطالب
            </h1>
           </div>
           <OtherBlogs />
           <div className='-mt-[500px] lg:-mt-[200px]'>
           <Contact_us />
           </div>
        </div>
    );
};

export default BlogMain;