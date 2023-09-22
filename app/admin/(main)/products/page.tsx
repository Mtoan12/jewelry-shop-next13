import { Suspense } from 'react';
import AdminCategory from '../../AdminCategory';
import AdminProducts from './AdminProducts';
import Link from 'next/link';
export default function Admin() {
    return (
        <main className="py-[48px] flex flex-col justify-center items-center gap-10">
            <Link
                className="fixed top-[100px] right-[100px] text-white bg-primaryColor px-3 py-2 opacity-70 hover:opacity-100 rounded-md"
                href="/admin/add-product"
            >
                Thêm sản phẩm
            </Link>
            <AdminCategory />
            <h1 className="text-3xl font-bold">Danh sách sản phẩm</h1>
            <Suspense fallback="Đợi xíu...">
                <AdminProducts />
            </Suspense>
        </main>
    );
}
