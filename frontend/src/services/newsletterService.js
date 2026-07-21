import api from '@/config/axios';
export const subscribeNewsletter=email=>api.post('/newsletter',{email});
