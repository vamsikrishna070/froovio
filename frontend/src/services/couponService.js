import api from '@/config/axios';
export const validateCoupon=code=>api.post('/coupons/validate',{code});
export const applyCoupon=code=>api.post('/cart/coupon',{code});
