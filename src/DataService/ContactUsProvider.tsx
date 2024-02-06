import axiosInstance from "./Configs/axiosInstance"

export function sendForm(data:any) {
  return axiosInstance
    .post('Request/AddRequest',{
        name   : data.name,
        number : data.number,
        message: data.message,
        email:   data.email,
        productName: '',
        businessName:''
    })
    .then((response: any) => response)
    .catch((error: any) => error)
}
export function sendProductForm(data:any) {
  return axiosInstance
    .post('Request/AddProductRequest',{
      name: data.name,
      number: data.number,
      message: data.message,
      email: data.email,
      productName: data.productName,
      businessName: data.businessName
    })
    .then((response: any) => response)
    .catch((error: any) => error)
}

