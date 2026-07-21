import api from '@/config/axios';
export const getCollections=()=>api.get('/collections');
export const getCollection=id=>api.get(`/collections/${id}`);
