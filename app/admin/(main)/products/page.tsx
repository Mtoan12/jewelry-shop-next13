import Link from 'next/link';
import { Suspense } from 'react';
import AdminCategory from '../../AdminCategory';
import ProductsListSkeleton from '../../loading-components/ProductsListSkeleton';
import AdminProducts from './AdminProducts';
import FilterProduct from './FilterProduct';

type Props = {
    params?: {
        num?: string;
    };
    searchParams?: {
        filters?: string;
        page?: number;
        perPage?: number;
    };
};
export default function Admin({ searchParams }: Props) {
    const filters = searchParams?.filters || encodeURIComponent(JSON.stringify({ SearchKey: '' }));
    const page = searchParams?.page || 0;
    const perPage = searchParams?.perPage || 12;

    return (
        <main className="container py-[48px] flex flex-col justify-center items-center gap-10">
            <AdminCategory />

            <section className="shadow-md container grid grid-cols-12 place-content-center text-center lg:text-start gap-5 py-10">
                <h1 className="text-3xl font-bold col-span-12 lg:col-span-7">Danh sách sản phẩm</h1>
                <Link
                    className="w-full col-span-12 lg:col-span-5 lg:place-self-end lg:w-fit text-white bg-primaryColor px-3 py-2 hover:opacity-80 transition-all rounded-md"
                    href="/admin/add-product"
                >
                    Thêm sản phẩm
                </Link>
                <FilterProduct filters={filters} />
            </section>
            <Suspense fallback={<ProductsListSkeleton size={12} />}>
                <AdminProducts filters={filters} page={page} perPage={perPage} />
            </Suspense>
        </main>
    );
}
