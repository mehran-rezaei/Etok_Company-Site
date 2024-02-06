import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';
import Cookies from "js-cookie";
import { getNewBlogDetails, showBlogData } from '@/DataService/blog/blogProvider';
import { getRecentblogs } from '@/DataService/BlogPageProvider';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import OtherBlogs from './OtherBlogs';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ReactQuill = dynamic(import('react-quill'), { ssr: false })


const BlogDetails = () => {
    const router = useRouter()
    console.log(router.query.id);
    const [showPage , setShowPage] = useState<any>(false)
    const [prData,setPrData] = useState<any>(false)
    const [title , setTitle] = useState<any>(false)
  const [recentblogs ,setRecentBlogs] = useState<any>(false)
  const [DataBLog,setDataBlog] = useState<any>(false)
  const [pageId , setPageId] = useState<any>(undefined)
    console.log(prData);
    // console.log(prData.imageList[0].adress);
    useEffect(() => {
        setPageId(router.query.id)
      } , [router.query.id])
    useEffect(() => {
    //   console.log(Cookies.get('idblog'))
    //   console.log(Cookies.get('titleblog'))
    if(pageId !== undefined){
    //   if(Cookies.get('titleblog') !== undefined){
    //     setTitle(Cookies.get('titleblog'))
    //   }
      setShowPage(true)
      getNewBlogDetails(pageId)
      .then(Response => {
          console.log(Response.data.data);
          setDataBlog(Response.data.data.blogDetailList)
          setTitle(Response.data.data.blogTitle)
      })
      .catch(err => {
          console.log(err);   
      })
    }
    //   showBlogData(Cookies.get('idblog'))
    //   .then(Response => {
    //     console.log(Response.data.dataList);
    //     setPrData(Response.data.dataList)
    //   })
    //   .catch(error => {
    //     console.log(error); 
    //   })
    } ,[pageId])
    useEffect(() => {
        getRecentblogs(2)
        .then(Response => {
         console.log(Response.data.dataList);
         setRecentBlogs(Response.data.dataList)
        })
        .catch(err => {
            console.log(err); 
        }) 
    } , [])
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: [] }],
          [{ font: [] }],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{link : true}],
          [{image :  true}],
          [{ color: ["red", "#785412"] }],
          [{ background: ["red", "#785412" ,"black" , "green"] }]
        ],
      };
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font"
      ];
    return (
        <div className='px-4 sm:px-0  mt-4 sm:mt-14'>
            <div className='flex flex-col lg:flex-row   lg:justify-between gap-x-8 
             pb-10  sm:pb-20 mb-20 border-opacity-30  border-b-2  border-black  '>
                {DataBLog ?
                <div className='w-full lg:w-3/4'>
                    <div className='w-full flex items-start sm:items-center    border-opacity-40
                 justify-between flex-col sm:flex-row sm:gap-y-0 gap-y-3 border-b-2  border-black pb-1 sm:pb-2 px-0 sm:px-0'>
                       <h3 className='text-[12px] sm:text-sm font-semibold sm:ml-7 px-2 sm:px-0 '>
                       نویسنده :  ایتوک
                        </h3>
                        <h3 className='text-[12px] sm:hidden sm:text-sm 
                        flex items-center gap-x-1 
                        font-semibold sm:ml-7 px-2 sm:px-0'>
                            <img src="../../Images/blogcalender.svg" className='h-5' alt="" />
                        شنبه 21 مرداد 1402 : 20:00 
                        </h3>
                        <h2 className=' w-full sm:w-auto text-sm sm:text-base font-semibold
                         text-center sm:text-right border-t-2 border-black  border-opacity-40  sm:border-none
                         py-3 sm:py-0'>
                            {title && title}</h2>
                        <h3 className='text-[10px] hidden sm:flex items-center gap-x-1 
                        sm:text-sm font-semibold sm:ml-7 '>
                            <img src="../../Images/blogcalender.svg" alt="" />
                        شنبه 21 مرداد 1402 : 20:00 
                        </h3>
                    </div>
                    <div className='mt-5 px-5' >
                        {DataBLog && DataBLog.map((data:any) => (
                            // <div className='' 
                            // dangerouslySetInnerHTML={{ __html: data.content }} />         
                            <ReactQuill
                               value={data.content}
                               readOnly={true}
                               theme={"bubble"}
                               modules={modules}
                               formats={formats}
                            />
                        ))}
                    </div>
                    <div className='sm:pl-10 font-medium text-sm text-center sm:text-right 
                sm:text-lg sm:pt-4 leading-8 sm:leading-9'>
                    {/* {prData && prData.map((data:any) => (
                        <div>
                        <p className='my-6 sm:my-10'>
               {data.descriptionList[0] && data.descriptionList[0].description}
                            </p>
                                <div className='w-full flex justify-center pl-0 my-2 sm:my-4'>
                                {data.imageList[0] && 
                                <div className='w-full flex justify-center pl-0  my-2 sm:my-4'>
                                <img src={data.imageList[0].adress} className='' alt="" />
                            </div>
                                }
                            </div>
                        </div>
                    ))} */}
                            
                        {/* <div className='w-full flex justify-center pl-0  my-2 sm:my-4'>
                            <img src="../../meh/blogdetimg.png" className='' alt="" />
                        </div>

                        <p className='my-6 sm:my-10'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </p>
                        <p className='my-6 sm:my-10'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </p>
                        <div className='w-full flex justify-center pl-0 my-2 sm:my-4'>
                            <img src="../../meh/blogdetimg.png" className='' alt="" />
                        </div>
                        <p className='my-6 sm:my-10'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </p> */}
                    </div>

                </div> :
                <div className='w-full lg:w-3/4 flex items-start justify-center my-16 lg:my-0'>
                    <CircularProgress />
                </div>
            }
                   


                <div className='w-full lg:w-1/4'>
                    <div className='w-full flex justify-center items-center font-semibold
                      bg-[#444757] rounded-l-xl h-11 text-white'>
                        <h2>جدید ترین مطالب</h2>
                    </div>
                    <div className=' border-opacity-40  sm:border-r-2  pt-2 border-black pb-2  '>
                       {recentblogs && recentblogs.map((blog:any) => (
                        <SmallCard 
                        description={blog.description}
                        title={blog.title}
                        image={blog.image}
                        id={blog.id}
                        />

                       ))} 
                        {/* <SmallCard />
                        <SmallCard /> */}
                    </div>
                    <div className='w-full flex justify-center items-center font-semibold
                      bg-[#444757] rounded-l-xl h-11 text-white'>
                        <h2>پربازدیدترین مطالب </h2>
                    </div>
                    <div className=' border-opacity-40  pt-2 sm:border-r-2  border-black pb-2'>
                    {recentblogs && recentblogs.map((blog:any) => (
                        <SmallCard 
                        description={blog.description}
                        title={blog.title}
                        image={blog.image}
                        id={blog.id}
                        />

                       ))} 
                    </div>
                </div>
            </div>
        <div dir='rtl'>
            <div className="lg:w-[90%] flex justify-center lg:justify-start items-center lg:mr-20 mb-0">
            <h1 className="bgtitle text-[20px] lg:text-[25px] pt-3 lg:pr-10 h-[60px] lg:h-[70px] font-extrabold">
                 دیگر مطالب
            </h1>
           </div>
           <OtherBlogs />
        </div>
        </div>
    );
};

export default BlogDetails;