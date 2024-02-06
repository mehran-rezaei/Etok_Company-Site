import Footer from '@/components/home/footer';
import Nav from '@/components/home/nav/nav';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectCardSection from '@/components/project/ProjectCardSection';
import ProjectHeader from '@/components/project/ProjectHeader';
import Navbar from '@/components/shared/Navbar';
import Head from 'next/head';
import React from 'react';

const project = () => {
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
        <ProjectHeader />
        
        <div className='mt-12'>
        <Footer/>
        </div>
       
        </div>
        </>
    );
};

export default project;