import api from '@/config/axios';
export const getFAQs=()=>api.get('/faqs');
export const createSupportTicket=data=>api.post('/support',data);
