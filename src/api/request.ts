import axios from 'axios'

const instance = axios.create({
    baseURL:'http://120.24.64.5:8088/mall-admin/',
    timeout:15000
})

instance.interceptors.request.use(config=>{
   const token = localStorage.getItem('token')
   if(token){
    config.headers = config.headers ||{}
    config.headers.Authorization = token
   }

    return config
},err=>{
    return Promise.reject(err)
})


instance.interceptors.response.use(result=>{
    return result.data
},err=>{
    return Promise.reject(err)
})

export default instance