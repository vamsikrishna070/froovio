export default function ProfileForm(){
 return <form className="space-y-4">
 <input className="w-full border rounded p-3" placeholder="Full Name"/>
 <input className="w-full border rounded p-3" placeholder="Email"/>
 <button className="bg-orange-600 text-white px-5 py-3 rounded">Save Changes</button>
 </form>;
}