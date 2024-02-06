import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
  } from "@material-tailwind/react";
import axios from 'axios';
import EditPostModal from './EditPostModal';
import { deleteOneBlog, getAllProducts } from '@/DataService/blog/blogProvider';
import toast, { Toaster } from 'react-hot-toast';
import EditProductModal from './EditProductModal';


const EditProduct = () => {
    const [AllBlogsData , setallBlogsData] = useState([])
    const [selectedBlog , setSelectedBlog] = useState<any>({})
    const [blogData , setBlogData] = useState<any>([])
    const [showModal , setShowModal] = useState<any>(false)
    const [openmodal, setopenmodal] = useState<boolean>(false);
    const [modalIsOpen, setIsOpen] = useState<any>(false);
    const [open, setOpen] = React.useState(false);
    const [getAgain , setGetAgain] = useState(false)
    const notify = () => toast.success('با موفقیت حذف شد', {
      duration: 2000,
      position: 'top-left',
    });
    const notifyError = () => toast.error('ناموفق', {
      duration: 2000,
      position: 'top-left',
    });
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
     useEffect(() => {
             getAllProducts(1)
            .then(Response => {
                console.log(Response.data.dataList)
                setallBlogsData(Response.data.dataList)
            })
            .catch(err => {
              console.log(err);
              notifyError()
            })
     } , [getAgain , setGetAgain])

     const selectedItem = async (id:any) => {
      setShowModal(true)
      console.log(showModal);
            setBlogData(id)
     }
     const deleteBlog = (id:any) => {
      deleteOneBlog(id)
      .then(Response => {
        console.log(Response);
        if(Response.data.isSuccess === true){
          setGetAgain(!getAgain)
          // getAllblogs(1)
          notify()
          console.log('ddd');
        }else{
          setGetAgain(!getAgain)
          notifyError()
          console.log('nnnn');
        }
      })
      .catch(err => {
        // setGetAgain(!getAgain)
        console.log(err);   
        notifyError()
      })
     }
    return (
        <div className='mt-10'>
              <Card>
        <CardHeader variant="gradient" color="purple" className="mb-8 p-6">
          <Typography variant="h6" color="black">
            جدول پست ها
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead className=''>
              <tr  className='' >
                {["عنوان","نوع وبلاگ","نویسنده", "نمایش دادن","تاریخ ","مدیریت بلاگ","حذف کردن"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5   text-center"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AllBlogsData.map(
                ({  title, image, id, author, date , blogTypeGroupId , status }, key) => {
                  const className = `py-3 px-5 ${
                    key === AllBlogsData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={image} alt={id} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {title}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
            
                          {blogTypeGroupId}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {/* {job[0]} */}
                          {/* Programator */}
                          {author}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                        //   color={"green"}
                        //   value={"online"}
                          color={status ? "green" : "blue-gray"}
                          value={status ? "مخفی " :"نمایش "  }
                          className={`py-0.5 px-2 text-[11px] font-semibold  ${status ? 'text-blue-600' : 'text-green-500'} `}
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {/* {date} */}
        
                          11/01/19
                        </Typography>
                      </td>
                      <td className={className}
                      onClick={() => {
                       setopenmodal(true);
                       selectedItem(id)}
                      }
                       >
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          ویرایش
                        </Typography>
                      </td>
                      <td className={className}
                      onClick={() => deleteBlog(id)}

                       >
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold  text-red-600"
                        >
                          حذف
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <div >
        {openmodal ? (
        <EditProductModal
        setopenmodal={setopenmodal}
        AllBlogsData={AllBlogsData} 
        setallBlogsData={setallBlogsData}
        blogData={blogData}
          /> 
        ) : null}

      </div>
      <Toaster />

        </div>
    );
};

export default EditProduct;