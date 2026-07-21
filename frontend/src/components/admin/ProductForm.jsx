export default function ProductForm(){
return <form className='grid gap-3'>
<input className='border p-2 rounded' placeholder='Product Name'/>
<input className='border p-2 rounded' placeholder='Price' type='number'/>
<input className='border p-2 rounded' placeholder='Stock' type='number'/>
<textarea className='border p-2 rounded' placeholder='Description'/>
<button className='bg-orange-600 text-white rounded p-3'>Save Product</button>
</form>;
}