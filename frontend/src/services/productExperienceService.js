import api from '@/config/axios';
export const getRelatedProducts=id=>api.get(`/products/${id}/related`);
export const getSimilarProducts=id=>api.get(`/products/${id}/similar`);
