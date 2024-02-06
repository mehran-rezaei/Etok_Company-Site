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

// import './styles.css';

// import required modules





const ProjectDetailsHeader = () => {
  const router = useRouter()
  console.log(router.query.id);
  
  const [showPage , setShowPage] = useState<any>(false)
  const [prData,setPrData] = useState<any>(false)
  const [title , setTitle] = useState<any>(false)
  const [mainImage , setMainImage] = useState<any>(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pageId , setPageId] = useState<any>(undefined)
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
    setPageId(router.query.id)
  } , [router.query.id])
  // console.log(prData.imageList[0].adress);
  
  
  useEffect(() => {
    console.log(router.query.id);
    
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
    {showPage ?
    <div>  
      <section className=' mt-6 lg:mt-5 flex justify-center items-center flex-col '>
        {title.length > 0 &&
        <div className='bgheadersmall lg:bgheader  text-center text-white text-lg  lg:text-xl
          flex justify-center items-center w-[360px] overflow-hidden  z-10 lg:w-[600px]  h-[60px]'>
          <h2 className='w-full '> {title} </h2>
        </div>}
        <div className='w-full lg:w-[1040px] 2xl:w-[1150px] h-[350px] lg:h-[220px] z-0 shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7] overflow-hidden   px-3 lg:px-6 mt-1  '>
          <div className=' rounded-md px-0 lg:px-32 py-3 lg:py-6 
            flex justify-between flex-col lg:flex-row text-center leading-8 text-sm  sm:text-sm font-semibold'>
            <p className='px-5 lg:px-10 leading-7'>
           {/* {prData && prData[0].descriptionList.length > 0 &&  prData.descriptionList[0].description} */}
           {   prData.length > 0 &&  prData[0].descriptionList.length > 0 &&  prData[0].descriptionList[0].description}
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
               spaceBetween={30}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=" w-[100%] rounded-xl"
              >
                { prData.length > 1 && prData[1].imageList.length > 0 &&
            prData.map((pr:any, index:any)  => (
              pr.imageList[0] ?
              <SwiperSlide>
              <img 
              className='rounded-lg  object-cover lg:w-[100%] ' 
            src={pr.imageList[0].adress} alt="" /> 
              </SwiperSlide>
            : ''
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
                className=""
              >
                { prData.length > 1 && prData[1].imageList.length > 0 &&
            prData.map((pr:any, index:any)  => (
              pr.imageList[0] ?
             
              <img 
              className='rounded-lg lg:w-[100%] object-cover' 
            src={pr.imageList[0].adress} alt="" />  
            : ''
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
      {   prData.length > 0 && prData[6] &&  prData[6].descriptionList.length > 0 ?
      <section className='mt-8 lg:-mt-4 '>
      <div className="lg:w-[90%] flex justify-center lg:justify-center items-center mb-8">
            <h1 className="bgtitle text-[20px] lg:text-[22px] pt-3 lg:pr-10 h-[60px] lg:h-[60px] font-extrabold">
                 توضیحات 
            </h1>
           </div>
      <div className='flex justify-between items-center  flex-col-reverse   lg:flex-row'>
             <section className='w-full px-2 lg:px-0 lg:w-1/2'>
                <div>
                    <h3 className='font-medium text-sm leading-7 text-center lg:text-right '> 
                    {   prData.length > 0 && prData[6] &&  prData[6].descriptionList.length > 0 &&  prData[6].descriptionList[0].description}
                    </h3>
                </div>
             </section>
             <section className='  lg:w-1/2  z-10 flex justify-end mb-3 lg:mb-0'>
                <Image src={mainImage} alt=""
                height={300}
                width={300}
                />
             </section>
        </div>
      </section> : '' }



      {/* <section className='mt-32 bg-[#444757] py-10 px-6   mb-20 rounded-3xl '>
        <div className='text-white mr-6 flex flex-col gap-y-5 mb-6'>
          <h2>ویژگی های محصول</h2>
          <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-center gap-y-10 lg:gap-y-0 gap-x-5 px-5'>
          <div className='lg:w-1/3 '>
          <h1 className='bg-[#555866] rounded-t-2xl text-white w-full p-4 text-center 
          flex items-center justify-center gap-x-3 
          '>برنزی
          <img className='h-6 ' src="../../Images/logo/bronze.svg" alt="" />
          </h1>
    
        <div className='bg-white rounded-b-2xl  '>
            <ul className='px-6 flex flex-col gap-y-3 py-6'>
            {prData &&  prData.bronze}
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
            </ul>
        </div>
        </div>
        <div className='lg:w-1/3 '>
          <h1 className='bg-[#555866] rounded-t-2xl text-white w-full p-4 text-center 
          flex items-center justify-center gap-x-3 
          '>نقره ای
          <img className='h-6 ' src="../../Images/logo/nogreh.svg" alt="" />
          </h1>
    
        <div className='bg-white rounded-b-2xl   '>
            <ul className='px-6 flex flex-col gap-y-3 py-6'>
            {prData &&  prData.bronze}
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
            </ul>
        </div>
        </div>
        <div className='lg:w-1/3 '>
          <h1 className='bg-[#555866] rounded-t-2xl text-white w-full p-4 text-center 
          flex items-center justify-center gap-x-3 
          '>طلایی
          <img className='h-6 ' src="../../Images/logo/gold.svg" alt="" />
          </h1>
    
        <div className='bg-white rounded-b-2xl '>
            <ul className='px-6 flex flex-col gap-y-3 py-6'>
            {prData &&  prData.golden}
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
              <li>+</li>
            </ul>
        </div>
        </div>
       
        </div>

      </section> */}

    </div>
        :  ''}



             <div className='lg:px-16 px-4 lg:w-full mb-52 flex
              flex-col items-center justify-center '>
    <div className=' text-center w-full font-semibold mb-10 mt-14'>
      <div className='hidden lg:block'>
      <Divider className='' style={{ border: 1}}>
   <h2 className='font-semibold text-sm'> جهت سفارش محصول اطلاعات زیرا تکمیل کنید </h2>
      </Divider>
      </div>
      <h2 className=' block lg:hidden text-sm'> جهت سفارش محصول اطلاعات زیرا تکمیل کنید </h2>
      <h2 className='text-sm lg:-mt-2'>سپس دکمه ثبت را بزنید </h2>
      </div>

     
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-0 gap-y-4 w-full sm:w-5/6'>
      <h3 className=' w-full '>
      <Input
           readOnly={true}
          // defaultValue={`نام محصول  : ${title}`}
          // size='small'
          className='bg-[#4355FF] text-white p-2  rounded-md '      
          placeholder={`نام محصول  : ${title}`}
          
        />
        </h3 >  

      {/* <TextField
     
          size='small'
          className=' rounded-md my-3 bg-[#232636]'    
          placeholder=' تعداد مورد نیاز :  '
        /> */}
        <Input
          // size='small'
          className='rounded-md bg-[#232636] text-white p-2'
          placeholder=' نام و نام خانوادگی  : '
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
            <Input
          // size='small'
          className='rounded-md bg-[#232636] text-white p-2'
          placeholder='ایمیل :'
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextArea
          // size='small'
          // minRows={8}
          style={{ resize: "none", minHeight: 160, maxHeight: 200 }}
          // className='my-3 h row-span-3 border p-3 rounded-md text-white outline-blue-600
          // bg-[#232636] '
          className='bg-[#232636]  row-span-3  text-white p-2'
          placeholder=' توضیحات :'
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
          <Input
          size='small'
          className='my-3  rounded-md bg-[#232636] text-white p-2'
          placeholder='شماره تلفن :'
          onChange={(e) => setData({ ...data, number: e.target.value })}
        />
    
        <Input
          size='small'
          className='  rounded-md bg-[#232636] text-white p-2'
          placeholder='نام شرکت :'
          onChange={(e) => setData({ ...data, businessName: e.target.value })}
        />
         </div>
         <div className='mt-6'>
          {/* <Checkbox/> */}
          {/* <span>قوانین و مقررات سایت را پذیرفته ام </span> */}
         </div>
         <div className='w-full lg:w-3/4  flex justify-start items-start  mt-1 lg:mt-5'>
         <Button
           onClick={() => sendData()}
              type='ghost'
              className="bg-[#17E569] hover:bg-[#07f968] hover:text-white   
             w-full lg:w-1/3 text-white"
               size="middle">
              ثبت
            </Button>
            {/* <Button
               type='ghost'
              className="bg-[#F06D65] hover:bg-[#f13e34]   lg:w-1/3 text-white"
               size="middle">
              انصراف
            </Button> */}
         </div>
         <div className="">
          <ContactUsModal open={open} setOpen={setOpen} handleOpen={handleOpen} 
          handleClose={handleClose} />
        </div>    
    </div>
        </>
  );
};

export default ProjectDetailsHeader;