import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography, } from "@material-tailwind/react"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { Radio } from "@material-tailwind/react";
import { AddImageUrl, addBlogData, addBlogDatanew, addimage, addimagedetials, deleteBlogDetails, editBlogData, editmainBlogData, getBlogTypeGroup, getNewBlogDetails, getOneBlogData, getSubBlogTypeGroupByBLogTypeId, showBlogData } from '@/DataService/blog/blogProvider';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
const Quill = dynamic(import('react-quill'), { ssr: false });

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  // overflow:'scroll',
  overflow: 'auto',
  maxHeight: 710,
  borderRadius: '10px'
};

const EditPostModal = (props: any) => {
  const { blogData, setopenmodal, setallBlogsData } = props
  const [open, setOpen] = useState(true);
  const [editActived, setEditActived] = useState<any>(false)
  const [editText, setEditText] = useState<any>('')
  const [showImage, setShowImage] = useState(false)
  const [showTextFiled, setShowTextFiled] = useState(false)
  const [blogTypes, setBlogTypes] = useState([])
  const [typeBlog, setTypeBlog] = useState<any>('')
  const [showBlogTypes, setShowBlogTypes] = useState(false)
  const [idForDetail, setIdForDetail] = useState<any>('')
  const [change, setChange] = useState(false)
  const [editorValue, setEditorValue] = useState('');
  const [subblogTypes, setSubBlogTypes] = useState([])
  const [typeSubBlog, setTypeSubBlog] = useState<any>('')

  console.log(blogData);

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedImageDetails, setSelectedImageDetails] = useState<any>(null);
  const [allBLogDetails, setAllBlogDetails] = useState<any>(false)
  const [blogTypeName, setBlogTypeName] = useState<any>('')
  const [showSubBlogTypes, setSubShowBlogTypes] = useState(false)
  const [dataBlog, setDataBlog] = useState<any>({
    title: null,
    author: null,
    description: null,
    blogTypeGroupId: null,
    addText: null,
    subBlogTypeName : null,
    subBlogTypeId : null
  })
  console.log(dataBlog);
  console.log(typeSubBlog);
  

  const [deletedActived, setDeleteActived] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setopenmodal(false);
  };

  const notify = () => toast.success('با موفقیت ثبت شد', {
    duration: 2000,
    position: 'top-center',

  });
  const notifyError = () => toast.error('همه مقادیر رابه درستی وارد کنید', {
    duration: 2000,
    position: 'top-left',
  });


  const [hidden, setisHidden] = useState<any>(1)
  const [data, setData] = useState<any>({
    title: null,
    author: null,
    description: null,
    blogTypeId: null,
    addText: null
  })

  console.log(typeBlog);
  console.log(showBlogTypes);

  const [getDetailAgain, setGetAgain] = useState(false)
  useEffect(() => {
  }, [change])


  useEffect(() => {
    if (blogData) {
      console.log(blogData);
      console.log(dataBlog);
      getOneBlogData(blogData)
      .then(Response => {
        console.log(Response );
        setDataBlog(Response.data.dataList[0])
      })
      .catch(err => {
        console.log(err);
        
      })
      getNewBlogDetails(blogData)
        .then(Response => {
          console.log(Response.data.dataList);
          // setDataBlog(Response.data.dataList)
          // setAllBlogDetails(Response.data.dataList[0].blogDetails)
          setAllBlogDetails(Response.data.dataList)

        })
        .catch(error => {
          console.log(error);
          notifyError()
        })
    }
  }, [blogData, deletedActived, change])

  const deleteDetails = (details: any) => {
    console.log(details);
    deleteBlogDetails(details)
      .then(Response => {
        console.log(Response);
        setGetAgain(!getDetailAgain)
        //  getDetails()
        if (Response.data.isSuccess === true) {
          notify()
          console.log('rr');
        }
        setDeleteActived(!deletedActived)
      })
    console.log(details);
  }

  const changeHandler = (event: any) => {
    console.log(event.target.value)
    setDataBlog({ ...dataBlog, [event.target.name]: event.target.value })
    console.log(dataBlog);
  }

  const changeHandler2 = (event: any) => {
    setEditText(event.target.value)
    console.log(editText);

  }

  console.log(allBLogDetails);

  const [idforaddImage, setIdForAddImage] = useState<any>(false)
  const sendDetails = async () => {
    console.log(dataBlog.addText);
    // console.log(blogData);  
    addBlogData(dataBlog.addText, blogData, 1)
      .then(Response => {
        console.log(Response);
        console.log(Response.data.data)
        //  setIdForAddImage(Response.data.data)
        setDataBlog({ ...dataBlog, addText: '' })
        setChange(!change)
      })
      .catch(error => {
        console.log(error);
        notifyError()
      })
  }
  let formData = new FormData();
  formData.append("file", selectedImageDetails)
  console.log(selectedImageDetails);
  

  const sendDetailsforImage = async () => {
    AddImageUrl(formData)
      .then(Response => {
        console.log(Response);
        if (Response.data) {
          addBlogData(Response.data, blogData, 2)
            .then(Response => {
              console.log(Response);
              setSelectedImageDetails('')
            })
            .catch(err => {
              console.log(err);
            })
        }
        // setSelectedImageDetails(null)
        notify()
      })
      .catch(error => {
        console.log(error);
        notifyError()
      })
  }
  const sendImgDetail = async () => {

  }
  useEffect(() => {
    sendImgDetail()
  }, [idforaddImage])

  const sendToEdit = (details: any) => {

    editBlogData(editText, blogData, 8, details.id,)
      .then(Response => {
        console.log(Response);
        setChange(!change)
        if (Response.data.isSuccess === true) {
          notify()
          console.log('rr');
        }
        //  getDetails()
      })
    console.log(details);
  }

  //  useEffect(() => {
  //   sendImgDetail()
  //  } , [idForDetail])

  let formDataMain = new FormData();
  formDataMain.append("file", selectedImage);
  console.log(formDataMain);

  useEffect(() => {
    // sendImgMain()
  }, [idForDetail])

  console.log(idForDetail);
  useEffect(() => {
      //  const blogTypes = await axios.get('https://api.etokco.com/BlogType/GetBlogType')
      getBlogTypeGroup()
        .then(Response => {
          console.log(Response.data.dataList);
          setBlogTypes(Response.data.dataList)
        })
        .catch(err => {
          console.log(err); 
        })
        
        getSubBlogTypeGroupByBLogTypeId(dataBlog.blogTypeGroupId)
        .then(response => {
          console.log(response.data.dataList);
          setSubBlogTypes(response.data.dataList)
        })
        .catch(err => {
          console.log(err);
        })
    
  }, [dataBlog.blogTypeGroupId])
  useEffect(() => {
    if (idForDetail > 0) {
      showBlogData(idForDetail)
        .then(Response => {
          console.log(Response);
        })
    }

  }, [])

  const sendData = async () => {
    if (selectedImage) {
      addimage(dataBlog.id, formDataMain)
        .then(Response => {
          console.log(Response);
          notify()

        })
        .catch(err => {
          console.log(err);

        })
    }
    editmainBlogData(dataBlog)
      .then(Response => {
        console.log(Response)
        notify()

      })
      .catch(error => {
        console.log(error);
        // notifyError()
      })
  }
  useEffect(() => {
    if (dataBlog.blogTypeGroupId) {
      const blogtypeDefault = blogTypes.find((type: any) => type.id === dataBlog.blogTypeGroupId)
      console.log(blogtypeDefault);
      setBlogTypeName(blogtypeDefault)

    }
  }, [dataBlog])

  
  const modules = {
    toolbar: [
      // [{ header: [1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      // [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      // [{ list: "ordered" }, { list: "bullet" }],
      [{link : true}],
      [{image :  true}],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412" ,"black" , "green"] }]
    ],
  };
  const formats = [
    // "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    // "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    // "font"
  ];
  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content:any, delta:any, source:any, editor:any) => {
    setCode(content);
    // console.log(content);
    // console.log(editor);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  {console.log(code)}
 const sendnewblogdata = () => {
  addBlogDatanew(blogData,code)
  .then(Response => {
    console.log(Response);
    notify()
    setCode("")
  })
  .catch(err => {
    console.log(err);
    
  })
 }
  return (
    <div className=''>
      <Modal
        // keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >

        <Box sx={style} {...  { dir: "rtl" }}>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <div className='text-black text-base text-right px-10 sm:mt-6 pb-10  '>
              <div className='flex justify-between'>
                <h2 className='text-xl mb-6'>    ویرایش پست</h2>
                <h2 onClick={handleClose} className='cursor-pointer 
              '>بستن</h2>
              </div>

              <div>
                {typeBlog ?
                  <button onClick={() => setShowBlogTypes(!showBlogTypes)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-4" type="button">{typeBlog.typeName}<svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  :
                  <button onClick={() => setShowBlogTypes(!showBlogTypes)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-4" type="button">
                    {blogTypeName && blogTypeName.typeName}
                    {/* {dataBlog.blogTypeId &&
     dataBlog.blogTypeId
    blogTypes.find((type:any) => type.id === dataBlog.blogTypeId)
  } */}

                    <svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                }
                {/* { blogTypes && blogTypes.find((type:any) => type.id = blogData.id   )} */}


                <div id="dropdown" className={showBlogTypes ? "z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" :
                  "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
                  <ul className="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {blogTypes && blogTypes.map((type: any) => (
                      <li onClick={() => {
                        setShowBlogTypes(!showBlogTypes)
                        setTypeBlog(type)
                        setDataBlog({ ...dataBlog, blogTypeGroupId: type.id })
                      }} key={type.id} className="block px-4   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {type.typeName}
                      </li>
                    ))}
                  </ul>
                </div>

           <div className='w-full '>
           {dataBlog.subBlogTypeId ?
             <button onClick={() => setSubShowBlogTypes(!showSubBlogTypes)} 
              id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
              className="text-white bg-blue-700 hover:bg-blue-800 
              font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-centerw-1/3 mb-4" 
              type="button">
               {/* {typeSubBlog.subBlogTypeName} */}
               {/* {dataBlog.subBlogTypeId} */}
               {dataBlog.subBlogTypeName}
               <svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
             :
             <button 
            //  disabled={data.blogTypeGroupId   ? false : true }
             onClick={() => setSubShowBlogTypes(!showSubBlogTypes)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
               font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex 
               items-center   w-1/3 mb-4
               disabled:opacity-50"
                type="button"
             >نوع ساب بلاگ<svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
           }
           <div id="dropdown" className={showSubBlogTypes ? "z-10 absolute bg-white text-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" :
             "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "}>
             <ul className="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
               {subblogTypes && subblogTypes.map((type: any) => (
                 <li onClick={() => {
                   setSubShowBlogTypes(!showSubBlogTypes)
                   setTypeSubBlog(type)
                   setDataBlog({ ...dataBlog, subBlogTypeId: type.id , subBlogTypeName : type.subBlogTypeName})
                 }} key={type.id} className="block px-4   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 >{type.subBlogTypeName}</li>
               ))}
             </ul>
           </div>
         </div>
                <form>
                  <div className='flex justify-between'>
                    <div className="mb-6 w-2/3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان پست</label>
                      <input name='title' value={dataBlog.title} onChange={changeHandler} type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="عنوان پست را وارد کنید" required />
                    </div>
                    <div className="mb-8 w-1/3 mr-10">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام نویسنده</label>
                      <input name='author' value={dataBlog.author} onChange={changeHandler}
                        type="text" placeholder='نام نویسنده را وارد کنید' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                  </div>


                  <div className="mb-8">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">توضیحات</label>
                    <input name='description' value={dataBlog.description} onChange={changeHandler}
                      type="text" placeholder='توضیحات' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                  </div>
                  <div className="flex gap-10">
                    {dataBlog.status ?
                      <Radio id="html" onClick={() => setisHidden(0)} name="type" label="نمایش " />
                      :
                      <Radio id="html" onClick={() => setisHidden(0)} name="type" label="نمایش " defaultChecked />

                    }
                    {dataBlog.status ?
                      <Radio id="react" onClick={() => setisHidden(1)} name="type" label="پنهان" defaultChecked />
                      :
                      <Radio id="react" onClick={() => setisHidden(1)} name="type" label="پنهان" />
                    }
                  </div>

                  <div className="mb-1 w-full flex items-center justify-center">
                    <div className="flex mb-10 mt-8 ml-10  h-20 items-center justify-start bg-grey-lighter">
                      <label className="w-64 flex flex-col items-center  py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all ease-in 0.2s">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal"> انتخاب تصویر اصلی </span>
                        <input
                          type="file"
                          name="myImage"
                          id='imagesFiles'
                          className='hidden'
                          onChange={(event: any) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                          }}
                        />
                      </label>
                    </div>
                    {selectedImage &&
                      <div className=''>
                        <img
                          alt="not found"
                          width={"160px"}
                          className={'h-[70px]'}
                          src={URL.createObjectURL(selectedImage)}
                        />
                        {/* <h2> تصویر جدید </h2> */}
                        <p className=' inline-block text-blue-600 mt-2 ml-2 text-[13px]'>
                          تصویر جدید </p>
                        <button className='text-blue-600 mt-2 border px-1 border-blue-600 rounded-md text-[13px]'
                          onClick={() => setSelectedImage(null)}>حذف عکس</button>
                      </div>}

                    <div className='mr-5'>
                      <img
                        alt="not found"
                        width={"160px"}
                        className={'h-[70px]'}
                        src={dataBlog.image && dataBlog.image}
                      />
                      <h2> تصویر فعلی </h2>
                    </div>

                  </div >

                  <button type="button"
                    onClick={sendData}
                    className="text-white w-80 mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 mb-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >ثبت تغییرات قسمت اصلی </button>

<div dir='ltr' className="text-editor ">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </div>
    {/* <h2 onClick={() => sendnewblogdata()}>  </h2> */}
    <button type="button" onClick={sendnewblogdata} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 mt-5 w-32"
                      >ثبت محتوا </button>

                  {/* {blogData ? <ul className="grid  w-full gap-6 md:grid-cols-2  mb-6">
                    <li className='mb-10' onClick={() => {
                      setShowImage(true)
                      setShowTextFiled(false)

                    }}>
                      <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                      <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                          <div className="w-full text-lg font-semibold">افزودن عکس</div>
                        </div>
                        <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </label>

                    </li>
                    <li onClick={() => {
                      setShowTextFiled(true)

                      setShowImage(false)
                    }}>
                      <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                      <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                          <div className="w-full text-lg font-semibold">افزودن متن</div>
                        </div>
                        <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                      </label>
                    </li>
                  </ul> : ''} */}
                  {/* <div>
                    {showImage &&
                      <div className="">
                        <div className="mb-5 w-full flex items-center">
                          <div className="flex mb-10 mt-8 ml-10  h-20 items-center justify-start bg-grey-lighter">
                            <label className="w-64 flex flex-col items-center  py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all ease-in 0.2s">
                              <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                              </svg>
                              <span className="mt-2 text-base leading-normal"> انتخاب تصویر مقاله </span>
                              <input
                                type="file"
                                name="myImage"
                                id='imagesFiles'
                                className='hidden'
                                onChange={(event: any) => {
                                  console.log(event.target.files[0]);
                                  setSelectedImageDetails(event.target.files[0]);
                                }}
                              />
                            </label>
                          </div>
                          {selectedImageDetails &&
                            <div className=''>
                              <img
                                alt="not found"
                                width={"120px"}
                                className={'h-[70px]'}
                                src={URL.createObjectURL(selectedImageDetails)}
                              />

                              <button className='text-blue-600 mt-2 text-[13px]' onClick={() => setSelectedImageDetails(null)}>حذف عکس</button>
                            </div>}
                        </div >
                        <button type="button" onClick={() => {
                          sendDetailsforImage()
                          // sendImgDetail()
                          // handleButtonClick()
                          // sendDetailsforImage() 
                          //  sendImgDetail()
                        }} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-32"
                        >ثبت عکس</button>

                      </div>
                    }

                  </div> */}
                  {/* {showTextFiled &&
                    <div className='mb-6'>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >متن مقاله   </label>
                      <textarea name="addText" value={dataBlog.addText} onChange={changeHandler} rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="متن مقاله را وارد کنید"></textarea>
                      <button type="button" onClick={sendDetails} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 mt-5 w-32"
                      >ثبت متن</button>
                    </div>} */}

                  <div  className=''>
                    {allBLogDetails &&
                      <h1 className='text-[30px] my-10'>  محتوای مقاله :
                      </h1>
                    }
                    {/* {allBLogDetails && allBLogDetails.map((details: any) => (
                      <div>
                        {details.descriptionList.map((onedetails: any) => (

                          <div key={onedetails.id}
                            className='border-2 border-gray-100 py-3 w-full px-6 rounded-md mb-8'>
                            {onedetails.isImage ? '' :
                              <div className='flex justify-start my-2 ' >
                                <h3 onClick={() => deleteDetails(details.id)} className='cursor-pointer ml-10'>حذف</h3>
                                <h3 onClick={() => {
                                  setEditActived(onedetails.id)
                                  setEditText(onedetails.description)
                                }}
                                  className='ml-10 cursor-pointer '>ویرایش</h3>
                                <h3 className=' text-[10x] break-words w-[500px]'>
                                  {onedetails.description}
                                </h3>
                              </div>}
      
                            <div className='my-3'>
                              {editActived == onedetails.id && <div className='flex justify-between'>
                                <textarea name="editText" value={editText} onChange={changeHandler2} rows={4}
                                  className="block  p-2.5 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="متن مقاله را وارد کنید"></textarea>
                                <h3 onClick={() => sendToEdit(onedetails)}
                                  className=" text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-32 mt-6"
                                >
                                  ثبت
                                </h3>
                              </div>
                              }
                            </div>

                          </div>
                        ))}
                      </div>

                    ))} */}


                    {/* /////////////////////////////////// images */}
                    <div dir='rtl' className=''>

                    {allBLogDetails && allBLogDetails.map((details: any) => (
                         <div className='border p-2 my-5 rounded-md'>                         
                               <ReactQuill
                               value={details.content}
                               readOnly={true}
                               theme={"bubble"}
                              //  modules={modules}
                              //  formats={formats}
                            />
                      
                            <button  onClick={() => deleteDetails(details.id)}
                             className=" text-white mr-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-1 mt-5 w-32"
                      >حذف 
                       </button>
                         </div>
                    ))}
                    
                    </div>


                    {/* {allBLogDetails && allBLogDetails.map((details: any) => (
                      <div>
                        {details.imageList.map((onedetails: any) => (
                          <div key={onedetails.id}
                            className='border-2 border-gray-100 py-3 w-full px-6 rounded-md mb-8'>
  
                            {onedetails.adress ?
                              <img src={onedetails.adress} alt="" />
                              : ''}
                            <div className='my-3'>
                              {editActived == onedetails.id && <div className='flex justify-between'>
                                <textarea name="editText" value={editText} onChange={changeHandler2} rows={3}
                                  className="block  p-2.5 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="متن مقاله را وارد کنید"></textarea>
                                <h3 onClick={() => sendToEdit(onedetails)}
                                  className=" text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-32 mt-6"
                                >
                                  ثبت
                                </h3>
                              </div>
                              }
                            </div>

                          </div>
                        ))}
                      </div>
                    ))} */}
                  </div>



                </form>

                {/* <button onClick={notify}>Make me a toast</button> */}
                <Toaster />
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default EditPostModal;