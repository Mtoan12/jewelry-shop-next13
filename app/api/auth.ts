import instance from './axiosConfig';

class AuthApi {
    async login({ username, password }: { username: string; password: string }) {
        try {
            const res = await instance.post('/Auth/Login', {
                userName: username,
                passWord: password,
            });

            return res.data;
        } catch (error: any) {
            throw error;
        }
    }
}

const authApi = new AuthApi();
export default authApi;
