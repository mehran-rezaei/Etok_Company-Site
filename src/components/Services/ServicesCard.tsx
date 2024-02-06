import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import Link from "next/link";
import { Button } from "antd";
import { getProductBySubId } from "@/DataService/ProductProvider";
import ProjectCard from "../project/ProjectCard";

const ServicesCard = (props: any) => {
  const type = props;
  console.log(type.type);
  const [productDetalis, setProductDetsils] = useState<any>([]);

  useEffect(() => {
    if (type.type > 7) {
      getProductBySubId(type.type)
        .then((Response) => {
          console.log(Response.data.dataList);
          setProductDetsils(Response.data.dataList);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("no");
    }
  }, [type]);
  return (
    <div className="mb-20">
    <div className=" 'flex  lg:justify-start lg:items-start  ">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // pagination={{ clickable: false, dynamicBullets: false }}
      // navigation

      direction="horizontal"
      height={300}
      className=""
      spaceBetween={0}
      // slidesPerView={1}
      breakpoints={{
        1280: {
          slidesPerView: 3,
          height: 1000,
          direction: "vertical",
          spaceBetween: 0,
          navigation: false,
        },
        760: {
          slidesPerView: 1,
          navigation: true,
          pagination: true,
        },
      }}
      // freeMode={true}
      // scrollbar={{
      //   "hide":false
      // }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
        {/* <SwiperSlide className="servicecard">
          <div className="bgcard  pl-10 pr-8 sm:w-[360px] h-[500px] text-center sm:text-right drop-shadow-md flex items-center sm:items-start flex-col pt-10   ">
            <img
                 src="../../meh/sevicecardimg.png"
              alt=""
              className="h-fit w-full "
            />
            <h2 className="w-full mt-5  text-lg font-semibold">
              تازه های وب
            </h2>
            <p className="text-sm mt-2 leading-7 sm:leading-6 sm:font-normal  w-3/4 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="">
          <div className="bgcard pl-10 pr-8 sm:w-[360px] h-[500px] text-center sm:text-right drop-shadow-md flex items-center sm:items-start flex-col pt-10   ">
            <img
              src="../../meh/sevicecardimg.png"
              alt=""
              className="h-fit w-full "
            />
            <h2 className="w-full mt-5  text-lg font-semibold">
              تازه های وب
            </h2>
            <p className="text-sm mt-2 leading-7 sm:leading-6 sm:font-normal  w-3/4 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
 
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="">
          <div className="bgcard pl-10 pr-8 sm:w-[360px] h-[500px] text-center sm:text-right drop-shadow-md flex items-center sm:items-start flex-col pt-10   ">
            <img
            src="../../meh/sevicecardimg.png"
              alt=""
              className="h-fit w-full "
            />
            <h2 className="w-full mt-5  text-lg font-semibold">
              تازه های وب
            </h2>
            <p className="text-sm mt-2 leading-7 sm:leading-6 sm:font-normal  w-3/4 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>

          </div>
        </SwiperSlide> */}
        {productDetalis.length > 0 &&
          productDetalis !== 12 &&
          productDetalis.map((product: any, index: any) => (
            <ProjectCard
            image={product.image}
            title={product.title}
            id={product.id}
            description={product.description} 
            buttonText={'مشاهده کامل'}/>
            // <SwiperSlide key={index} className="servicecard">
          //     <div className=" bgcard pl-10 pr-8 sm:w-[360px] min-h-[500px] text-center sm:text-right drop-shadow-md flex items-center sm:items-start flex-col pt-10   ">
          //       <img src={product.image} alt="" className="h-fit w-full " />
          //       <h2 className="w-full mt-5  text-lg font-semibold">
          //         {product.title}
          //       </h2>
          //       <p className="text-sm mt-2 leading-7 sm:leading-6 sm:font-normal  w-3/4 ">
          //         {product.description}
          //       </p>
          //       <div className="w-full">
          //   {/* <Link className="flex w-full pr-4" href={'/project'}>
          //       <Button
          //   className="bg-[#4355FF] hover:bg-[#2036fe] mt-1 lg:mt-3  lg:w-1/3 text-white"
          //    size="middle">
          //   سفارش
          // </Button>
          // </Link> */}

          // </div>

          //     </div>
            // </SwiperSlide>
          ))}
      </Swiper>
    </div>
    </div>
  );
};

export default ServicesCard;
