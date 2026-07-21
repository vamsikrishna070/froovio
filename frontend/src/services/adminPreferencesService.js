import api from '@/config/axios';
export const getPreferences=()=>api.get('/admin/preferences');
export const updatePreferences=data=>api.put('/admin/preferences',data);
