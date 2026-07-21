import api from '@/config/axios';
export const getQuestions=id=>api.get(`/products/${id}/questions`);
export const askQuestion=(id,data)=>api.post(`/products/${id}/questions`,data);
