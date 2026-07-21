import api from '@/config/axios';
export const getRefundRequests=()=>api.get('/admin/refunds');
export const approveRefund=id=>api.patch(`/admin/refunds/${id}/approve`);
export const rejectRefund=id=>api.patch(`/admin/refunds/${id}/reject`);
