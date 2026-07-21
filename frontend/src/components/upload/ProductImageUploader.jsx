export default function ProductImageUploader(){
return <div className='border-2 border-dashed rounded-xl p-8 text-center'>
<input type='file' multiple className='mb-4'/>
<p>Select product images to upload.</p>
</div>;
}