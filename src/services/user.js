import { useMutation, useQuery } from '@tanstack/react-query';
import { API_URL } from 'src/constants/common';
import { request } from 'src/utils/request';

export const loginWithGoogle = data => request.post('/v1/member/login-google', data);
export const getProfile = () => request.get('/v1/member/profile');
export const register = data => request.post('/v1/member/register', data);
export const login = data => request.post('/v1/member/login', data);
export const addBank = data => request.post('/v1/member/update-bank', data);
export const addWallet = data => request.post('/v1/member/update-wallet', data);
export const changePassword = data => request.post('/v1/member/change-password', data);

// Mutation
export const useGoogleLoginMutation = () => useMutation({ mutationFn: loginWithGoogle });
export const useRegisterMutation = () => useMutation({ mutationFn: register });
export const useLoginMutation = () => useMutation({ mutationFn: login });
export const useChangePasswordMutation = () => useMutation({ mutationFn: changePassword });
export const useAddBankMutation = () => useMutation({ mutationFn: addBank });
export const useAddWalletMutation = () => useMutation({ mutationFn: addWallet });

// Query
export const useQueryUserProfile = (options = {}) => useQuery({ queryKey: ['GET_USER_PROFILE'], queryFn: () => getProfile(), ...options });
