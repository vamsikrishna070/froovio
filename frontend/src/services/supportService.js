import api from '@/config/axios';
export const createTicket=data=>api.post('/support',data);
export const getTickets=()=>api.get('/support');
