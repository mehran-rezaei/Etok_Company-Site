import axiosInstance from "./Configs/axiosInstance"

export function getProductBySubId(type:any) {
  return axiosInstance
    .get(`Blog/GetBlog?blogType=0&SubBlogTypeId=${type}`)
    .then((response: any) => response)
    .catch((error: any) => error)
}
export function getProductDetailsbyID(id:any) {
  return axiosInstance
    .get(`BlogDetail/GetBlogDetailByBlogId?BlogId=${id}`)
    .then((response: any) => response)
    .catch((error: any) => error)
}


