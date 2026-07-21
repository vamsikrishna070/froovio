export default function PaymentMethods(){
return <div className="space-y-2">
<label><input type="radio" name="pay" defaultChecked/> Cash on Delivery</label><br/>
<label><input type="radio" name="pay"/> Card</label><br/>
<label><input type="radio" name="pay"/> UPI</label>
</div>;
}