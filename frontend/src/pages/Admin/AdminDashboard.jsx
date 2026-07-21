export default function AdminDashboard(){
return <div className='p-8'>
<h1 className='text-4xl font-bold mb-8'>Admin Dashboard</h1>
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
{['Revenue','Orders','Users','Products'].map((c,i)=><div key={i} className='rounded-xl border p-6 shadow-sm'><h2 className='font-semibold'>{c}</h2><p className='text-3xl mt-3'>0</p></div>)}
</div>
</div>;
}