import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const SmallCard = () => {
  return (
    <div className="py-3 sm:py-4 sm:pr-3">
      <div className="w-full flex justify-between   px-1  h-fit rounded-lg shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7]">
        <div className="w-1/2 img-wrapper">
          <img src="../../meh/smallcardimg.png" className="hover-zoom" alt="" />
        </div>
        <div className="w-1/2 px-4 lg:px-0 pt-4 lg:pt-2 xl:pt-5 relative text-xs font-medium lg:text-[10px] xl:text-xs leading-5  xl:leading-6 ">
          <h2>لورم ایپسوم متن ساختگی با تولید سادگی سادگی سادگی از صنعت </h2>
          <Link href="/blog/blog1">
            <Button
              className="bg-[#4355FF] hover:bg-[#2036fe] w-[80%] absolute bottom-3 lg:bottom-2 text-[11px] sm:text-sm lg:text-[11px] lg:w-[90%] text-white"
               size="small"
              // type="primary"
            >
              بیشتر بخوانید
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
