import api from '@/config/axios';
export const getRecommendations=()=>api.get('/recommendations');
export const getFlashSales=()=>api.get('/flash-sales');
