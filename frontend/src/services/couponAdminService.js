import api from '@/config/axios';
export const getCoupons=()=>api.get('/admin/coupons');
export const createCoupon=data=>api.post('/admin/coupons',data);
export const deleteCoupon=id=>api.delete(`/admin/coupons/${id}`);
