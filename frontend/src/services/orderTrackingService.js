import api from '@/config/axios';
export const trackOrder=id=>api.get(`/orders/${id}/tracking`);
