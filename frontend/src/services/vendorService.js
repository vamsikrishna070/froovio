import api from '@/config/axios';
export const getVendor=id=>api.get(`/vendors/${id}`);
