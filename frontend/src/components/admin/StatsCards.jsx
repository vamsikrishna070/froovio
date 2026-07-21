export default function StatsCards({stats={}}){
return <div className='grid md:grid-cols-4 gap-4'>
{Object.entries(stats).map(([k,v])=><div key={k} className='border rounded-xl p-5'><p>{k}</p><h2 className='text-2xl font-bold'>{v}</h2></div>)}
</div>;
}