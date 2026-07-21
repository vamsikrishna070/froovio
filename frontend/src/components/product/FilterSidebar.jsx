export default function FilterSidebar(){
return <aside className='space-y-4 rounded-xl border p-4'>
<h3 className='font-semibold'>Filters</h3>
<input type='range' min='0' max='1000' className='w-full'/>
<select className='w-full border rounded p-2'><option>Newest</option><option>Price Low</option><option>Price High</option></select>
</aside>;
}
