import api from '@/config/axios';
export const getAnalytics=()=>api.get('/analytics');
export const getSalesReport=()=>api.get('/analytics/sales');
