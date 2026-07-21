import api from '@/config/axios';
export const getTestimonials=()=>api.get('/testimonials');
