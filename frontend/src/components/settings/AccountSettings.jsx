export default function AccountSettings(){
return <form className='space-y-4 border rounded-xl p-6'>
<input className='w-full border rounded p-3' placeholder='Full Name'/>
<input className='w-full border rounded p-3' placeholder='Phone Number'/>
<button className='bg-orange-600 text-white rounded px-5 py-3'>Update Profile</button>
</form>;
}