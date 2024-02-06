
import BlogDetails from '@/components/Blog/BlogDetails';
import Footer from '@/components/home/footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const blog1 = () => {
    return (
        <div dir='rtl' className='w-full'>
            <Navbar />
            <BlogDetails />
            <Footer/>   
        </div>
    );
};

export default blog1;