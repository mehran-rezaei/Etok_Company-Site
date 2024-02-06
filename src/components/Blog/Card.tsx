import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { getAllblogs, getRecentblogs } from "@/DataService/BlogPageProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from "../home/news";
import NewsBlog from "./newsBlogSections/NewsBlog";


const Card = () => {
  const [blogs ,setBlogs] = useState<any>(false)
  const [recentblogs ,setRecentBlogs] = useState<any>(false)
  useEffect(() => {
    getRecentblogs(2)
    .then(Response => {
      console.log(Response.data.dataList);
      setRecentBlogs(Response.data.dataList)
    })
    getAllblogs(2)
    .then(Response => {
      console.log(Response.data.dataList);
      setBlogs(Response.data.dataList)
    })
  } ,[])
  console.log(blogs);
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    pagination : true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1
  };
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const sliderRef = useRef<any>(null);

  const handlePrevClick = () => {
      sliderRef.current.slickPrev();
  };
  const handleNextClick = () => {
      sliderRef.current.slickNext();
  };
  return (
    <div className=" flex justify-center  flex-col items-center lg:items-center mb-0">
      {blogs &&
      
      <div className="lg:w-[90%] my-20 flex items-center justify-center flex-col">
          {/* <div className=" w-full flex justify-start lg:justify-center items-center mr-9 lg:mr-0 mb-0">
              <h1 className="bgtitle text-xl lg:text-[30px] 
                   pl-6 pt-2 pr-6   h-[50px] font-extrabold">
                اخبار 
              </h1>
        </div> */}

        <div dir="rtl" className="block lg:hidden w-[360px] md:w-[400px] sliderblogcard">
    
        <Slider arrows={false} {...settings}   ref={sliderRef}
        className="" > 
          {recentblogs && recentblogs.map((blog:any, index:any) => (
           <BlogCard
          //  image='../../meh/card1img.png'
          image={blog.image}
           title={blog.title}
           description={blog.description}
           id={blog.id}
            />     
          ))}
          </Slider>
          <button 
        className=" absolute mt-4 left-9"
         onClick={handlePrevClick}> 
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
         </button>
          <button 
          
                  className=" absolute mt-4 right-9"
           onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
           </button>

        </div>
      
        <div>
        <NewsBlog />
        </div>
{/* ///////////////////////////////////////////////// */}


        {/* <div className="flex justify-end">
          <div
            className="bg-[#232636] text-white -mt-20 -mb-24  w-28 sm:w-44  ml-6 sm:ml-14
         break-words text-center sm:text-right  left-0   top-0 h-80 flex justify-center 
         items-center font-semibold text-xl">
            <h2>بلاگ ها</h2>
          </div>
        </div> */}

        {/* <div className="flex  justify-center items-center cardsliderr"> */}
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true, dynamicBullets: false }}
            navigation
            className="mySwiper flex justify-center"
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              1280: {
                slidesPerView: 3,
              },
              760: {
                slidesPerView: 2,
              },
            }}
            freeMode={true}
          >
          {blogs && blogs.map((blog:any ,index:any) => (
           <SwiperSlide key={index}>
           <BlogCard
           image={blog.image} 
           title={blog.title}
           description={blog.description}
           id={blog.id}
            />
         </SwiperSlide>        
          ))}
          

          </Swiper> */}
        {/* </div> */}
      </div> }
    </div>
  );
};

export default Card;
