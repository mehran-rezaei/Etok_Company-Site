import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Shape2() {
  return (
    <div className="w-screen overflow-x-hidden-hidden bg-[#E6F2FA] shadow-2xl my-[150px] h-[60vh] gap-5 p-5 flex justify-start flex-col items-center relative ">
      {/* //////////////////////////////////////////////element 1 */}

      <h1 className="text-[24px] md:text-[48px] mt-10">درباره ی ما </h1>
      <p className="text-[12px] w-[80%] text-center md:text-[16px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <div className="lg:hidden flex gap-[40px]  -bottom-[0%] w-full relative z-50 justify-center ">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0  flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
              <img
                className="w-[200px] md:w-[250px] "
                src="../../../../Images/Rectangl753.png"
                alt=""
              />
              <h1 className=" text-[21px] ">لورم ایپسوم</h1>
              <p className="text-[14px] px-5 w-[250px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:flex gap-[40px] -bottom-[0%] w-full relative z-50 justify-center ">
        <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
          <img
            className="w-[200px] md:w-[250px] "
            src="../../../../Images/Rectangl753.png"
            alt=""
          />
          <h1 className=" text-[21px] ">لورم ایپسوم</h1>
          <p className="text-[14px] px-5 w-[250px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است{" "}
          </p>
        </div>
        <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
          <img
            className="w-[200px] md:w-[250px] "
            src="../../../../Images/Rectangl753.png"
            alt=""
          />
          <h1 className=" text-[21px] ">لورم ایپسوم</h1>
          <p className="text-[14px] px-5 w-[250px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است{" "}
          </p>
        </div>
        <div className="About_us_item pl-5 md:pl-0 flex py-10 flex-col items-center gap-4">
          <img
            className="w-[200px] md:w-[250px] "
            src="../../../../Images/Rectangl753.png"
            alt=""
          />
          <h1 className=" text-[21px] ">لورم ایپسوم</h1>
          <p className="text-[14px] px-5 w-[250px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است{" "}
          </p>
        </div>
      </div>

      {/* //////////////////////////////////////////////element 2 */}
      <div className="   w-full h-[100vh]  relative flex justify-center ">
        <div className="flex flex-col  w-[50%] left-[25%] gap-4 top-[370px] absolute  justify-center items-center "></div>
        {/* <img
          src="../../../Images/Shape2.png"
          className="w-full h-auto hidden sm:block"
          alt=""
        /> */}
        {/* responsive background */}
        {/* <img
          src="../../../Images/Rectangle64.svg"
          className="w-full h-auto "
          alt=""
        /> */}
        {/* ///////////////////////// */}
      </div>
      {/* //////////////////////////////////////////////element 3 */}

      {/* ////// */}
    </div>
  );
}

export default Shape2;
