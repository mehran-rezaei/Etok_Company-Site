import { Button } from 'antd';
import React, { useState } from 'react';

import ProjectCardSection from './ProjectCardSection';
import Contact_us from '../home/contact_us';

const ProjectHeader = () => {
     const [projectTypeTitle, setProjectTypeTitle] = useState([
     { title : 'طراحی رابط کاربری' , description :'طراحی رابط کاربری یک فرایند مهم در توسعه نرم‌افزار و وب سایت‌ها است که به کاربران امکان ارتباط و تعامل مؤثر با سیستم را می‌دهد. در زیر یک متن سه چهار خطی درباره طراحی رابط کاربری برای شما آورده‌ام:   طراحی رابط کاربری، هنر و علمی است که در آن با توجه به نیازها و خواسته‌های کاربران، یک محیط کاربری زیبا و کاربرپسند را ایجاد می‌کنیم.    این فرایند شامل ایجاد طرح‌های اولیه، طراحی نمونه‌ها، و تست و بهبود مستمر است که هدف نهایی آن '},
     { title : 'طراحی سایت' , description :'طراحی یک وبسایت، فرآیندی است که به منظور ایجاد یک صفحه اینترنتی کارآمد، جذاب و قابل دسترس برای کاربران انجام می‌شود. این فرایند شامل تعیین نیازها و اهداف وبسایت، طراحی ساختار اطلاعاتی، انتخاب رنگ‌ها و فونت‌ها، طراحی گرافیکی و صفحات، و توسعه کدهای قابل اجرا برای رابطه بین کاربر و سرور است. همچنین، برای دستیابی به یک طراحی وبسایت خوب، نیاز است تا به اصول طراحی رابط کاربری، بهینه‌سازی جستجوی موتورهای جستجو، و سازگاری با مرورگرها و دستگاه‌های مختلف توجه کنیم'},
     { title : 'طراحی اپلیکیشن' , description :'طراحی یک اپلیکیشن موبایل، فرآیندی است که با توجه به نیازها و خواسته‌های کاربران، یک رابط کاربری کارآمد، زیبا و ساده برای دستگاه‌های همراه ایجاد می‌کند. این فرایند شامل تعیین محدوده و قابلیت‌های اپلیکیشن، طراحی رابط کاربری و تجربه کاربری، توسعه کدها و اجرای آزمون‌ها بر روی دستگاه‌های مختلف اس'},
     { title : 'سئو' , description : 'سئو، فرآیندی است که با بهینه‌سازی عناصر مختلف یک وبسایت، امکان دسترسی بهتر و رتبه‌بندی بالاتر در نتایج موتورهای جستجو را فراهم می‌کند.  این فرایند شامل بهینه‌سازی عناصر مانند کلیدواژه‌ها، ساختار وبسایت، محتوا، لینک‌ها و عوامل فنی مانند سرعت بارگیری و سازگاری با دستگاه‌های مختلف می شود'}
     
     ])
      const [selectedtype , setSelectedType] = useState(0)
      const changetype = (type:any) => {
              if(type === 'left' && selectedtype > 0){
                setSelectedType(selectedtype - 1)
              }
              if(type === 'right' && selectedtype < 3){
                setSelectedType(selectedtype + 1)
              }
      }
  return (
    <div>
      <div className=' mt-6 lg:mt-10 flex justify-center items-center flex-col '>

        <div className='bgheadersmall lg:bgheader  text-center text-white text-lg  lg:text-2xl
             flex justify-center items-center w-[360px] overflow-hidden  z-10 lg:w-[600px] h-[60px]'>
          <h2 className='w-full '>پروژه ها</h2>
        </div>
        <div className='w-full lg:w-[1040px] h-[350px] lg:h-[250px] z-0 shadow-[1px_1px_35px_1px_#edf2f7,-1px_-1px_35px_1px_#edf2f7] overflow-hidden   px-3 lg:px-6 mt-1  '>
          <div className=' rounded-md px-0 lg:px-32 py-3 lg:py-6 
             flex justify-between flex-col lg:flex-row text-center leading-8 text-sm  sm:text-base font-semibold'>
            <p className='px-5 lg:px-10 leading-7'>
            پروژه‌ها، فرآیندهایی هستند که به ترتیب برنامه‌ریزی، تخصیص منابع، اجرا و کنترل و پایان‌بخشی صورت می‌گیرند به منظور دستیابی به هدف‌های مشخص در زمان و بودجه تعیین شده.
هر پروژه دارای ویژگی‌ها و خصوصیات منحصربه‌فردی است که شامل محدوده، منابع، زمانبندی، اهداف و خروجی‌های مورد انتظار است.
مدیریت پروژه، فرایندی است که برای برنامه‌ریزی، تنظیم و کنترل پروژه‌ها به منظور دستیابی به نتایج مطلوب در محدودیت‌های زمان و منابع انجام می‌شود
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-y-3 lg:gap-y-0  -mt-2 lg:-mt-6 gap-x-3 z-10'>
          <Button onClick={() => {setSelectedType(0)}} style={{ borderRadius: 4 }} 
          className={selectedtype === 0 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
            طراحی رابط کاربری
          </Button>
          <Button onClick={() => {setSelectedType(1)}} style={{ borderRadius: 4 }} 
          className={selectedtype === 1 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
           size="large" type="primary">
            طراحی سایت
          </Button>
          <Button onClick={() => {setSelectedType(2)}} style={{ borderRadius: 4 }} 
          className={selectedtype === 2 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
            طراحی اپلیکیشن
          </Button>
          <Button onClick={() => {setSelectedType(3)}} style={{ borderRadius: 4 }} 
          className={selectedtype === 3 ? 'bg-[#4355FF]  w-48' :'bg-[#232636]  w-48'}
          size="large" type="primary">
            سئو
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
                <h2>{projectTypeTitle[selectedtype].title}</h2>
                {/* <h2 className='hidden lg:block'>
                  <span onClick={ () => changetype('left')} className='border cursor-pointer border-black font-light rounded-lg px-3 mx-1'>{'<'}</span>
                  <span onClick={ () => changetype('right')} className='border cursor-pointer border-black font-light rounded-lg px-3 mx-1'>{'>'}</span>
                </h2> */}
            
              <p className='pt-6 pb-3 w-full lg:w-[60%] text-sm lg:text-sm leading-7 
              lg:leading-8 font-medium lg:font-semibold'>
              {projectTypeTitle[selectedtype].description}
              </p>
            </div>
            <div className='w-[100%] lg:w-[85%]  py-8 lg:py-14 z-50 -mt-6 rounded-[30px] lg:px-12 bg-[#444757] 
          '>
            <h2 className='text-white flex gap-x-2  pr-6 text-sm lg:pr-0 lg:text-base '>  
             <span>نمونه کار ها</span>
              <div className='flex'>
              <img src="../../Images/Vector147.svg" alt="" />
              <img src="../../Images/Vector147.svg" alt="" />
              <img src="../../Images/Vector147.svg" alt="" />
              </div>
             </h2>
            
            <ProjectCardSection type={selectedtype > -1 && selectedtype + 8}/>
          </div>
          </div>
          <div className='-mt-[520px] md:-mt-[500px]  lg:-mt-[200px]'>
          <Contact_us />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectHeader;