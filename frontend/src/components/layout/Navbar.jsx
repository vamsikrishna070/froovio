import {Link} from "react-router-dom";
import Container from "@/components/common/Container";
export default function Navbar(){
return <header className="border-b bg-white sticky top-0 z-50"><Container><nav className="flex h-16 items-center justify-between"><Link to="/" className="text-2xl font-bold text-orange-600">Froovio</Link><div className="flex gap-6"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/cart">Cart</Link></div></nav></Container></header>;
}