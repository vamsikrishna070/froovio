export default function StoreSettingsForm(){
return <form className='space-y-4 border rounded-xl p-6'>
<input className='w-full border rounded p-3' placeholder='Store Name'/>
<input className='w-full border rounded p-3' placeholder='Support Email'/>
<input className='w-full border rounded p-3' placeholder='Tax Percentage'/>
<button className='bg-orange-600 text-white px-5 py-3 rounded'>Save Settings</button>
</form>;
}