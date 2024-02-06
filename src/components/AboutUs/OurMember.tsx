import React from 'react';
import MemberCart from './MemberCart';

const OurMember = () => {
    const image1 = '../../Images/memberprof.svg'
    const image2 = '../../Images/ourmember2.svg'
    return (
        <div  className='mb-20'>
            <div className=' px-4 lg:px-0 text-center mb-5'>
                <h2 className='font-semibold text-2xl '>تیم ما</h2>
                <p className='text-sm font-medium mt-5 '>ما یک شرکت نرم‌افزاری پیشرو هستیم. تخصص ما در زمینه فناوری اطلاعات و توسعه نرم‌افزارهای نوآورانه است.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-9 px-4 '>
            <MemberCart name={'محمد جواد سواری'} image={image1} job={'مدیر عامل شرکت توسعه نرم افزار ایتوک'} />
            <MemberCart name={'الهام سواری'} image={image2} job={'مدیر فنی شرکت توسعه نرک افزار ایتوک'} />
            <MemberCart name={'مهران رضایی '} image={image1} job={'توسعه دهنده فرانت اند سایت با زبان های (react.js , next.js)'} />
            <MemberCart name={'علی رضا روغنی زاده'} image={image1} job={'توسعه دهنده فرانت اند سایت با زبان های (react.js , next.js)'} />
            <MemberCart name={'حامد غلامی زاده'} image={image1} job={'     طراحی رابط کاربری (ui , ux) با نرم افزار فیگما'} />
            <MemberCart name={'لورم ایپسوم'} image={image1} job={'لورم ایپسوم متن ساختگی است که برای محتوای'} />
            <MemberCart name={'لورم ایپسوم'} image={image2} job={'لورم ایپسوم متن ساختگی است که برای محتوای'} />
            <MemberCart name={'لورم ایپسوم'} image={image2} job={'لورم ایپسوم متن ساختگی است که برای محتوای'} />
            <MemberCart name={'لورم ایپسوم'} image={image2} job={'لورم ایپسوم متن ساختگی است که برای محتوای'} />



            </div>
        </div>
    );
};

export default OurMember;