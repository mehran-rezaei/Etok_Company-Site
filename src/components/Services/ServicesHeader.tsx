import { Button } from 'antd';
import React, { useEffect, useState , useContext } from 'react';
import ServicesCard from './ServicesCard';

import { appflow_Handller } from '@/context/appflow';
import Contact_us from '../home/contact_us';
const ServicesHeader = () => {
  const { state, dispatch } = useContext(appflow_Handller);
  console.log(state.selectedtype);
  
   const [serviceTypeTitle, setServiceTypeTitle] = useState([
    
    { title : 'طراحی رابط کاربری' , description :'طراحی رابط کاربری یک فرایند مهم در توسعه نرم‌افزار و وب سایت‌ها است که به کاربران امکان ارتباط و تعامل مؤثر با سیستم را می‌دهد. در زیر یک متن سه چهار خطی درباره طراحی رابط کاربری برای شما آورده‌ام:   طراحی رابط کاربری، هنر و علمی است که در آن با توجه به نیازها و خواسته‌های کاربران، یک محیط کاربری زیبا و کاربرپسند را ایجاد می‌کنیم.    این فرایند شامل ایجاد طرح‌های اولیه، طراحی نمونه‌ها، و تست و بهبود مستمر است که هدف نهایی آن '},
    { title : 'طراحی سایت' , description :'طراحی یک وبسایت، فرآیندی است که به منظور ایجاد یک صفحه اینترنتی کارآمد، جذاب و قابل دسترس برای کاربران انجام می‌شود. این فرایند شامل تعیین نیازها و اهداف وبسایت، طراحی ساختار اطلاعاتی، انتخاب رنگ‌ها و فونت‌ها، طراحی گرافیکی و صفحات، و توسعه کدهای قابل اجرا برای رابطه بین کاربر و سرور است. همچنین، برای دستیابی به یک طراحی وبسایت خوب، نیاز است تا به اصول طراحی رابط کاربری، بهینه‌سازی جستجوی موتورهای جستجو، و سازگاری با مرورگرها و دستگاه‌های مختلف توجه کنیم'},
    { title : 'طراحی اپلیکیشن' , description :'طراحی یک اپلیکیشن موبایل، فرآیندی است که با توجه به نیازها و خواسته‌های کاربران، یک رابط کاربری کارآمد، زیبا و ساده برای دستگاه‌های همراه ایجاد می‌کند. این فرایند شامل تعیین محدوده و قابلیت‌های اپلیکیشن، طراحی رابط کاربری و تجربه کاربری، توسعه کدها و اجرای آزمون‌ها بر روی دستگاه‌های مختلف اس'},
    { title : 'سئو' , description : 'سئو، فرآیندی است که با بهینه‌سازی عناصر مختلف یک وبسایت، امکان دسترسی بهتر و رتبه‌بندی بالاتر در نتایج موتورهای جستجو را فراهم می‌کند.  این فرایند شامل بهینه‌سازی عناصر مانند کلیدواژه‌ها، ساختار وبسایت، محتوا، لینک‌ها و عوامل فنی مانند سرعت بارگیری و سازگاری با دستگاه‌های مختلف می شود'},
    { title : 'مشاوره کسب و کار' , description :'مشاوره کسب و کار به منظور ارائه راهکارهای استراتژیک و بهینه برای کسب و کارها ارائه می‌شود. این خدمت شامل بررسی عوامل داخلی و خارجی، تحلیل بازار، ارزیابی رقبا و تهیه برنامه عملیاتی است. مشاوران کسب و کار با توجه به اهداف و نیازهای مشتریان، استراتژی‌های مناسب، سیاست‌ها و راهکارهای متناسب را پیشنهاد می‌دهند. آنها می‌توانند در زمینه‌های مختلف مانند مدیریت، بازاریابی، مالی، عملیات و منابع انسانی مشاوره ارائه دهند. مشاوره کسب و کار می‌تواند بهبود عملکرد کسب و کار، کاهش هزینه‌ها، افزایش درآمد، بهبود فرآیندها و افزایش رقابت‌پذیری را به هدف داشته باشد. هدف اصلی مشاوره کسب و کار، ارائه راهکارهای موثر و کارآمد برای مشتریان به منظور رشد و پیشرفت بهتر در عرصه کسب و کار است'}
      ])
      //  const [selectedtype , setSelectedType] = useState(0)
             const changetype = (type:any) => {
              if(type === 'left' && state.selectedtype > 0){
               dispatch({ type : 'Edit' , payload: state.selectedtype - 1})
                // dispatch(state.selectedtype - 1)
              }
              if(type === 'right' && state.selectedtype < 4){
               dispatch({ type : 'Edit' , payload: state.selectedtype + 1})

                // dispatch(state.selectedtype + 1)
              }
      }
      
    
      
    return (
        <div className='px-1 lg:px-0'>

      
        <div className=' mt-6 lg:mt-10 flex justify-center items-center flex-col px-4 lg:px-0'>
      
        <div className='bgheadersmall lg:bgheader  text-center text-white text-lg  lg:text-2xl
         flex justify-center items-center w-[360px] overflow-hidden  z-10 lg:w-[600px] h-[60px]'>
            <h2 className='w-full '>خدمات</h2>
        </div>
        <div className='w-full lg:w-[1040px] min-h-[250px] lg:h-[200px] z-0 shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7] overflow-hidden   px-3 lg:px-6 mt-1  '>
      <div className=' rounded-md px-0 lg:px-32 py-3 lg:py-6 
      flex justify-between flex-col lg:flex-row text-center leading-8 text-sm  sm:text-base font-semibold'>
        <p className='px-5 lg:px-10 lg:leading-8'>
        شرکت توسعه نرم‌افزار، خدماتی متنوع ارائه می‌دهد که شامل تحلیل نیازمندی‌ها، طراحی و رابط کاربری، توسعه نرم‌افزار، آزمون و عیب‌یابی، نصب و راه‌اندازی و پشتیبانی فنی می‌شود.

این شرکت متخصصانی را در اختیار دارد که تجربه و توانایی لازم را در زمینه تکنولوژی‌های مختلف نرم‌افزاری دارند و برای پروژه‌های مختلفی مانند تجاری، آموزشی، سازمانی و سفارشی، خدمات ارائه می‌دهند.


        </p>
      </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-y-3 lg:gap-y-0  -mt-0 lg:-mt-6 gap-x-3 z-10'>
      <Button onClick={() => dispatch({ type : 'Edit' , payload: 0})} style={{ borderRadius: 4 }} 
          className={state.selectedtype === 0 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
            طراحی رابط کاربری
          </Button>
          <Button id='12' onClick={() => dispatch({ type : 'Edit' , payload: 1})} style={{ borderRadius: 4 }} 
          className={state.selectedtype === 1 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
           طراحی سایت
          </Button>
          <Button onClick={() => dispatch({ type : 'Edit' , payload: 2})} style={{ borderRadius: 4 }} 
          className={state.selectedtype === 2 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
            طراحی اپلیکیشن
          </Button>
          <Button onClick={() => dispatch({ type : 'Edit' , payload: 3})} style={{ borderRadius: 4 }} 
          className={state.selectedtype === 3 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
            سئو
          </Button>
          <Button 
          onClick={() => dispatch({ type : 'Edit' , payload: 4})} style={{ borderRadius: 4 }} 
          className={state.selectedtype === 4 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
          مشاوره کسب و کار
          </Button>
      </div>
      
        </div>
        <div className='flex flex-col justify-center items-center -mt-36 lg:mt-4 pr-0 lg:pr-0'>
        <div className=' lg:-mt-8 block   overflow-hidden   w-full 
          '>
          <div className='pt-32 lg:pt-16 w-full flex flex-col justify-center items-center'>
            <div className='py-14 w-[100%] lg:w-[85%] px-4 lg:px-16 text-center bg-[#EBF3F9] 
             flex justify-center items-center flex-col
              rounded-t-[30px]
             font-semibold text-base lg:text-2xl drop-shadow-lg '>
              <h2> {serviceTypeTitle[state.selectedtype].title}</h2>
                {/* <h2 className='hidden lg:block'>
                  <span onClick={ () => changetype('left')} className='border cursor-pointer border-black font-light rounded-lg px-3 mx-1'>{'<'}</span>
                  <span onClick={ () => changetype('right')} className='border cursor-pointer border-black font-light rounded-lg px-3 mx-1'>{'>'}</span>
                </h2> */}
            
              <p className='pt-6 pb-3 w-full lg:w-[60%] text-sm lg:text-sm leading-7 
              lg:leading-8 font-medium lg:font-semibold'>
                {serviceTypeTitle[state.selectedtype].description}
              </p>
            </div>
            <div className='w-[100%] lg:w-[85%]  py-8 lg:py-14 z-50 -mt-6 rounded-[30px] lg:px-12 bg-[#444757] 
          '>
                  <h2 className='text-white flex gap-x-2 pr-6 text-sm lg:pr-0 lg:text-base'>  
             <span>نمونه کار ها</span>
              <div className='flex'>
              <img src="../../Images/Vector147.svg" alt="" />
              <img src="../../Images/Vector147.svg" alt="" />
              <img src="../../Images/Vector147.svg" alt="" />
              </div>
             </h2>
            <ServicesCard type={state.selectedtype > -1 && state.selectedtype + 8} />
          </div>
          </div>
          <div className='-mt-[520px] md:-mt-[500px]  lg:-mt-[200px]'>
          <Contact_us />
          </div>
        </div>
      </div>
        {/* <div className='flex  flex-col justify-center items-center pr-5 lg:pr-0'>
        <div className='py-14 w-[100%] lg:w-[85%] px-4 lg:px-16 text-center bg-[#EBF3F9] 
             flex justify-center items-center flex-col
              rounded-t-[30px]
             font-semibold text-base lg:text-2xl drop-shadow-lg   '>
         <div className='pt-3 w-full'>
               <div className='py-8 lg:py-16 px-8 lg:px-16 lg:pl-0 '>
                <div className='flex w-[80%] border-b-2 pt-36 lg:pt-3 lg:mt-6 justify-between
                px-5 lg:pl-6 font-semibold text-base lg:text-2xl pb-2'>
                   <h2> {serviceTypeTitle[state.selectedtype].title}</h2>
                    <h2 className='hidden lg:block'>
                  <span onClick={ () => changetype('left')} className='border cursor-pointer border-black font-light rounded-lg px-3 mx-1'>{'<'}</span>
                  <span onClick={ () => changetype('right')} className='border cursor-pointer border-black font-light rounded-lg px-3 mx-1'>{'>'}</span>
                </h2>
                </div>
                <p className='py-8 w-5/6 text-sm lg:text-base leading-7 lg:leading-8 font-medium'>
                {serviceTypeTitle[state.selectedtype].description}
                </p>
               </div>
         </div>
         </div>
  
    <div>
         <div className='ml-[32px] -mt-0.5 block px-6 lg:px-24 py-20  drop-shadow-xl bgcardserveices lg:w-[1000px] overflow-hidden h-[500px]  '>
         <div className='flex w-full border-b-2 mt-6 justify-between px-6 pt-14
                  font-semibold text-sm lg:text-2xl pb-3'>
                    <h2>  <span className=''>  پروژه های </span>   
                     {serviceTypeTitle[state.selectedtype].title} </h2>
                </div>
        
         </div>
                </div>
        </div> */}
        {/* <ServicesCard type={state.selectedtype > -1 && state.selectedtype + 8} /> */}
        {/* <div className='-mt-[520px] md:-mt-[500px]  lg:-mt-[200px]'>
          <Contact_us />
          </div> */}
 
     </div>
    );
};

export default ServicesHeader;


