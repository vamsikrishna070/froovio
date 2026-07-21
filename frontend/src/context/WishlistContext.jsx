import {createContext,useContext,useState} from "react";
const WishlistContext=createContext();
export function WishlistProvider({children}){
 const [items,setItems]=useState([]);
 const toggle=(product)=>{
   setItems(v=>v.some(i=>i._id===product._id)?v.filter(i=>i._id!==product._id):[...v,product]);
 };
 return <WishlistContext.Provider value={{items,toggle}}>{children}</WishlistContext.Provider>;
}
export const useWishlist=()=>useContext(WishlistContext);
