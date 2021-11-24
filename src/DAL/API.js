import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': '9404ce95-49f8-4e4a-b22c-f8373bd290e6',
  },
});

const API = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const resp = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`,
    );
    return resp.data;
  },
  async getProfile(id) {
    const resp = await instance.get(`profile/${id}`);
    return resp.data;
  },
  async subscribe(id) {
    const resp = await instance.post(`follow/${id}`, {});
    return resp.data;
  },
  async unsubscribe(id) {
    const resp = await instance.delete(`follow/${id}`);
    return resp.data;
  },
  async getAuthMe() {
    const { data } = await instance.get('auth/me');
    return data;
  },
  updateStatus(status) {
    return instance.put('profile/status', { status });
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  async login({ email, password, rememberMe = false }) {
    const { data } = await instance.post('auth/login', { email, password, rememberMe });
    return data;
  },
  async logout() {
    const { data } = await instance.delete('auth/login');
    return data;
  },
};

export default API;
