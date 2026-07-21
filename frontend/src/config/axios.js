import axios from "axios";
const api=axios.create({baseURL:import.meta.env.VITE_API_URL,withCredentials:true});
api.interceptors.request.use(c=>{const t=localStorage.getItem("accessToken");if(t)c.headers.Authorization=`Bearer ${t}`;return c;});
let refreshing=false;
api.interceptors.response.use(r=>r,async err=>{
 const req=err.config;
 if(err.response?.status===401 && !req._retry){
   req._retry=true;
   if(!refreshing){
     refreshing=true;
     try{
       const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`,{}, {withCredentials:true});
       localStorage.setItem("accessToken",data.accessToken);
     }finally{refreshing=false;}
   }
   req.headers.Authorization=`Bearer ${localStorage.getItem("accessToken")}`;
   return api(req);
 }
 return Promise.reject(err);
});
export default api;