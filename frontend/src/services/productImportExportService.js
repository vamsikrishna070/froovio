import api from '@/config/axios';
export const importProducts=file=>api.post('/admin/products/import',file);
export const exportProducts=()=>api.get('/admin/products/export');
