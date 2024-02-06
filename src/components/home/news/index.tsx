import { getRecentblogs } from "@/DataService/BlogPageProvider";
import { Button } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogCard from "@/components/Blog/BlogCard";

function News() {
  const [Data, setData]: any = useState([]);
  useEffect(() => {
    getRecentblogs(2)
      .then((Response) => {
        console.log(Response);
        setData(Response.data.dataList);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);
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
  const squareVariants = {
    visible: { x:1 , opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 1, x :500 },
    hidden2: { opacity: 0, scale: 1, x :-500 }
  };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    const [currentSlide, setCurrentSlide] = useState<any>(0);
    const sliderRef = useRef<any>(null);
  
    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };
    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };
  return (
    <>
      {Data.length > 0 ? (
        <div className="relative md:h-[80vh] 2xl:h-[80vh] h-fit w-full flex items-center -mt-12 flex-col lg:mt-[0px] mb-[100px] lg:mb-[20px]">
          <div className="hidden xl:flex flex-col justify-center gap-10 h-[90vh] items-center absolute left-[50px] xl:left-[60px]">
            <div className="number text-[36px]">08</div>
            <div className="border-l-2 border-black  h-[90%]"></div>
          </div>
          <h1 className="text-[22px] md:text-[30px]
           bgtitle mb-3 lg:mb-0 md:block font-extrabold
            pt-3 px-5 h-[50px]">
            بلاگ ما
          </h1>
          <div className=" gap-x-10 hidden lg:flex justify-center items-center h-[80vh] 2xl:h-[70vh]">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
              // className="square"
              // animate={{ y : 0,scale : 1 }} 
              // initial={{ y : -100,  scale : 0.01}} 
              transition={ { ease : 'circIn' }}
             className="     w-[650px]  h-[413px]">
              <div className=" w-full h-full border-2 border-[#31374D]  rounded-xl flex justify-start
               px-5 items-center   shadow-[-7px_7px_1px_1px_#1a202c]">
                <img
                  className="w-[270px] rounded-xl border-[#31374D] border-2  h-[360px] object-cover"
                  src={Data[0].image}
                  alt=""
                />
                <div className=" w-full h-[340px] py-1 px-10 flex flex-col justify-between">
                  <div className="flex flex-col mt-4 gap-5">
                    <h1 className="text-[21px] font-bold">
                      {Data[0].title}
                    </h1>
                    <p className="text-[14px] font-medium leading-7">
                      {Data[0].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[0].id}`}
                    onClick={() => {
                      Cookies.set('idblog', Data[0].id)
                      Cookies.set('titleblog', Data[0].title)
                    }}
                    className=" cartButton mt-3  w-full h-[50px]  flex justify-start ">
                    {/* <Button
                      className="bg-[#4355FF] "
                      size="large"
                      type="primary"
                    >
                      بیشتر بخوانید
                    </Button> */}
                    <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
              ref={ref}
              animate={controls}
              initial="hidden2"
              variants={squareVariants}
              // className="square"
              // animate={{ y : 0,scale : 1 }} 
              // initial={{ y : -100,  scale : 0.01}} 
              transition={ { ease : 'circIn' }}
            className="  w-[356px] h-[413px]">
              <div className=" w-full h-full  flex py-5 items-center  flex-col border-2 border-[#31374D] 
               rounded-xl shadow-[-7px_7px_1px_1px_#1a202c] ">
                <img
                  className="w-[270px] rounded-xl   h-[140px]"
                  src={Data[1].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between  flex-col">
                  <div className="flex gap-3 items-center text-center flex-col">
                    <h1 className="px-2 text-[17px] font-bold">{Data[1].title}</h1>
                    <p className=" px-2 text-[13px] leading-6">
                      {Data[1].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[1].id}`}
                    onClick={() => {
                      Cookies.set('idblog', Data[1].id)
                      Cookies.set('titleblog', Data[1].title)
                    }}
                    className="  cartButton mt-3  w-full h-[50px] flex justify-around ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div dir="rtl" className="sliderblogcard lg:hidden w-[360px] md:w-[400px]  ">
          <Slider   ref={sliderRef} arrows={false} {...settings} className="">
          <BlogCard
          //  image='../../meh/card1img.png'
          image={Data[0].image}
           title={Data[0].title}
           description={Data[0].description}
           id={Data[0].id}
            /> 
            <BlogCard
          //  image='../../meh/card1img.png'
          image={Data[1].image}
           title={Data[1].title}
           description={Data[1].description}
           id={Data[1].id}
            /> 
               {/* <div className=" md:w-[330px] min-h-[440px] md:h-[470px] bg-[#fff] text-right md:drop-shadow-xl border
       border-gray-200 px-4 py-3 rounded-[25px] 
       group flex flex-col gap-2 items-center justify-center">
                <img
                  className="w-[270px] md:w-[370px] rounded-xl border-[#31374D] border-2 h-[150px] md:h-[200px]"
                  src={Data[0].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between  flex-col">
                  <div className="flex gap-3 items-center text-center flex-col">
                    <h1 className="px-2 text-[20px] font-bold">{Data[0].title}</h1>
                    <p className=" px-2 text-[13px] leading-6 block min-h-[120px]">
                      {Data[0].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[0].id}`}
                    onClick={() => {
                      Cookies.set('idblog', Data[0].id)
                      Cookies.set('titleblog', Data[0].title)
                    }}
                    className="  cartButton mt-3  w-full h-[50px] flex justify-around ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div> */}
              {/* <div className=" md:w-[330px] min-h-[440px] md:h-[470px] bg-[#fff] text-right md:drop-shadow-xl border
       border-gray-200 px-4 py-3 rounded-[25px] 
       group flex flex-col gap-2 items-center justify-center">
                <img
                  className="w-[270px]  md:w-[370px] rounded-xl border-[#31374D] border-2 h-[150px] md:h-[200px]"
                  src={Data[1].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between  flex-col">
                  <div className="flex gap-3 items-center text-center flex-col">
                    <h1 className="px-2 text-[20px] font-bold">{Data[1].title}</h1>
                    <p className=" px-2 text-[13px] leading-6 block min-h-[120px]">
                      {Data[1].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[1].id}`}
                    onClick={() => {
                      Cookies.set('idblog', Data[1].id)
                      Cookies.set('titleblog', Data[1].title)
                    }}
                    className="  cartButton mt-3  w-full h-[50px] flex justify-around ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div> */}
        </Slider>
        <div className="flex flex-row-reverse justify-center gap-x-28">

        <button 
        className="  mt-4 left-20"
         onClick={handlePrevClick}> 
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
         </button>
          <button 
                  className="  mt-4 right-20"
           onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
           </button>
        </div>

        
            {/* <div className="shadow_1  w-[85%] h-[400px]">
              <div className="shape3 w-full h-full bg-white flex py-5 items-center  flex-col">
                <img
                  className="w-[270px] h-[200px] clippath"
                  src={Data[0].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between flex-col">
                  <div className="flex gap-3  flex-col">
                    <h1 className="text-[15px] font-bold px-5"> {Data[0].title} </h1>
                    <p className="text-[12px] px-5">
                      {Data[0].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[0].id}`}
                    onClick={() => {
                      Cookies.set('idblog', Data[0].id)
                      Cookies.set('titleblog', Data[0].title)
                    }}
                    className="flex w-full justify-start mr-9">
                    <Button
                      className="bg-[#4355FF] text-xs  "
                      // size="small"
                      type="primary"
                    >
                      بیشتر بخوانید
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="shadow_1  w-[85%] h-[400px]">
              <div className="shape3 w-full h-full bg-white flex py-5 items-center  flex-col">
                <img
                  className="w-[270px] h-[200px] clippath"
                  src={Data[1].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between flex-col">
                  <div className="flex gap-3  flex-col">
                    <h1 className="text-[15px] font-bold px-5"> {Data[1].title}</h1>
                    <p className="text-[12px] px-5">
                      {Data[1].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[0].id}`}
                    onClick={() => {
                      Cookies.set('idblog', Data[1].id)
                      Cookies.set('titleblog', Data[1].title)
                    }}
                    className="flex w-full justify-start mr-9">
                    <Button
                      className="bg-[#4355FF] text-xs  "
                      // size="small"
                      type="primary"
                    >
                      بیشتر بخوانید
                    </Button>
                  </Link>

                </div>
              </div>
            </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default News;
