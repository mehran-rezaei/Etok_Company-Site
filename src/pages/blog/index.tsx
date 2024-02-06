import React from 'react';
import BlogMain from '@/components/Blog/BlogMain';
import Footer from '@/components/home/footer';
import Head from 'next/head'

const index = () => {
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
            <div dir='rtl' className='w-full'>
                <BlogMain />
                <Footer />
            </div>
        </>

    );
};

export default index;