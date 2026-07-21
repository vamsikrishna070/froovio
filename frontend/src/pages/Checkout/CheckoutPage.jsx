import {useCart} from "@/context/CartContext";
import AddressForm from "@/components/checkout/AddressForm";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import OrderSummary from "@/components/checkout/OrderSummary";
export default function CheckoutPage(){
const {items,total}=useCart();
return <div className="grid md:grid-cols-2 gap-8 p-8">
<div><h1 className="text-3xl font-bold mb-6">Checkout</h1><AddressForm/><div className="mt-6"><PaymentMethods/></div><button className="mt-6 bg-orange-600 text-white rounded px-6 py-3">Place Order</button></div>
<OrderSummary items={items} total={total}/>
</div>;
}