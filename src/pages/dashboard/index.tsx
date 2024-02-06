import React, { useEffect ,useContext , useState } from 'react';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
// components
import DashboardSidebar from '../../components/dashboard/dashboardSidebar';
import { dashboardHandler } from '../../context/dashboardReducer';
import AddPost from '../../components/dashboard/AddPost'
import EditPosts from '../../components/dashboard/EditPosts'
import Cookies from 'js-cookie';
import Login from '@/components/dashboard/Login';
import Head from 'next/head';
import EditProduct from '@/components/dashboard/EditProduct';


const Dashboard = () => {

    const { page , setPage} = useContext(dashboardHandler);
    const [userinfo , setUserInfo] = useState<any>({})
    const [showpage, setshowpage] = useState<any>(false)
    const [showComponents, setshowComponents] = useState<any>(false)

    let date = new DateObject({
        date: new Date(),
      });
      date = new DateObject({
        calendar: persian,
        locale: persian_fa,
        format: "dddd DD MMMM YYYY",
      });
      console.log(date.format());
      let irandate = date.format()
      let dateObject1 = new DateObject({
          date,
          calendar: persian,
          locale: persian_fa,
          format: "HH:mm",
        });
        let time = dateObject1.format()
    useEffect(() => {
    if(Cookies.get('admin') === 'true'){
      setshowpage(true)
      console.log('admin here');
    } else{
      setshowpage(false)
      console.log('member here');
    }
        },[showpage,showComponents])   
        setTimeout(() => setshowComponents(true), 1500);
    return (
    <>
         <Head>
        <title>Etok / ایتوک</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" className="w-10 h-10" />
        <link
            rel="stylesheet"
            href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
          />
      </Head>
      {showComponents ?
        <div>
           {showpage  ?
        <div dir='rtl' className='text-center text-white text-3xl h-screen px-2 lg:px-4 lg:flex'>
            <div className='w-full lg:relative z-10  lg:w-1/5 '>
            <DashboardSidebar />  
            </div>
            <div className='w-full px-2 lg:px-4 mt-20 lg:mt-0'>
            <div className='hidden lg:flex font-semibold text-sm w-full h-24 bg-navbarBt m-4 rounded-lg  justify-between items-center px-7'>
                <div className='flex'>
                    <div className='flex items-center'>
                        <div className='ml-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        </div>
                        <div className='text-right'>
                        {/* <h3>{time}</h3> */}
                        <h3>{irandate}</h3>
                      
                        </div>
                        
                    </div>
                </div>
                <div className='flex items-center text-xs '> 
                <span className='ml-3 font-medium text-sm'>{userinfo.FirstName  && userinfo.FirstName}</span>
                <span className='ml-3 font-medium text-sm'>{userinfo.LastName  && userinfo.LastName}</span>
                <span className='ml-6  font-medium text-sm'>خوش آمدید</span>
                <div 
                //  onClick={logout} 
                 className='cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-left " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
                </div>
                </div>
            </div>
            <div className=''>    
                {page.addPost && <AddPost />}
                {page.editPost && <EditPosts />}      
                {page.addProduct && <EditProduct />}    
            </div>
            </div>
   
        </div>
        :
        <div>
          <div className=' h-screen bg-blue-500 '>
            <Login  showpage={showpage} setshowpage={setshowpage}/>
          </div>
        </div> }
        </div>: 
        <div></div>}
    </>
    );
};

export default Dashboard;