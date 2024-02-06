import { Swiper, SwiperSlide } from "swiper/react";

const listresponcive = [
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
function Responsive_items(props: any) {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
      {listresponcive.map((item: any,index:any) => (
        <SwiperSlide className="Swiper_slide" id={`silde${index}`}>
          <div className="About_us_item pl-9 md:pl-0  flex py-10 flex-col items-center gap-4">
            <img className="w-[250px] md:w-[250px] " src={item.url} alt="" />
            <h1 className=" text-[21px] ">{item.title}</h1>
            <p className="text-[14px] px-5 w-[250px]">{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Responsive_items;
