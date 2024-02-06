import { getProductDetailsbyID } from '@/DataService/ProductProvider';
import Cookies from 'js-cookie';
import React, {useEffect, useRef, useState} from 'react';
import { Checkbox, TextField, TextareaAutosize } from "@mui/material";
import { Button, Divider } from "antd";
import { Input } from "antd";
const { TextArea } = Input;
import { sendForm, sendProductForm } from "@/DataService/ContactUsProvider";
import { notify } from "../../components/helper/toust";
import ContactUsModal from '../home/contact_us/ContactUsModal';
import { getOneBlogData } from '@/DataService/blog/blogProvider';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// import './styles.css';

// import required modules





const ProjectDetailsHeader18 = () => {
  const router = useRouter()
  console.log(router.query.id);
  const Images = [
    // '../../Images/logo/jiba1.svg',
    '../../Images/logo/jiba2.svg',
    '../../Images/logo/jiba3.svg',
    '../../Images/logo/jiba4.svg',
    '../../Images/logo/jiba5.svg',
  ]
  
  const [showPage , setShowPage] = useState<any>(false)
  const [prData,setPrData] = useState<any>(false)
  const [title , setTitle] = useState<any>(false)
  const [mainImage , setMainImage] = useState<any>(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pageId , setPageId] = useState<any>(81)
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [data, setData] = useState<any>({
    name: "",
    number: "",
    message: "",
    email: "",
    businessName : "",
    productName : ""
  });
  console.log(data);
  console.log(prData);
  useEffect(() => {
    setPageId(81)
  } , [])
  // console.log(prData.imageList[0].adress);
  
  
  useEffect(() => {
    console.log(81);
    
    // console.log(Cookies.get('id'))
    // console.log(Cookies.get('titlepr'))
      // setTitle(Cookies.get('titlepr'))
      // setData({...data , productName : Cookies.get('titlepr') })
      if(pageId !== undefined){
      setShowPage(true)
    getOneBlogData(pageId)
    .then(Response => {
      console.log(Response.data.dataList);
      setTitle(Response.data.dataList[0].title)
      setMainImage(Response.data.dataList[0].image)
    })
    .catch(err => {
      console.log(err);
    })
    getProductDetailsbyID(pageId)
    .then(Response => {
      console.log(Response.data.dataList);
      // setPrData(Response.data.dataList[0])
      setPrData(Response.data.dataList)
    })
    .catch(error => {
      console.log(error); 
    })
  }
  else{
    console.log('nope');
    
  }
  } ,[pageId])
  // console.log(prData[1].imageList[0].adress);
  



  const sendData = () => {
    if(data.name.length > 0 && data.number.length > 0){
      sendProductForm(data)
      .then((Response) => {
        console.log(Response.data.isSuccess);
        if(Response.data.isSuccess = true){
          handleOpen()
        }else{
        notify("err", "درخواست شما ارسال نشد");
        }
        // notify("success", "درخواست شما ارسال شد");
      })
      .catch((error: any) => {
        console.log(error);
        notify("err", "درخواست شما ارسال نشد");
      });
    } else{
      notify("err", "نام و شماره خود را به درستی وارد کنید");
    }
    console.log("YES");
  };
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    pagination : true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1
  };
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const sliderRef = useRef<any>(null);

  const handlePrevClick = () => {
      sliderRef.current.slickPrev();
  };
  const handleNextClick = () => {
      sliderRef.current.slickNext();
  };
  return (
  <>
    
    <div>  
      <section className=' mt-6 lg:mt-5 flex justify-center items-center flex-col '>
     
     <div className='bgheadersmall lg:bgheader  text-center text-white text-lg  lg:text-xl
          flex justify-center items-center w-[360px] overflow-hidden  z-10 lg:w-[600px]  h-[60px]'>
          <h2 className='w-full '> جیبا </h2>
        </div>
        <div className='w-full lg:w-[1040px] 2xl:w-[1150px] h-[350px] lg:h-[220px] z-0 shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7] overflow-hidden   px-3 lg:px-6 mt-1  '>
          <div className=' rounded-md px-0 lg:px-32 py-3 lg:py-6 
            flex justify-between flex-col lg:flex-row text-center leading-8 text-sm  sm:text-sm font-semibold'>
            <p className='px-5 lg:px-10 leading-7'>
           {/* {prData && prData[0].descriptionList.length > 0 &&  prData.descriptionList[0].description} */}
           {/* {   prData.length > 0 &&  prData[0].descriptionList.length > 0 &&  prData[0].descriptionList[0].description} */}
           آیا تاکنون توی موقعیت هایی مانند سفر با دوستان، دورهمیها، یا حتی مدیریت هزینه های مشترک خانه با مشکل مواجه شده اید؟
اوقاتی که باید دقیقاً بدانیم چه کسی چه میزانی به کی چه بدهی دارد، میتواند به یک چالش تبدیل شود.
جیبا مثل یک شبکه اجتماعی برای حساب و کتاب است که به عنوان ی ک راهکار مالی همگانی و دوستانه به شما کمک می کند تا به
آسانی و با اطمینان مدیریت هزینه ها و بدهی های گروهتان را در دست بگیرید. به جای دغدغه ها و سردرگمیهای مالی، با جیبا به
راحتی از دورهمیهایتان لذت ببرید.
            </p>
          </div>
        </div>
      </section>
      <section className=' justify-center lg:flex flex-col items-center  '>
      <div className=' hidden lg:block justify-center lg:w-[100%] 2xl:w-[90%]  oneblogpage    mb-20 -mt-3 z-50 text-center drop-shadow-2xl'>
           {/* {prData && prData.imageList.length > 0 && */}
         {/* { prData.length > 1 && prData[1].imageList.length > 0 &&
            <img className='h-auto w-3/4 rounded-lg object-cover  shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7]  overflow-hidden' 
            src={prData[1].imageList[0].adress} alt="" />
           }  */}
         {/* { prData.length > 1 && prData[1].imageList.length > 0 &&
            prData.map((pr:any, index:any)  => (
              pr.imageList[0] ?
              <img 
              className='h-auto w-3/4 rounded-lg object-cover  shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7]  overflow-hidden' 
            src={pr.imageList[0].adress} alt="" /> 
            : ''
            ))} */}
                <Swiper
               spaceBetween={20}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=" w-[65%] rounded-3xl primagr81"
              >
                { 
                // prData.length > 1 && prData[1].imageList.length > 0 &&
            Images.map((pr:any, index:any)  => (
            //   pr.imageList[0] ?
              <SwiperSlide>
              <img 
              className=' lg:w-[100%]  object-cover h-[450px] ' 
            src={pr} alt="" /> 
              </SwiperSlide>
            // : ''
            ))}
              </Swiper>
     
        
        </div>
        <div className='lg:hidden  justify-center lg:w-[100%] 2xl:w-[90%]  oneblogpage   px-3 lg:px-0 mb-20 -mt-3 z-50 text-center drop-shadow-2xl'>
           {/* {prData && prData.imageList.length > 0 && */}
         {/* { prData.length > 1 && prData[1].imageList.length > 0 &&
            <img className='h-auto w-3/4 rounded-lg object-cover  shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7]  overflow-hidden' 
            src={prData[1].imageList[0].adress} alt="" />
           }  */}
         {/* { prData.length > 1 && prData[1].imageList.length > 0 &&
            prData.map((pr:any, index:any)  => (
              pr.imageList[0] ?
              <img 
              className='h-auto w-3/4 rounded-lg object-cover  shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7]  overflow-hidden' 
            src={pr.imageList[0].adress} alt="" /> 
            : ''
            ))} */}
                <Slider arrows={false} {...settings}   ref={sliderRef}
                className="mx-2"
              >
                { 
                // .length > 1 && prData[1].imageList.length > 0 &&
            Images.map((pr:any, index:any)  => (
            //   pr.imageList[0] ?
              <img 
              className='rounded-lg min-h-[250px] max-h-[250px] lg:w-[100%] object-contain' 
            src={pr} alt="" />  
            // : ''
            ))}
              </Slider>
              <button 
        className=" absolute mt-4 left-9"
         onClick={handlePrevClick}> 
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
         </button>
          <button 
          
                  className=" absolute mt-4 right-9"
           onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
           </button>
     
        
        </div>
      </section>
      <section className='mt-8 '>
      <div className="lg:w-[90%] flex justify-center lg:justify-center items-center mb-8">
            <h1 className="bgtitle text-[20px] lg:text-[22px] pt-3 lg:pr-10 h-[60px] lg:h-[60px] font-extrabold">
                 توضیحات 
            </h1>
           </div>
      <div className='flex justify-between items-center  flex-col-reverse lg:px-6  lg:flex-row'>
             <section className='w-full px-2 lg:px-0 lg:w-1/2'>
                <div>
                    <h3 className=' mt-5 lg:mt-2 font-semibold text-sm leading-7 flex flex-col gap-y-3 text-right px-4 lg:text-right '> 
                    {/* {   prData.length > 0 && prData[6] &&  prData[6].descriptionList.length > 0 &&  prData[6].descriptionList[0].description} */}
                  <h4>مدیریت آسان هزینه ها: 
                    جیبا به شما این امکان را میدهد تا هر هزینه مشترکی با هر تعداد نفر و هر مبلغی را به راحتی مدیریت
کنید. از این به بعد هیچ مشکلی در تقسیم خرج ها و بدهی ها پیش نخواهد آمد
                  </h4>
                  <h4>دسترسی آسان: جیبا برای همه اعضای گروه شما قابل دسترسی است. میتوانید ازبه راحتی از تلفن همراه به آن دسترسی داشته باشید
                  </h4>
                  <h4>نظارت بر دنگها: با استفاده از جیبا میتوانید به راحتی دنگها و بدهیها را به صورت دقیق نظارت کنید. همه چیز با یک نگاه به 
دسترسی آنالینتان است
                  </h4>
                    </h3>
                </div>
             </section>
             <section className='  lg:w-1/2  z-10 flex justify-end mb-3 lg:mb-0'>
                <Image src={mainImage} alt=""
                height={350}
                width={350}
                />
             </section>
        </div>
      </section> 
      <section className='mt-24 '>
      <div className="lg:w-[90%] flex justify-center lg:justify-center items-center mb-8">
            <h1 className="bgtitle text-[20px] lg:text-[22px] pt-3 lg:pr-10 h-[60px] lg:h-[60px] font-extrabold">
            آموزش برنامه 
            </h1>
           </div>
      <div className='flex justify-between items-center  flex-col-reverse lg:px-6  lg:flex-row'>
             <section className='w-full px-2 lg:px-0 text-center'>
                <div>
                    <h3 className='font-medium text-sm leading-7 text-center lg:text-center '> 
                    {/* {   prData.length > 0 && prData[6] &&  prData[6].descriptionList.length > 0 &&  prData[6].descriptionList[0].description} */}
                     در این ویدئو ، ما به شما چگونگی استفاده از اپلیکیشن جیبا را نشان می‌دهیم و همچنین
آموزش مرحله به مرحله کار با برنامه جیبا ، با تماشای این ویدئو، به سادگی می‌توانید ایجاد گروه و ثبت هزینه ها را انجام دهید.
به طور سریع جیبا را یاد بگیرید ، ما در این ویدئو، تمام اطلاعاتی که برای شروع به کار با جیبا نیاز دارید، را برای شما ارائه می دهیم
                    </h3>
                </div>
                <div className='mt-8 px-5'>
                <video className='lg:h-[450px] w-full' controls >
                      {/* <source src={video} type="video/mp4"/> */}
                </video>
                    {/* <video className='w-full lg:h-[400px] border mt-6' src=""></video> */}
                </div>
             </section>
        </div>
      </section> 

       <section className='bg-[#EBF3F9] rounded-b-3xl pt-10 lg:py-10 shadow-md mt-14 lg:mt-28
        lg:rounded-xl
        mb-44 lg:gap-x-8 lg:px-8 lg:flex justify-between items-start'>
       <div className='  py-0 px-6  text-sm leading-7  font-medium  rounded-3xl '>
        <div className='text-black mr-6 flex flex-col gap-y-10 mt-3 mb-6'>
        <h2 className=' flex gap-x-2  pr-0 text-sm lg:pr-0 lg:text-base '>  
             <span className='font-semibold text-base lg:text-lg'>ویژگی های جیبا</span>
              <div className='flex'>
              <img src="../../Images/Vector148.svg" alt="" color='black'  />
              <img src="../../Images/Vector148.svg" alt="" color='black'  />
              <img src="../../Images/Vector148.svg" alt="" color='black'  />
              </div>
             </h2>
             <ul className='list-disc  flex flex-col gap-y-5 mb-3 lg:mb-0 lg:gap-y-5'>
          <li className='text-[14px] sm:text-sm leading-7 lg:leading-8'>
          ایجاد گروه: برای هر هزینه یا فعالیت مشترک مانند سفر، یک گروه ایجاد کنید و اعضای مشارکت کننده را به آن اضافه کنید .

          </li>
          <li className='text-[14px] sm:text-sm leading-7 lg:leading-8'>
           ثبت هزینه ها: ابتدا هر خرج جدیدی که برای اعضای آن گروه انجام میدهید را در اپلیکیشن ثبت کنید.
          </li>
          <li className='text-[14px] sm:text-sm leading-7 lg:leading-8'>
          تخصیص به اعضا: میتوانید از جیبا بخواهید هر خرج را به صورت مساوی بین اعضا تقسیم کند. در غیر این صورت، این هزینه ها
را به اعضای گروهتان تخصیص دهید تا همه بدانند چه کسی چه میزانی به کی بدهی دارد
          
          </li>
          <li className='text-[14px] sm:text-sm leading-7 lg:leading-8'>
           مشاهده وضعیت: جیبا با محاسبه تمامی خرج ها و با توجه به مقدار خرج هر عضو گروه، یک صورت حساب از بدهیها و طلب هر 
شخص آماده میکند که اعضا میتوانند وضعیت هزینه هایشان را بررسی کرده و دید دقیقی از وضعیت مالی گروه داشته باشند.
            </li>

            <li className='text-[14px] sm:text-sm leading-7 lg:leading-8'>
            با جیبا دیگر نیازی به فراموش کردن دنگها و بدهیها نخواهید داشت. میتوانید به آسانی از تمامی لحظات دوستانه تان لذت ببرید
            </li>
          
          </ul>

        </div>
      </div>
      <div className='lg:w-1/2 bg-[#444757] py-6  px-6  rounded-3xl '>
        <div className='text-white  flex flex-col gap-y-5 mb-6'>
        <h2 className=' flex gap-x-2  justify-center lg:justify-start  pr-0 text-sm lg:pr-0 lg:text-base '>  
             <span className=''>ویژگی های جیبا</span>
              <div className='flex'>
              <img src="../../Images/Vector147.svg" alt="" color='black'  />
              <img src="../../Images/Vector147.svg" alt="" color='black'  />
              <img src="../../Images/Vector147.svg" alt="" color='black'  />
              </div>
             </h2>
          <div className='flex items-center justify-center flex-col gap-y-6'>
          <a download={true} href={'../../Apk/Jiba 1.1.0.apk'} className='bg-[#666871] rounded-3xl text-center leading-[64px] w-64 h-16'>دانلود با لینک مستقیم 
          </a>
          <Link  href={'https://jiba.etokco.com'} className='bg-[#666871] cursor-pointer rounded-3xl text-center leading-[64px] w-64 h-16'
          >نسخه تحت وب
          </Link>
          </div>
        </div>
        <div className='text-white  flex flex-col gap-y-6 mb-6'>
          <h2  className='text-center lg:text-right'> از طریق اپلیکیشن  
          <span className='mr-2'>( به زودی ... )</span> 
          </h2>
          <div className=' opacity-40 flex items-center justify-center flex-col gap-y-4'>
          <div  className='bg-[#666871] flex items-center justify-center rounded-3xl text-center leading-[64px] w-64 h-16'>
            <img src="../meh/googleplay.svg" alt="" className='opacity-30 w-[90%] h-[82%]' />
          </div>
          <div className=' opacity-40 bg-[#666871] flex items-center justify-center rounded-3xl text-center leading-[64px] w-64 h-16'>
            <img src="../meh/cafebazzar.svg" alt="" className='w-[90%] h-[82%]' />
          </div>

          </div>
        </div>
      </div>
      </section>


    </div>
      
        </>
  );
};

export default ProjectDetailsHeader18;