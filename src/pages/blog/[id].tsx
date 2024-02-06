import Navbar from '@/components/shared/Navbar';
import  Footer  from '../../components/home/footer'
import React, { Component } from 'react';
import BlogDetails from '@/components/Blog/BlogDetails';
import Nav from '@/components/home/nav/nav';
import Head from 'next/head';

const blogPage = () => {
    return (
        <>
                <Head>
                <title>Etok / ایتوک</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" className="w-10 h-10" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
        <div dir='rtl' className='w-full '>
                <div className="relative z-40">
      <Nav />
      </div>
        <div className='mt-20 md:mt-0'> </div>
        <div className='min-h-screen lg:px-28'>
         <BlogDetails />
        </div>
        <Footer/>
        </div>
        </>

    );
};

export default blogPage;