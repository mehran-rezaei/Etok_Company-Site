import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Link from 'next/link';
import { getAllblogs } from '@/DataService/BlogPageProvider';
import BlogSwiperSlider from './BlogSwiperSlider';
import NewSlider from '../blogscrollcard/NewSlider';


const BlogSlider = () => {
  const [blogs, setBlogs] = useState<any>([])
  const limitedArray = blogs.slice(0, 5);

  useEffect(() => {
    getAllblogs(2)
      .then(Response => {
        console.log(Response.data.dataList);
        setBlogs(Response.data.dataList)
      })
  }, [])

  return (
    <div>
      {blogs.length > 0 ?
        <div className=' mt-6 sm:mt-6 flex justify-center items-center flex-col'>
          <div className=' bgheadersmall sm:bgheader  text-center text-white text-lg  sm:text-2xl
            flex justify-center items-center w-[330px]  lg:w-[600px] h-[46px] lg:h-[60px]'>
            <h2 className='w-full '>بلاگ</h2>
          </div>
          <div className='w-full md:w-[80%] lg:w-[65%] xl:w-[57%] blogslider'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true, dynamicBullets: false, }}
              navigation
              className="mySwiper z-10"
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                1280: {
                  slidesPerView: 1,
                },
              }}
              freeMode={true}
            // scrollbar={{
            //   "hide":false
            // }}

            >
              {limitedArray && limitedArray.map((blog: any, index: any) => (
                <SwiperSlide key={index}>
                  <BlogSwiperSlider
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
                    id={blog.id}
                  />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>
      <BlogSwiperSlider 
      image1='../../meh/slider1sm.png'
      image2='../../meh/blogslider1.png'
      title='طراحی رابط کاربری' 
      description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ '
      />
      </SwiperSlide>  
      <SwiperSlide>
      <BlogSwiperSlider 
      image1='../../meh/slider1sm.png'
      image2='../../meh/blogslider1.png'
      title='طراحی رابط کاربری' 
      description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ '
      />
      </SwiperSlide> 
      <SwiperSlide>
      <BlogSwiperSlider 
      image1='../../meh/slider1sm.png'
      image2='../../meh/blogslider1.png'
      title='طراحی رابط کاربری' 
      description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ '
      />
      </SwiperSlide>  */}

            </Swiper>
          
            {/* <div className='bg-[#E6F2FA] -mt-11 -mb-6 z-0 sm:-mt-11 sm:-mb-5 w-24 sm:w-40 mr-6 sm:mr-10 relative top-0 h-60 flex justify-center 
     items-center font-semibold text-2xl'>
              <h2>تازه ها</h2>
            </div> */}
          </div>
        </div>
        :
        <div className='h-[100vh] opacity-0'>
             loading...
        </div>
        
      }
 
    </div>
  );
};

export default BlogSlider;