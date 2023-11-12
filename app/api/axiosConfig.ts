import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://webtiemvangkimcucser.azurewebsites.net/api',
    headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
    function (config: any) {
        if (config.url.includes('/admin') && !config.url.includes('/login')) {
            if (localStorage.getItem('accessToken')) {
                config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
            }
        }
        return config;
    },
    function (error: any) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response: any) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error: any) {
        if (error?.response?.status === 401) {
            localStorage.removeItem('accessToken');
            window.location.href = '/admin/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
