import {createContext,useContext,useEffect,useState} from "react";
const CartContext=createContext();
export function CartProvider({children}){
 const [items,setItems]=useState(()=>JSON.parse(localStorage.getItem("cart")||"[]"));
 useEffect(()=>localStorage.setItem("cart",JSON.stringify(items)),[items]);
 const addToCart=(p)=>setItems(v=>{const i=v.findIndex(x=>x._id===p._id);if(i>-1){const n=[...v];n[i].qty++;return n;}return [...v,{...p,qty:1}]});
 const updateQty=(id,qty)=>setItems(v=>v.map(i=>i._id===id?{...i,qty}:i));
 const removeItem=id=>setItems(v=>v.filter(i=>i._id!==id));
 const total=items.reduce((a,b)=>a+b.price*b.qty,0);
 return <CartContext.Provider value={{items,total,addToCart,updateQty,removeItem}}>{children}</CartContext.Provider>;
}
export const useCart=()=>useContext(CartContext);