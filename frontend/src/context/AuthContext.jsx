import {createContext,useContext,useEffect,useState} from "react";
import api from "@/config/axios";
const AuthContext=createContext();
export function AuthProvider({children}){
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
useEffect(()=>{api.get("/auth/me").then(r=>setUser(r.data)).catch(()=>{}).finally(()=>setLoading(false));},[]);
const login=async(data)=>{const r=await api.post("/auth/login",data);localStorage.setItem("accessToken",r.data.accessToken);setUser(r.data.user);};
const logout=()=>{localStorage.removeItem("accessToken");setUser(null);};
return <AuthContext.Provider value={{user,loading,login,logout}}>{children}</AuthContext.Provider>;
}
export const useAuth=()=>useContext(AuthContext);