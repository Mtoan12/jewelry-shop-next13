import { Suspense } from 'react';
import AdminCategory from '../../AdminCategory';
import AdminProducts from './AdminProducts';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import SearchInput from './SearchInput';
export default function Admin() {
    return (
        <main className="container py-[48px] flex flex-col justify-center items-center gap-10">
            <AdminCategory />
            <section className="shadow-md container grid grid-cols-12 gap-5 py-10">
                <h1 className="text-3xl font-bold col-span-7">Danh sách sản phẩm</h1>
                <Link
                    className="place-self-end col-span-5 w-fit text-white bg-primaryColor px-3 py-2 hover:opacity-80 transition-all rounded-md"
                    href="/admin/add-product"
                >
                    Thêm sản phẩm
                </Link>
                <div className="relative w-[75%] col-span-7">
                    <SearchInput />
                </div>
                <div className=" col-span-5 place-self-end flex gap-2">
                    <Button>Loại trang sức</Button>
                    <Button>Chất liệu</Button>
                </div>
            </section>
            <Suspense fallback="Đợi xíu...">
                <AdminProducts />
            </Suspense>
        </main>
    );
}
