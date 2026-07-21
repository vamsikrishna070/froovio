import api from '@/config/axios';
export const getBrands=()=>api.get('/brands');
export const getBrand=id=>api.get(`/brands/${id}`);
