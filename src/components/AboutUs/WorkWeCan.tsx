import React from 'react';

const WorkWeCan = () => {
    const texts = {
        text1 : 'ما یک شرکت نرم‌افزاری پیشرو هستیم. تخصص ما در زمینه فناوری اطلاعات و توسعه نرم‌افزارهای نوآورانه است. تیم ما از افراد با تجربه و متخصص تشکیل شده است که به ارائه راهکارهای برتر'
    }
    return (
        <div className='mt-6 mb-1 lg:mb-20 flex flex-col items-center text-center'>
             <div className='px-2 lg:px-0 w-[95%] lg:w-[50%]'>
                <h2 className='font-semibold text-xl'>چه کار هایی ما انجام میدهیم؟</h2>
                <h3 className='leading-7 text-sm mt-5'>ما یک شرکت نرم‌افزاری پیشرو هستیم. تخصص ما در زمینه فناوری اطلاعات 
                    و توسعه نرم‌افزارهای نوآورانه است. تیم ما از افراد با
                     تجربه و متخصص تشکیل شده است که به ارائه راهکارهای برتر
                     و بهبود عملکرد سازمان‌ها از طریق فناوری
                      اطلاعات متعهدند. ما با همت و انگیزه بالا، مشتریانمان را 
                     در تمام مراحل پروژه‌هایشان همراهی می‌کنیم و تضمین می‌کنیم 
                </h3>
             </div>
             <div className='w-[95%] px-4 lg:px-0 lg:w-[70%] mt-14 grid-cols-1 grid lg:grid-cols-2 justify-items-center gap-x-3 gap-y-10'>
                <div className='h-[230px] rounded-[15px] border border-[#444757] lg:w-[500px]
                leading-7 text-sm px-5 flex items-center
                shadow-[5px_-8px_0px_1px_#1a202c]'>
                    {texts.text1}
                </div>

                <div className='h-[230px] rounded-[15px] border border-[#444757] lg:w-[500px]
                leading-7 text-sm px-5 flex items-center
                shadow-[5px_-8px_0px_1px_#1a202c]'>
                       {texts.text1}
                </div>

                <div className='h-[230px] rounded-[15px] border border-[#444757] lg:w-[500px]
                leading-7 text-sm px-5 flex items-center
                shadow-[5px_-8px_0px_1px_#1a202c]'>
                       {texts.text1}
                </div>

                <div className='h-[230px] rounded-[15px] border border-[#444757] lg:w-[500px]
                leading-7 text-sm px-5 flex items-center
                shadow-[5px_-8px_0px_1px_#1a202c]'>
                       {texts.text1}
                </div>
    
             </div>
        </div>
    );
};

export default WorkWeCan;