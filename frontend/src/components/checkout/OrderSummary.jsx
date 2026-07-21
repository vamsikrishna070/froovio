export default function OrderSummary({items=[],total=0}){
return <aside className="border rounded-xl p-5">
<h2 className="text-xl font-bold mb-3">Order Summary</h2>
{items.map(i=><div key={i._id} className="flex justify-between"><span>{i.name} × {i.qty}</span><span>${i.price*i.qty}</span></div>)}
<hr className="my-3"/>
<p className="font-bold">Total: ${total.toFixed(2)}</p>
</aside>;
}