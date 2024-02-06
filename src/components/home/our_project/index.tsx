// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import "swiper/css";
import { Button, Carousel } from "antd";
import { useEffect, useRef, useState } from "react";
import { log } from "console";
import Card from "./card";
import Card_md from "./card_md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Our_project() {
  const [selectitem, setelectitem] = useState(1);
  const card_data = [
    {
      src: "../../../Images/project/musicolayer.svg",
      title: "ملودی پلیر",
      description:
        " ملودی پلیر یک اپلیکیشن موبایل موزیک پلیر است که طراحی شده است تا کاربران بتوانند به آسانی موسیقی را در گوشی‌های همراه خود پخش کنند.",
      style: "-right-[5000px] opacity-0",
      id:'/'
    },
    {
      src: "../../../Images/project/shop.svg",
      title: " فروشگاه آنلاین",
      description: " ",
      style: "-right-[6000px] opacity-0",
      id:'/'
    },
    {
      src: "../../../Images/project/men_salon.jpg",
      title: "لورم ایپسوم",
      description:
        "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      style: "-right-[7000px] opacity-0",
      id:'/'
    },
    {
      src: "../../../Images/project/salons.svg",
      title: "لورم ایپسوم",
      description:
        "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      style: "-right-[8000px] opacity-0",
      id:'/'
    },
  ];
  const [positsion, setpositsion] = useState({ position: "", type: "" });
  const style = useRef("");
  const increase = async () => {
    style.current = "-right-[5000px] opacity-0";
    if (selectitem != 4) {
      setelectitem(selectitem + 1);
    } else {
      setelectitem(1);
    }
  };
  const decrease = async () => {
    setpositsion({ position: "", type: "" });
    if (selectitem != 1) {
      setelectitem(selectitem - 1);
    } else {
      setelectitem(4);
    }
  };
  const data = [
    {
      url: "../../../../../Images/project/reminder.svg",
      title: "نوبیتوک",
      description:
        "برنامه نوبیتوک، امکان مدیریت نوبت‌های انجام شده در مرکز خدماتی را فراهم می‌کند، همچنین به مدیران اجازه می‌دهد پرداختی‌های مرتبط با این نوبت‌ها را ... ",
    },
    {
      url: "../../Images/logo/jiba1.svg",
      title: "جیبا",
      description:
        "برنامه جیبا با هدف مدیریت مالی دقیق برای سفرهای دوستانه و دونگ‌های تیمی، امکان ثبت و پیگیری پرداختی‌ها  ..."
    },
    {
      url: "../../../../../Images/project/musicolayer.svg",
      title: "موزیک پلیر",
      description:
        "تمرکز ما بر نوآوری است. از آخرین تکنولوژی‌ها و روش‌های مدرن استفاده می‌کنیم تا راهکارهای نوآورانه و خلاقانه ارائه دهیم.",
    },
    {
      url: "../../../../../Images/project/coffe.svg",
      title: "کافه",
      description:
        "وبسایت کافه، یک پلتفرم چندوظیفه‌ای است که به مدیران و مشتریان کافه‌ها امکان می‌دهد تا به طریقی ساده و کارآمد با هم ارتباط برقرار کنند",
    },
    {
      url: "../../../../../Images/project/shop.svg",
      title: " فروشگاه آنلاین",
      description:
        "برنامه فروشگاه آنلاین، یک پلتفرم جامع و کارآمد برای ایجاد و مدیریت فروشگاه‌های آنلاین است این برنامه به کسب‌وکارها امکان   ...",
    },
    {
      url: "../../../../../Images/project/salons.svg",
      title: "سالن زنانه",
      description:
        "وبسایت سالن زنانه، به عنوان یک پلتفرم جامع، به مدیران ارایشگاه‌های زنانه ابزاری کارآمد ارائه می‌دهد تا مدیریت کاملی بر تمامی جنبه‌های کسب‌وکارشان داشته باشند",
    },
  ];
  
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    pagination : true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
  };
  const slides= [
   { id:32 , data:data[2] },
   { id:34,  data:data[3] },
    {id:33,data:data[0]   },
   { id:'/', data:data[4]},
   { id:81, data:data[1]},
   { id:30, data:data[5] } 
  ]
  const squareVariants = {
    visible: { y:1 , opacity: 1, scale: 1, transition: { duration: 0.8  } },
    hidden: { opacity: 0, scale: 0.5, y : 1 }
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
    <motion.div  
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    // className="square"
    // animate={{ y : 0,scale : 1 }} 
    // initial={{ y : -100,  scale : 0.01}} 
    transition={ { ease : 'circIn' }}
    className="relative square">
      <div className="relative mt-[10px] md:mt-[220px] lg:mt-[240px] -top-[150px] 2xl:-top-[120px] w-full flex justify-center items-center">
        <h1 className=" bgtitle hidden md:block font-extrabold
        text-[30px] pt-3 pr-7 h-[70px] ">
          پروژه ها
        </h1>
      </div>
      <div className="relative md:h-fit w-full flex items-center md:justify-between flex-col mt-[0px] md:mt-[100px] lg:mt-[0px]">
        <div className=" hidden lg:flex flex-col justify-center  gap-10 items-center absolute left-[115px]">
          <div className="number text-[36px]">05</div>
          <div className="border-l-2 border-black h-[85vh] "></div>
        </div>
        <h1 className="bgtitle md:hidden mb-2 text-[24px] pr-3 h-[50px] md:text-[40px] "> پروژه ها </h1>
        <div className=" flex-col hidden md:flex justify-center items-center w-[80%] h-[90vh] max-h-[700px] lg:mt-[40px] gap-7">
          <div className="flex gap-10 xl:gap-20">
            <Card_md id={33} data={data[0]} />
            <Card_md id={81} data={data[1]} />
            <div className="block sm:hidden xl:block">
            <Card_md id={32} data={data[2]} />
            </div>
          </div>
          <div className="flex gap-10 xl:gap-20">
            <Card_md id={34} data={data[3]} />
            <Card_md id={'/'} data={data[4]} />
            <div className="block sm:hidden xl:block">
            <Card_md id={30} data={data[5]} />
            </div>
          </div>
        </div>
        <div className=" relative w-[100vw]  flex md:hidden justify-center items-center">
        <div className="w-[340px] projectslider">
        {/* <h2> Single Item</h2> */}
        <Slider arrows={false} {...settings} rtl   ref={sliderRef} className="">
           {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <Card_md  id={slide.id} data={slide.data}/>
          </div>
        ))}
        </Slider>
        <button 
        className=" absolute mt-4 left-14"
         onClick={handlePrevClick}> 
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
         </button>
          <button 
                  className=" absolute mt-4 right-14"
           onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
           </button>

      </div>
          {/* <img
            onClick={() => {
              increase();
            }}
            className="w-8 h-8 "
            src="../../../Images/Right.svg"
          /> */}
          {/* <div className={`relative overflow-hidden w-full h-full`}>

            {/* {card_data.map((item, index) => (
              <Card
                selectitem={selectitem}
                index={index + 1}
                style={item.style}
                src={item.src}
                description={item.description}
                title={item.title}
              />
            ))} */}
               {/* {card_data.map((item, index) => (
              <Card
                selectitem={selectitem}
                id={item.id}
                index={index + 1}
                style={item.style}
                src={item.src}
                description={item.description}
                title={item.title}
              />
            ))} */}
          {/* </div> */ }
          {/* <img
            onClick={() => {
              decrease();
            }}
            className="w-8 h-8"
            src="../../../Images/Left.svg"
          /> */}
        </div>
      </div>
    </motion.div >
  );
}

export default Our_project;
