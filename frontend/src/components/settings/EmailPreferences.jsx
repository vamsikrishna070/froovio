export default function EmailPreferences(){
return <div className='border rounded-xl p-6 space-y-4'>
<label><input type='checkbox' defaultChecked/> Promotional Emails</label><br/>
<label><input type='checkbox' defaultChecked/> Order Updates</label>
</div>;
}