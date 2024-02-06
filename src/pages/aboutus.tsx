import AboutUSWhyOus from '@/components/AboutUs/AboutUSWhyOus';
import AboutUsHero from '@/components/AboutUs/AboutUsHero';
import OurCustomer from '@/components/AboutUs/OurCustomer';
import OurMember from '@/components/AboutUs/OurMember';
import WorkWeCan from '@/components/AboutUs/WorkWeCan';
import Contact_us from '@/components/home/contact_us';
import Footer from '@/components/home/footer';
import Nav from '@/components/home/nav/nav';
import Navbar from '@/components/shared/Navbar';
import Head from 'next/head';
import React from 'react';

const aboutus = () => {
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
        <div dir='rtl'>
        <div className="relative z-40">
      <Nav />
      </div>
            <div className='mt-20 md:mt-0 flex justify-start items-center flex-col'>
                <AboutUsHero/>
                <AboutUSWhyOus />
                <WorkWeCan />
                <OurCustomer />
                <OurMember/>
            </div>
            <div className='-mt-[500px] lg:-mt-[300px]'>
           <Contact_us />
           </div>
            <Footer />
        </div>
        </>
    );
};

export default aboutus;