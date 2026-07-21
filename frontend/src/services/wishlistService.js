import api from "@/config/axios";
export const getWishlist=()=>api.get("/wishlist");
export const toggleWishlist=(id)=>api.post(`/wishlist/${id}`);
