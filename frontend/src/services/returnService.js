import api from '@/config/axios';
export const createReturn=data=>api.post('/returns',data);
export const getReturns=()=>api.get('/returns');
