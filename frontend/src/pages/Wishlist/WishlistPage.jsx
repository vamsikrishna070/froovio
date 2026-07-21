import {useWishlist} from "@/context/WishlistContext";
import WishlistItem from "@/components/wishlist/WishlistItem";
export default function WishlistPage(){
 const {items}=useWishlist();
 return <div className="p-8"><h1 className="text-3xl font-bold mb-6">Wishlist</h1>
 {items.length?items.map(i=><WishlistItem key={i._id} item={i}/>):<p>No wishlist items.</p>}
 </div>;
}