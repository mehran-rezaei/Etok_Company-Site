import React, { useState } from 'react';
import ProjectCard from '../project/ProjectCard';

const AboutUSWhyOus = () => {
    const [whyOusItem, setWhyOusItem] = useState([
        { image : '../../Images/Rectangle481.svg', id: 1 , title : 'تیم مجرب و نواور' , description :'تجربه: تیم مجرب و نواور ما با سال‌ها تجربه در توسعه نرم‌افزار، به شما راه‌حل‌های مبتنی بر تجربه عرضه می‌کند. نوآوری: تیم ما با استفاده از نوآوری‌های جدید در طراحی و توسعه نرم‌افزارها، شما را در پیشروی از رقبا کمک می‌کند.'},
        { image : '../../Images/Rectangle481.svg', id: 2 , title : 'پشتیبانی 24 ساعته' , description :'تیم پشتیبانی: تیم پشتیبانی ما ۲۴ ساعته آماده است تا به سوالات شما پاسخ دهد و در مواقع اضطراری به شما کمک کند. روش‌های ارتباطی: شما می‌توانید از طریق تلفن، ایمیل یا چت آنلاین با تیم پشتیبانی در تماس باشید.'},
        { image : '../../Images/Rectangle481.svg', id: 3 , title : 'چشم اندازی مدرن' , description :'طراحی و رابط کاربری: تیم چشم‌انداز مدرن با طراحی جذاب و رابط کاربری کارآمد، تجربه کاربری عالی را به شما ارائه می‌دهد. فناوری‌های پیشرفته: ما از فناوری‌های روز در تولید نرم‌افزارها استفاده می‌کنیم تا به شما راهکارهای مدرن و عملی ارائه دهیم.'},
      
        
        ])
    return (
        <div className='w-[100%] lg:w-[85%] my-10 lg:my-20 py-8 lg:py-14 z-50 rounded-[30px] lg:px-12 bg-[#444757] 
        '>  
            <div className=" 'flex  lg:justify-start lg:items-start  ">
          {whyOusItem.length > 0 &&
            whyOusItem.map((item: any, index: any) => (
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  id={item.id}
                  description={item.description}
                //   buttonText={'سفارش محصول'}
                />
            ))}  
      </div>
        </div>
    );
};

export default AboutUSWhyOus;