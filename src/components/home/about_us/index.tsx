// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Responsive_items from "./responsive_items";
import Items from "./items";
import AboutUsCard from "./AboutUsCard";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const list = [
  {
    url: "../../../../../Images/about_us/Rectangle127.png",
    title: "نوآوری",
    description:
      "تمرکز ما بر نوآوری است. از آخرین تکنولوژی‌ها و روش‌های مدرن استفاده می‌کنیم تا راهکارهای نوآورانه و خلاقانه ارائه دهیم.",
  },
  {
    url: "../../../../../Images/about_us/Rectangle136.png",
    title: "کیفیت بالا",
    description:
      " تعهد ما به ارائه‌ی نرم‌افزارهای با کیفیت بالا است. در همه مراحل توسعه و تحویل، استانداردهای کیفیت را رعایت می‌کنیم",
  },
  {
    url: "../../../../../Images/about_us/Rectangle137.png",
    title: "تجربه کاربری عالی",
    description:
      " تمرکز ما بر تجربه کاربری است. طراحی رابط کاربری مفهومی و آسان را به هدف داریم تا کاربران بتوانند به راحتی و با لذت از محصولات استفاده کنند",
  },
];
function About_us() {
  const squareVariants = {
    visible: { y:1 , opacity: 1, scale: 1, transition: { duration: 0.8  } },
    hidden: { opacity: 0, scale: 1, y : 100 }
  };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
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
    className="overflow-visible relative square ">
      <div
        className="  overflow-visible bg-[#EBF3F9]   lg:rounded-[50px] shadow-md
         lg:mb-[50px] 2xl:mb-0
       md:-my-[30px] w-full lg:w-[950px]
       h-auto pb-10 lg:pb-0 lg:h-[550px] 
        gap-5 p-5 flex justify-start flex-col items-center  xl:w-[1200px] 2xl:w-[1400px] ">
        {/* //////////////////////////////////////////////TExt Start */}
        <h1 className="text-[24px]  md:text-[32px] mt-5"> چرا ما؟ </h1>
        <p className="text-[12px] leading-6  w-[80%] 2xl:text-lg text-justify lg:text-center md:text-[16px] 2xl:leading-8">
          ما یک شرکت نرم‌افزاری پیشرو هستیم. تخصص ما در زمینه فناوری اطلاعات و
          توسعه نرم‌افزارهای نوآورانه است. تیم ما از افراد با تجربه و متخصص
          تشکیل شده است که به ارائه راهکارهای برتر و بهبود عملکرد سازمان‌ها از
          طریق فناوری اطلاعات متعهدند. ما با همت و انگیزه بالا، مشتریانمان را در
          تمام مراحل پروژه‌هایشان همراهی می‌کنیم و تضمین می‌کنیم که نیازها و
          اهداف آن‌ها محقق می‌شوند
        </p>
        {/* //////////////////////////////////////////////TExt End */}
        <section className="flex items-start mt-3 flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-6">
          <AboutUsCard
            title={"تیم مجرب و نواور"}
            text1={"مسلط به متد های روز دنیا"}
            text2={"نوآوری‌های جدید "}
            text3={"تخصص‌های گوناگون "}
            text4={"پروژه های موفق"}
          />
          <AboutUsCard
            title={"چشم اندازی مدرن"}
            text1={"طراحی جذاب "}
            text2={"فناوری‌های پیشرفته"}
            text3={"سادگی و سهولت استفاده"}
            text4={"پیشرفت در زمینه‌های مختلف"}
          />

          <div className="block lg:hidden xl:block">
            <AboutUsCard
              title={"پشتیبانی 24 ساعته"}
              text1={"تیم پشتیبانی"}
              text2={"روش‌های ارتباطی"}
              text3={"سرعت پاسخ‌گویی"}
              text4={"حل مشکلات"}
            />
          </div>
        </section>
      </div>
      {/* <div className="lg:hidden flex gap-[40px] -bottom-[300px] w-full absolute z-50 justify-center ">
        <Responsive_items />
      </div> */}
      {/* <div className="hidden lg:flex gap-[40px] bottom-[-100px] w-full absolute z-[999] justify-center ">
        {list.map((item, index) => (
          <Items
            key={index}
            url={item.url}
            description={item.description}
            title={item.title}
          />
        ))}
      </div> */}
    </motion.div>
  );
}

export default About_us;
