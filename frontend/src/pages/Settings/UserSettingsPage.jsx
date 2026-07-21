import AccountSettings from '@/components/settings/AccountSettings';
import EmailPreferences from '@/components/settings/EmailPreferences';
export default function UserSettingsPage(){
return <div className='max-w-4xl mx-auto p-8 space-y-8'>
<h1 className='text-3xl font-bold'>Account Settings</h1>
<AccountSettings/>
<EmailPreferences/>
</div>;
}