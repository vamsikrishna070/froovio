import api from '@/config/axios';
export const getInvoice=id=>api.get(`/orders/${id}/invoice`);
