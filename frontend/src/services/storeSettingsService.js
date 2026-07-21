import api from '@/config/axios';
export const getStoreSettings=()=>api.get('/admin/store-settings');
export const updateStoreSettings=data=>api.put('/admin/store-settings',data);
