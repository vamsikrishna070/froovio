import api from '@/config/axios';
export const subscribeStockAlert=id=>api.post(`/products/${id}/stock-alert`);
