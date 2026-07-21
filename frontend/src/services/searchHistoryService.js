import api from '@/config/axios';
export const getRecentSearches=()=>api.get('/search/history');
