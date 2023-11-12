'use client';

import authApi from '@/app/api/auth';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm();

    const onSubmit = async (data: any, e: any) => {
        e.preventDefault();
        try {
            const res = await authApi.login(data);
            if (res?.result) {
                toast({
                    variant: 'success',
                    title: 'Đăng nhập thành công',
                });
                window.location.href = '/admin';
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Đăng nhập thất bại',
                    description: res?.errorMessage,
                });
            }
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Đăng nhập thất bại',
                description: error.message,
            });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="inline-block text-md font-semibold mb-2" htmlFor="username">
                    Tên đăng nhập:
                </label>
                <input
                    className={cn(
                        'w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-primaryColor-hover focus:ring-1 focus:ring-primaryColor-hover focus:ring-opacity-50',
                        errors.username && 'border-red-500'
                    )}
                    id="username"
                    type="username"
                    placeholder="Nhập Username"
                    {...register('username', { required: true })}
                />
                {errors.username && (
                    <span className="text-red-500 text-sm mt-1">Chưa nhập Email</span>
                )}
            </div>

            <div className="mb-3">
                <label className="inline-block text-md font-semibold mb-2" htmlFor="password">
                    Password:
                </label>
                <input
                    className={cn(
                        'w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-primaryColor-hover focus:ring-1 focus:ring-primaryColor-hover focus:ring-opacity-50',
                        errors.password && 'border-red-500'
                    )}
                    id="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    {...register('password', { required: true })}
                />
                {errors.password && (
                    <span className="text-red-500 text-sm mt-1">Chưa nhập mật khẩu</span>
                )}
            </div>

            <button
                className="w-full bg-primaryColor hover:bg-primaryColor-hover transition-all py-3 text-white font-semibold rounded mt-5"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
        </form>
    );
}
