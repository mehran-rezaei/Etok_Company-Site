import { Button } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";


const SmallCard = (props:any) => {
  const { title , image , description ,id} = props
  // console.log(id);
  return (
    <a  href={`/blog/${id}`} className="py-3 sm:py-4 sm:pr-3">
      <div className="w-full flex justify-between gap-x-1 items-start px-1  min-h-fit sm:min-h-[140px]
       rounded-lg ">
        <div className="w-1/2 img-wrapper  p-1 rounded-md overflow-hidden">
          <img src={image && image} className=" h-24 w-28 object-cover rounded-xl" alt="" />
        </div>
        <div className="w-1/2 px-4 lg:px-0 pt-4 lg:pt-2 xl:pt-5 relative text-xs 
        font-medium lg:text-[10px] xl:text-xs leading-5  xl:leading-6
         ">
          <h2 className="max-h-[70px] font-semibold overflow-hidden"> {title && title}</h2>         
          {/* <a 
            href={`/blog/${id}`}
            // as={`/blog/${id}`}
            onClick={() =>  {
            Cookies.set('idblog', id) 
            Cookies.set('titleblog', title)
          }}>
            <Button
              className="bg-[#4355FF] hover:bg-[#2036fe]  w-[80%] mt-5 
              bottom-3 lg:bottom-2 text-[11px] 
              sm:text-sm lg:text-[10px] lg:w-[90%] font-semibold text-white"
              //  size="small"
              // type="primary"
            >
              بیشتر بخوانید
            </Button>
          </a> */}
        </div>
      </div>
    </a>
  );
};

export default SmallCard;
