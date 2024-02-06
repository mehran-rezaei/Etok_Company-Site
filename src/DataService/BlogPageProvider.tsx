import axiosInstance from "./Configs/axiosInstance";

export function getAllblogs(type:any) {
  return axiosInstance
    .get(`Blog/GetBlog?blogType=${type}&SubBlogTypeId=`)
    .then((response: any) => response)
    .catch((error: any) => error)
}

export function getRecentblogs(type:any) {
  return axiosInstance
    .get(`Blog/GetBlogyRecentDate?blogType=${type}&Quentity=6`)
    .then((response: any) => response)
    .catch((error: any) => error)
}
