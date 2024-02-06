import Link from "next/link";
import { useState } from "react";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function According() {
  const [selectitem, setselectitem] = useState(1);
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
    <>
      <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        // className="square"
        // animate={{ y : 0,scale : 1 }} 
        // initial={{ y : -100,  scale : 0.01}} 
        transition={ { ease : 'circIn' }}
       className="relative flex flex-col items-center square justify-center lg:mt-[0px]">
        <div className="absolute top-[150px] lg:top-[40px] 2xl:top-[120px] w-full flex justify-center items-center">
          <h1 className="bgtitle hidden lg:block text-[30px] pt-3 pr-5 h-[70px] font-extrabold">
            خدمات ما
          </h1>
        </div>
        <div 
          className="relative hidden z-50 shadow-2xl overflow-hidden top-[250px] lg:top-[160px] 2xl:top-[240px] 
        h-[80vh] 2xl:h-[60vh] max-h-[700px] rounded-bl-xl rounded-tl-2xl 
        rounded-tr-2xl rounded-br-2xl lg:flex gap-1 md:mx-auto xl:mx-0
         w-[1030px] "
        >
          <div
            onClick={() => {
              setselectitem(1);
            }}
            className={`
        absolute
        ${selectitem == 1 ? "right-[0%]" : "right-[0%] "}
        ${selectitem == 2 ? "cursor-pointer" : ""}
        ${selectitem == 3 ? "cursor-pointer" : ""}
        ${selectitem == 4 ? "cursor-pointer" : ""}
        ${selectitem == 5 ? "cursor-pointer" : ""}
         w-[780px]  h-full bg-white  flex rounded-tr-2xl animated rounded-br-2xl`}
          >
            {/* /////////////////// */}
            <div
              className={`overflow-hidden bg-[#232636] flex relative py-[50px] mx-auto  justify-center  h-full border-l-[2px] border-white w-[60px] ${
                selectitem == 1
                  ? "bg-[#3D64F0]"
                  : "bg-[#232636]  cursor-pointer"
              }`}
            >
              <p className="text-white  text-[28px] ">01</p>
              <p className="text-white text-center text-[24px] absolute -rotate-90  h-[300px] w-[300px] top-[150px] left-[10px] ">
                طراحی رابط کاربری
              </p>
            </div>
            {/* /////////////////// */}
            <div className=" w-[780px]  h-full flex p-10 flex-col">
              <div className=" border-b-4 w-full h-fit items-start flex justify-between py-1 ">
                <p className="text-[22px] ">طراحی رابط کاربری</p>
                <div className="flex items-center h-full gap-1">
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-6 h-6"
                      onClick={() => {}}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(2);
                    }}
                    className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* /////////////////// */}
              </div>
              <div className="w-full h-full flex flex-col justify-evenly">
                <p className="text-sm text-justify leading-7">
                  طراحی رابط کاربری یکی از خدمات اصلی ما است. با توجه به تجربه
                  ما در زمینه طراحی رابط کاربری، به مشتریانمان کمک می‌کنیم تا
                  رابط کاربری منحصر به فرد و بی‌نظیری را برای نرم‌افزارها و
                  وبسایت‌هایشان تجربه کنند. ما در طراحی رابط کاربری به عناصری
                  مانند زیبایی، سادگی، سهولت استفاده و پاسخگویی تمرکز داریم. هدف
                  ما ایجاد تجربه‌ای منحصربه‌فرد و کاربرپسند است که کاربران شما
                  را مجذوب کند و به آن‌ها اجازه دهد با سهولت و لذت از
                  نرم‌افزارها و وبسایت‌های شما استفاده کنند
                </p>
                <div className="w-full flex items-end justify-between">
                  <img
                    className="w-[60%] h-[250px] rounded-xl"
                    src="../../../../Images/according/1.jpg"
                    alt=""
                  />
                      <Link href={`blog`}
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
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////// */}
          <div
            onClick={() => {
              setselectitem(2);
            }}
            className={`
        absolute
        ${selectitem == 1 ? "right-[790px]  cursor-pointer" : ""}
        ${selectitem == 2 ? "right-[60px] " : ""}
        ${selectitem == 3 ? "right-[60px] cursor-pointer" : ""}
        ${selectitem == 4 ? "right-[60px] cursor-pointer" : ""}
        ${selectitem == 5 ? "right-[60px] cursor-pointer" : ""}
        flex w-[780px] justify-center h-full bg-white animated`}
          >
            {/* /////////////////// */}
            <div
              className={`overflow-hidden bg-[#232636] flex relative py-[50px] mx-auto  justify-center  h-full border-l-[2px] border-white w-[60px] ${
                selectitem == 2
                  ? "bg-[#3D64F0]"
                  : "bg-[#232636]  cursor-pointer"
              }`}
            >
              <p className="text-white  text-[28px]">02</p>
              <p className="text-white text-center text-[24px] absolute -rotate-90  h-[300px] w-[300px] top-[150px] left-[10px] ">
                سئو
              </p>
            </div>
            {/* /////////////////// */}
            <div className=" w-[780px] flex p-10 flex-col">
              <div className=" border-b-4 w-full h-fit flex justify-between py-1 ">
              <p className="text-[22px] ">سئو</p>
                <div className="flex items-center h-full gap-1">
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(3);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* /////////////////// */}
              </div>
              <div className="w-full h-full flex flex-col justify-evenly">
                <p className="text-sm text-justify leading-7">
                  سئو (SEO) یکی از خدمات برجسته ما است. با توجه به تجربه و تخصص
                  ما در زمینه سئو، به مشتریانمان کمک می‌کنیم تا در رتبه‌بندی
                  بهتر در موتورهای جستجوی معروف، مانند گوگل، برخوردار شوند. با
                  استفاده از روش‌های مدرن و به‌روز، تیم ما به بهبود نمره سئو،
                  افزایش ترافیک سایت و بهبود برند شما در دنیای آنلاین می‌پردازد.
                  هدف ما ایجاد استراتژی‌های سئو مناسب برای رشد بیزینس شماست و به
                  شما کمک می‌کند تا در مقابل رقبا خود برتری یابید.
                </p>
                <div className="w-full flex items-end justify-between">
                  <img
                    className="w-[60%] h-[250px] rounded-xl"
                    src="../../../../Images/according/2.jpg"
                    alt=""
                  />
                       <Link href={`blog`}
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
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////// */}
          <div
            onClick={() => {
              setselectitem(3);
            }}
            className={`
        absolute
        ${selectitem == 1 ? "right-[850px] cursor-pointer" : " "}
        ${selectitem == 2 ? "right-[850px] cursor-pointer" : " "}
        ${selectitem == 3 ? "right-[120px] " : " "}
        ${selectitem == 4 ? "right-[120px] cursor-pointer" : " "}
        ${selectitem == 5 ? "right-[120px] cursor-pointer" : " "}
         flex w-[780px] justify-center bg-white h-full  animated`}
          >
            {/* /////////////////// */}
            <div
              className={`overflow-hidden bg-[#232636] flex relative py-[50px] mx-auto  justify-center  h-full border-l-[2px] border-white w-[60px] ${
                selectitem == 3
                  ? "bg-[#3D64F0]"
                  : "bg-[#232636]  cursor-pointer"
              }`}
            >
              <p className="text-white  text-[28px]">03</p>
              <p className="text-white text-center text-[24px] absolute -rotate-90  h-[300px] w-[300px] top-[150px] left-[10px] ">
                طراحی سایت
              </p>
            </div>
            {/* /////////////////// */}
            <div className=" w-[780px] flex p-10 flex-col">
              <div className=" border-b-4 w-full h-fit flex justify-between py-1 ">
              <p className="text-[22px] ">طراحی سایت</p>
                <div className="flex items-center h-full gap-1">
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(2);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(4);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* /////////////////// */}
              </div>
              <div className="w-full h-full flex flex-col justify-evenly">
                <p className="text-sm text-justify leading-7">
                  طراحی وبسایت یکی از خدمات برجسته ما است. با توجه به تجربه و
                  تخصص ما در زمینه طراحی وبسایت، به مشتریانمان کمک می‌کنیم تا
                  وبسایتی حرفه‌ای و منحصربه‌فرد داشته باشند که نماینده قدرت و
                  شخصیت برندشان باشد. با توجه به نیازها و هدف کسب‌وکار شما،
                  طراحی وبسایتی کاملاً سفارشی و متناسب با شناخت مشتریان و
                  نیازهای آن‌ها ارائه می‌دهیم. هدف ما ایجاد وبسایتی کاربرپسند،
                  زیبا و بهینه است که به شما کمک می‌کند رقبا را در دنیای آنلاین
                  پشت سر بگذارید.
                </p>
                <div className="w-full flex items-end justify-between">
                  <img
                    className="w-[60%] h-[250px] rounded-xl"
                    src="../../../../Images/according/3.jpg"
                    alt=""
                  />
                          <Link href={`blog`}
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
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////////// */}
          <div
            onClick={() => {
              setselectitem(4);
            }}
            className={`
        absolute
        ${selectitem == 1 ? "right-[910px]" : " "}
        ${selectitem == 2 ? "right-[910px]" : " "}
        ${selectitem == 3 ? "right-[910px]" : " "}
        ${selectitem == 4 ? "right-[180px] " : " "}
        ${selectitem == 5 ? "right-[180px]" : " "}
          flex w-[780px] justify-center bg-white h-full  animated`}
          >
            {/* /////////////////// */}
            <div
              className={` overflow-hidden bg-[#232636]  relative py-[50px] mx-auto flex justify-center px-1 h-full border-l-[2px] border-white w-[60px] ${
                selectitem == 4
                  ? "bg-[#3D64F0]"
                  : "bg-[#232636]  cursor-pointer"
              }`}
            >
              <p className="text-white  text-[28px]">04</p>
              <p className="text-white text-center text-[24px] absolute -rotate-90  h-[300px] w-[300px] top-[150px] left-[10px] ">
                طراحی اپلیکیشن
              </p>
            </div>
            {/* /////////////////// */}
            <div className=" w-[780px] flex p-10 flex-col">
              <div className=" border-b-4 w-full h-fit flex justify-between py-1 ">
              <p className="text-[22px] ">طراحی اپلیکیشن </p>
                <div className="flex items-center h-full gap-1">
                  <div className="border-2  border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(3);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(5);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* /////////////////// */}
              </div>
              <div className="w-full h-full flex flex-col justify-evenly">
                <p className="text-sm text-justify leading-7">
                  طراحی اپلیکیشن موبایل یکی از خدمات برجسته ما است. با توجه به
                  تخصص و تجربه ما در زمینه طراحی اپلیکیشن‌های موبایل، به
                  مشتریانمان کمک می‌کنیم تا اپلیکیشنی شگفت‌انگیز و قابل استفاده
                  را برای مخاطبانشان ایجاد کنند. با توجه به هدف کسب‌وکار شما و
                  نیازهای کاربران، طراحی اپلیکیشن موبایلی را ارائه می‌دهیم که
                  بهینه، کاربرپسند و زیبا باشد. هدف ما ایجاد تجربه کاربری
                  منحصربه‌فرد و به‌یادماندنی است که کاربران شما را مجذوب کند و
                  به آن‌ها امکان ارتباط و استفاده آسان از اپلیکیشن شما را بدهد.
                </p>
                <div className="w-full flex items-end justify-between">
                  <img
                    className="w-[60%] h-[250px] rounded-xl"
                    src="../../../../Images/according/4.jpg"
                    alt=""
                  />
                  <Link href={`blog`}
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
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////// */}
          <div
            onClick={() => {
              setselectitem(5);
            }}
            className={`
        absolute
        ${selectitem == 1 ? "right-[970px]" : " "}
        ${selectitem == 2 ? "right-[970px]" : " "}
        ${selectitem == 3 ? "right-[970px]" : " "}
        ${selectitem == 4 ? "right-[970px]" : " "}
        ${selectitem == 5 ? "right-[240px] " : " "}
         flex w-[780px] justify-center bg-white h-full  animated`}
          >
            {/* /////////////////// */}
            <div
              className={`overflow-hidden bg-[#232636] relative py-[50px] mx-auto flex justify-center px-1 h-full 
              rounded-l-2xl  w-[60px] ${
                selectitem == 5
                  ? "bg-[#3D64F0] rounded-l-none "
                  : "bg-[#232636] cursor-pointer"
              }`}
            >
              <p className="text-white  text-[28px]">05</p>
              <p className="text-white text-center text-[24px] absolute -rotate-90  h-[300px] w-[300px] top-[150px] left-[10px] ">
                مشاوره کسب و کار
              </p>
            </div>
            {/* /////////////////// */}
            <div className=" w-[780px] flex p-10 flex-col">
              <div className=" border-b-4 w-full h-fit flex justify-between py-1 ">
              <p className="text-[22px] ">مشاوره کسب و کار</p>
                <div className="flex items-center h-full gap-1">
                  <div className="border-2  border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-6 h-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation to parent
                        setselectitem(4);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="border-2 border-black flex justify-center items-center rounded-lg w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      // onClick={handlefoeward}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* /////////////////// */}
              </div>
              <div className="w-full h-full flex flex-col justify-evenly">
                <p className="text-sm text-justify leading-7">
                  ما ارائه دهنده خدمات مشاوره استراتژیک و فرآیندهای کسب و کار
                  هستیم. با توجه به تجربه و تخصص ما در زمینه مشاوره، به
                  مشتریانمان کمک می‌کنیم تا از طریق تحلیل و بررسی دقیق وضعیت
                  کنونی کسب و کار، استراتژی‌های مناسبی را برای رشد و بهبود
                  عملکرد آن‌ها تدوین کنند. با ارائه راهکارهایی سفارشی و هدفمند،
                  به شما در بهبود فرآیندها، بهبود کیفیت، کاهش هزینه‌ها و افزایش
                  بازدهی کمک می‌کنیم. هدف ما بهبود پایدار عملکرد و افزایش
                  رقابت‌پذیری کسب و کار شماست
                </p>
                <div className="w-full flex items-end justify-between">
                  <img
                    className="w-[60%] h-[250px] rounded-xl"
                    src="../../../../Images/according/5.jpg"
                    alt=""
                  />
                   <Link href={`blog`}
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
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center relative top-[20px]">
          <h1 className="text-[22px] mt-10 md:hidden ">خدمات ما</h1>
          <div className="relative md:hidden shadow-2xl overflow-hidden  h-[620px] rounded-bl-xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl flex gap-1 mx-auto w-[315px]">
            <div
              onClick={() => {
                setselectitem(1);
              }}
              className={`
         absolute
         ${selectitem == 1 ? "top-[0%]" : "top-[0%]"}
         ${selectitem == 2 ? "" : ""}
         ${selectitem == 3 ? "" : ""}
         ${selectitem == 4 ? "" : ""}
         ${selectitem == 5 ? "" : ""}
          w-full  h-[500px]   flex flex-col items-center rounded-tr-2xl animated rounded-tl-2xl`}
            >
              <div
                className={`h-[40px] w-full text-white ${
                  selectitem == 1 ? "bg-[#3D64F0]" : "bg-[#232636]"
                } flex justify-around items-center border-b-[1px] border-white`}
              >
                <p className="w-[20%] h-full flex justify-center items-center">
                  01
                </p>
                <p className="w-[60%] flex justify-center items-center">
                  طراحی رابط کاربری
                </p>
                <p className="w-[20%] h-full flex justify-center items-center"></p>
              </div>
              <div className="flex pt-3 px-5 border-b-4 w-[90%]  justify-between">
                <p className="text-[22px] number">01</p>
                <div className="flex gap-1 justify-between">
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/up.svg"
                    alt=""
                  />
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/down.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(2);
                    }}
                  />
                </div>
              </div>
              <p className="w-[90%] text-justify  text-[13px] leading-7 py-3">
                طراحی رابط کاربری یکی از خدمات اصلی ما است. با توجه به تجربه ما
                در زمینه طراحی رابط کاربری، به مشتریانمان کمک می‌کنیم تا رابط
                کاربری منحصر به فرد و بی‌نظیری را برای نرم‌افزارها و
                وبسایت‌هایشان تجربه کنند. ما در طراحی رابط کاربری به عناصری
                مانند زیبایی، سادگی، سهولت استفاده و پاسخگویی تمرکز داریم. هدف
                ما ایجاد تجربه‌ای منحصربه‌فرد و کاربرپسند است که کاربران شما را
                مجذوب کند و به آن‌ها اجازه دهد با سهولت و لذت از نرم‌افزارها و
                وبسایت‌های شما استفاده کنند
              </p>
              {/* <img
                src="../../../../Images/according/1.jpg"
                className="w-[87%] h-[180px] rounded-lg mt-3"
                alt=""
              /> */}
                      <Link href={`blog`}
                    className="  cartButton w-full h-[50px] flex justify-start pr-5 ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
            </div>
            {/* ///////////////////////////////////////////////////////////// */}
            <div
              onClick={() => {
                setselectitem(2);
              }}
              className={`
         absolute
             ${selectitem == 1 ? "top-[460px] " : ""}
             ${selectitem == 2 ? "top-[40px] " : ""}
             ${selectitem == 3 ? "top-[40px]" : ""}
             ${selectitem == 4 ? "top-[40px]" : ""}
             ${selectitem == 5 ? "top-[40px]" : ""}
          w-full  h-[500px] bg-white  flex flex-col items-center animated `}
            >
              <div
                className={`h-[40px] w-full text-white ${
                  selectitem == 2 ? "bg-[#3D64F0]" : "bg-[#232636]"
                } flex  justify-around items-center border-b-[1px] border-white`}
              >
                <p className="w-[20%] h-full flex justify-center items-center">
                  02
                </p>
                <p className="w-[60%] flex justify-center items-center">سئو</p>
                <p className="w-[20%] h-full flex justify-center items-center"></p>
              </div>
              <div className="flex pt-3 px-5 border-b-4 w-[90%]  justify-between">
                <p className="text-[22px] number">02</p>
                <div className="flex gap-1 justify-between">
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/up.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(1);
                    }}
                  />
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/down.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(3);
                    }}
                  />
                </div>
              </div>
              <p className="w-[90%] text-justify text-[13px] leading-7 py-3">
                سئو (SEO) یکی از خدمات برجسته ما است. با توجه به تجربه و تخصص ما
                در زمینه سئو، به مشتریانمان کمک می‌کنیم تا در رتبه‌بندی بهتر در
                موتورهای جستجوی معروف، مانند گوگل، برخوردار شوند. با استفاده از
                روش‌های مدرن و به‌روز، تیم ما به بهبود نمره سئو، افزایش ترافیک
                سایت و بهبود برند شما در دنیای آنلاین می‌پردازد. هدف ما ایجاد
                استراتژی‌های سئو مناسب برای رشد بیزینس شماست و به شما کمک می‌کند
                تا در مقابل رقبا خود برتری یابید.
              </p>
              {/* <img
                src="../../../../Images/according/2.jpg"
                className="w-[87%] h-[180px] rounded-lg mt-3"
                alt=""
              /> */}
                       <Link href={`blog`}
                    className="  cartButton w-full h-[50px] flex justify-start pr-5 ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
            </div>
            {/* ////////////////////////////////////////////////////////////// */}
            <div
              onClick={() => {
                setselectitem(3);
              }}
              className={`
          absolute
              ${selectitem == 1 ? "top-[500px] " : ""}
              ${selectitem == 2 ? "top-[500px] " : ""}
              ${selectitem == 3 ? "top-[80px]" : ""}
              ${selectitem == 4 ? "top-[80px]" : ""}
              ${selectitem == 5 ? "top-[80px]" : ""}
           w-full  h-[500px] flex flex-col items-center bg-white animated `}
            >
              <div
                className={`h-[40px] w-full text-white ${
                  selectitem == 3 ? "bg-[#3D64F0]" : "bg-[#232636]"
                } flex justify-around items-center border-b-[1px] border-white`}
              >
                <p className="w-[20%] h-full flex justify-center items-center">
                  03
                </p>
                <p className="w-[60%] flex justify-center items-center">
                  طراحی سایت
                </p>
                <p className="w-[20%] h-full flex justify-center items-center"></p>
              </div>
              <div className="flex pt-3 px-5 border-b-4 w-[90%]  justify-between">
                <p className="text-[22px] number">03</p>
                <div className="flex gap-1 justify-between">
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/up.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(2);
                    }}
                  />
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/down.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(4);
                    }}
                  />
                </div>
              </div>
              <p className="w-[90%] text-justify text-[13px] leading-7 py-3">
                طراحی وبسایت یکی از خدمات برجسته ما است. با توجه به تجربه و تخصص
                ما در زمینه طراحی وبسایت، به مشتریانمان کمک می‌کنیم تا وبسایتی
                حرفه‌ای و منحصربه‌فرد داشته باشند که نماینده قدرت و شخصیت
                برندشان باشد. با توجه به نیازها و هدف کسب‌وکار شما، طراحی
                وبسایتی کاملاً سفارشی و متناسب با شناخت مشتریان و نیازهای آن‌ها
                ارائه می‌دهیم. هدف ما ایجاد وبسایتی کاربرپسند، زیبا و بهینه است
                که به شما کمک می‌کند رقبا را در دنیای آنلاین پشت سر بگذارید.
              </p>
              <Link href={`blog`}
                    className="  cartButton w-full h-[50px] flex justify-start pr-5 ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
              {/* <img
                src="../../../../Images/according/3.jpg"
                className="w-[87%] h-[180px] rounded-lg mt-3"
                alt=""
              /> */}
            </div>
            {/* /////////////////////////////////////////////////////////////////// */}
            <div
              onClick={() => {
                setselectitem(4);
              }}
              className={`
          absolute
              ${selectitem == 1 ? "top-[540px] " : ""}
              ${selectitem == 2 ? "top-[540px] " : ""}
              ${selectitem == 3 ? "top-[540px]" : ""}
              ${selectitem == 4 ? "top-[120px]" : ""}
              ${selectitem == 5 ? "top-[120px]" : ""}
          w-full  h-[500px]   flex flex-col items-center bg-white animated`}
            >
              <div
                className={`h-[40px] w-full text-white ${
                  selectitem == 4 ? "bg-[#3D64F0]" : "bg-[#232636]"
                } flex justify-around items-center border-b-[1px] border-white`}
              >
                <p className="w-[20%] h-full flex justify-center items-center">
                  04
                </p>
                <p className="w-[60%] flex justify-center items-center">
                  طراحی اپلیکیشن
                </p>
                <p className="w-[20%] h-full flex justify-center items-center"></p>
              </div>
              <div className="flex pt-3 px-5 border-b-4 w-[90%]  justify-between">
                <p className="text-[22px] number">04</p>
                <div className="flex gap-1 justify-between">
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/up.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(3);
                    }}
                  />
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/down.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(5);
                    }}
                  />
                </div>
              </div>
              <p className="w-[90%] text-justify text-[13px] leading-7 py-3">
                طراحی اپلیکیشن موبایل یکی از خدمات برجسته ما است. با توجه به
                تخصص و تجربه ما در زمینه طراحی اپلیکیشن‌های موبایل، به
                مشتریانمان کمک می‌کنیم تا اپلیکیشنی شگفت‌انگیز و قابل استفاده را
                برای مخاطبانشان ایجاد کنند. هدف ما ایجاد تجربه کاربری
                منحصربه‌فرد و به‌یادماندنی است که کاربران شما را مجذوب کند و به
                آن‌ها امکان ارتباط و استفاده آسان از اپلیکیشن شما را بدهد.
              </p>
              <Link href={`blog`}
                    className="  cartButton w-full h-[50px] mt-5 flex justify-start pr-5 ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
              {/* <img
                src="../../../../Images/according/4.jpg"
                className="w-[87%] h-[180px] rounded-lg mt-3"
                alt=""
              /> */}
            </div>
            {/* ///////////////////////////////////////////////////////////////////// */}
            <div
              onClick={() => {
                setselectitem(5);
              }}
              className={`
         absolute
              ${selectitem == 1 ? "top-[580px] " : ""}
             ${selectitem == 2 ? "top-[580px] " : ""}
              ${selectitem == 3 ? "top-[580px]" : ""}
              ${selectitem == 4 ? "top-[580px]" : ""}
              ${selectitem == 5 ? "top-[160px]" : ""}
           w-full  h-[500px]   flex flex-col bg-white items-center rounded-br-2xl animated rounded-bl-2xl`}
            >
              {" "}
              <div
                className={`h-[40px] w-full text-white ${
                  selectitem == 5 ? "bg-[#3D64F0]" : "bg-[#232636]"
                } flex justify-around items-center border-b-[1px] border-white`}
              >
                <p className="w-[20%] h-full flex justify-center items-center">
                  05
                </p>
                <p className="w-[60%] flex justify-center items-center">
                  مشاوره کسب و کار
                </p>
                <p className="w-[20%] h-full flex justify-center items-center"></p>
              </div>
              <div className="flex pt-3 px-5 border-b-4 w-[90%]  justify-between">
                <p className="text-[22px] number">05</p>
                <div className="flex gap-1 justify-between">
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/up.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event propagation to parent
                      setselectitem(4);
                    }}
                  />
                  <img
                    className="h-6 w-6"
                    src="../../../../Images/down.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="w-[90%] text-justify text-[13px] leading-7 py-3">
                ما ارائه دهنده خدمات مشاوره استراتژیک و فرآیندهای کسب و کار
                هستیم. با توجه به تجربه و تخصص ما در زمینه مشاوره، به مشتریانمان
                کمک می‌کنیم تا از طریق تحلیل و بررسی دقیق وضعیت کنونی کسب و کار،
                استراتژی‌های مناسبی را برای رشد و بهبود عملکرد آن‌ها تدوین کنند.
                با ارائه راهکارهایی سفارشی و هدفمند، به شما در بهبود فرآیندها،
                بهبود کیفیت، کاهش هزینه‌ها و افزایش بازدهی کمک می‌کنیم. هدف ما
                بهبود پایدار عملکرد و افزایش رقابت‌پذیری کسب و کار شماست
              </p>
              <Link href={`blog`}
                    className="  cartButton w-full h-[50px] flex justify-start pr-5 ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
              {/* <img
                src="../../../../Images/according/5.jpg"
                className="w-[87%] h-[180px] rounded-lg mt-3"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </motion.div >
    </>
  );
}

export default According;
