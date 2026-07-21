import Order from '../models/Order.js';
export async function getDashboardStats(){
 const orders=await Order.countDocuments();
 const revenue=(await Order.find()).reduce((t,o)=>t+(o.total||0),0);
 return {orders,revenue};
}
