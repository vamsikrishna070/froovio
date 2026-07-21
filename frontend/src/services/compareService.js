import api from '@/config/axios';
export const compareProducts=ids=>api.post('/products/compare',{ids});
