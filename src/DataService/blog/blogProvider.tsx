import axiosInstance from "../Configs/axiosInstance"



export function getAllblogs(type:any) {
    return axiosInstance
      .get(`/Blog/GetAllBlog`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function getAllblog(type:any) {
    return axiosInstance
      .get(`/Blog/GetBlog?blogType=2`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function getAllProducts(type:any) {
    return axiosInstance
      .get(`/Blog/GetBlog?blogType=0`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }



//   export function getOneblog(type:any) {
//     return axiosInstance
//       .get(`/Blog/GetBlog?blogType=${type}`)
//       .then((response: any) => response)
//       .catch((error: any) => error)
//   }

  export function getOneblogDetails(id:any) {
    return axiosInstance
      .get(`/BlogDetail/GetBlogDetailByBlogId?BlogId=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  export function editBlog(data:any) {
    return axiosInstance
      .post(`/Blog/EditBlog`,{
        id: data.id,
        title: data.title,
        author: data.author,
        blogTypeGroupId: data.blogTypeGroupId,
        subBlogTypeId: data.subBlogTypeId,
        description: data.description,
        status: data.description
      })
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  export function addBlog(data:any) {
    console.log(data);
    
    return axiosInstance
      .post(`/Blog/AddBlog`,{
        author: data.author,
        description: data.description,
        title: data.title,
        blogTypeGroupId: data.blogTypeGroupId,
        subBlogTypeId: data.subBlogTypeId ,
        isHidden: 0     
      })
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function getBlogTypeGroup() {
    return axiosInstance
      .get(`BlogTypeGroup/GetBlogTypeGroup`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function getSubBlogTypeGroup() {
    return axiosInstance
      .get(`SubBlogType/GetSubBlogType`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function getSubBlogTypeGroupByBLogTypeId(id:any) {
    return axiosInstance
      .get(`SubBlogType/GetSubBlogTypeByBlogTypeGroupId?BlogTypeGroupId=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  export function addimage( id:any ,formDataMain:any) {
    console.log(formDataMain);
    return axiosInstance
      .post(`Image/AddImage?TableId=2&Id=${id}`, formDataMain)
    //   https://etokweb.etokco.ir/Image/AddImage?TableId=2&Id=50
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function addimagedetials( id:any ,formDataMain:any) {
    console.log(formDataMain);
    return axiosInstance
      .post(`Image/AddImage?TableId=3&Id=${id}`, formDataMain)
    //   https://etokweb.etokco.ir/Image/AddImage?TableId=2&Id=50
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  export function AddImageUrl(formDataMain:any) {
    console.log(formDataMain);
    return axiosInstance
      .post(`Image/AddImageUrl`, formDataMain)
    //   https://etokweb.etokco.ir/Image/AddImage?TableId=2&Id=50
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  

  export function getOneBlogData(id:any) {
    return axiosInstance
      .get(`Blog/GetBlogById?BlogId=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  export function showBlogData(id:any) {
    return axiosInstance
      .get(`BlogDetail/GetBlogDetailByBlogId?BlogId=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }


  export function editBlogData(text:any,id:any,idsecond:any,idthird:any) {
    return axiosInstance
      .post(`BlogDetail/EditBlogDetail`,
      {
        id: 8,
        blogId: id,
        description: [
          {
          id: idthird,
            description: text
          }
        ],
        bronze: "string",
        silver: "string",
        golden: "string"
      }
      )
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  export function addBlogData(text:any,id:any,type:any) {
    return axiosInstance
      .post(`BlogDetail/AddBlogDetailByArray`,
      {
        blogId: id,
        bronze: "",
        silver: "",
        golden: "",
        arrayList: [
          {
            type: type,
            property: text
          }
        ]
      }
      )
      .then((response: any) => response)
      .catch((error: any) => error)
  }

  export function addBlogDatanew(id:any,data:any) {
    return axiosInstance
      .post(`BlogDetailNew/AddBlogDetailNew`,
      {
        blogId: id,
        content: data
      }
      )
      .then((response: any) => response)
      .catch((error: any) => error)
  }




  
  export function editmainBlogData(data:any) {
    return axiosInstance
      .post(`/Blog/EditBlog`,
      {
        id: data.id,
        title: data.title,
        author: data.author,
        blogTypeGroupId: data.blogTypeGroupId,
        subBlogTypeId: data.subBlogTypeId,
        description: data.description,
        status: 0
      }
      )
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  // https://etokweb.etokco.ir/Blog/EditBlog



  export function deleteBlogDetails(id:any) {
    return axiosInstance
      // .post(`BlogDetail/DeleteBlogDetail?Id=${id}`)
      .delete(`BlogDetailNew/DeleteBlogDetailNew?Id=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  // https://etokweb.etokco.ir/



  export function getNewBlogDetails(id:any) {
    return axiosInstance
      .get(`BlogDetailNew/GetBlogDetailNewByBlogId?BlogId=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  // GetBlogDetailNewByBlogId?BlogId=54

  export function deleteOneBlog(id:any) {
    return axiosInstance
      .delete(`Blog/DeleteBlog?Id=${id}`)
      .then((response: any) => response)
      .catch((error: any) => error)
  }
  