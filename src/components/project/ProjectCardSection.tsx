import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import Link from "next/link";
import { Button, Divider } from "antd";
import { Checkbox, TextField, TextareaAutosize } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { getProductBySubId } from "@/DataService/ProductProvider";

const ProjectCardSection = (props: any) => {
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
        {/* <Swiper
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
        > */}
   
          {productDetalis.length > 0 &&
            productDetalis.map((product: any, index: any) => (
              // <SwiperSlide key={index}>
                <ProjectCard
                  image={product.image}
                  title={product.title}
                  id={product.id}
                  description={product.description}
                  buttonText={'سفارش محصول'}
                />
              // </SwiperSlide>
            ))}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default ProjectCardSection;
