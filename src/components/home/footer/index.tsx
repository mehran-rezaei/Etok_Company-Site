import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import Link from "next/link";


function Footer() {
  return (
    <div className=" px-3 lg:px-10 pb-10  ">
    <div className="rounded-xl relative text-white w-full lg:h-[40vh] max-h-[300px]  shadow_1 mb-16 lg:mb-0 bg-[#444757]">
      <div className="rounded-xl h-[80%] text-xs lg:text-base pb-5 bg-[#444757] lg:flex 
       grid grid-cols-2 px-6 lg:px-20  
        lg:justify-center gap-x-4 lg:gap-40">
        <div className="lg:w-[25%]  h-full pt-7 flex flex-col gap-3 justify-start">
          <ul className="list-disc font-semibold text-sm">لینک های مفید :</ul>
          {/* <p className="text-sm">پرسش های متداول </p> */}
          <Link href={'/blog'} className="text-sm">
            <li> بلاگ</li>
          </Link>
          <Link href={'/services'} className="text-sm">
            <li>طراحی سایت</li>
          </Link>
          {/* <p className="text-sm">طراحی سایت</p> */}
        </div>
        <div className="lg:w-[25%] h-full pt-7 flex flex-col gap-3 justify-start ">
          <h1 className="font-semibold text-sm">راه های ارتباطی  :</h1>
          <p className="leading-6">آدرس شرکت :
          <br />
           خوزستان، اهواز، پادادشهر،   خیابان10، ساختمان هیراد
               طبقه 3
          </p>
          <p>تلفن شرکت :
            <span className="block mt-1">09160077737</span>
           </p>
          <h2  onClick={() => (window as Window).location  = 'mailto:itinfo@etokco.com'}
          className="cursor-pointer"
          >ایمیل: itinfo@etokco.com</h2>
        </div>
        <div className="lg:w-[25%]  h-full pt-7 flex gap-3 flex-col justify-start mt-5 lg:mt-0">
          <h1 className="font-semibold text-sm">شبکه های اجتماعی :</h1>
          <div className="flex  gap-x-7 lg:gap-7">
          <Link href='https://www.linkedin.com/in/etokteam'>
            <img src="../../../Images/linkedin.svg"  className="h-8 lg:h-auto cursor-pointer" />
           </Link>
            <Link href='http://instagram.com/javadsavari.ir'>
            <img src="../../../Images/instagram.svg" className="h-8 lg:h-auto cursor-pointer" />
            </Link>
            {/* <img src="../../../Images/facebook.svg"  className="h-8 lg:h-auto cursor-pointer" /> */}
            {/* <a href="http://instagram.com/rezaghz_">Link to Instagram Page</a> */}
            
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center text-center gap-x-3
       lg:mt-8 text-sm lg:text-base font-medium lg:h-[20%] py-3 bg-white">
        <span className="pt-1 text-xs md:text-base">
        .Copyrights Etok Company 2023. All rights reserved
       ©
        </span>
      <img src='../../../meh/logo.svg' className='  sm:h-6 hidden sm:block ' alt="" />
      </div> */}
    </div>
    </div>

  );
}

export default Footer;
