'use client';
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import FilterDialog from './FilterDialog';
import debounce from '@/lib/debounce';
import { useRouter } from 'next/navigation';

export default function FilterProduct() {
    const [searchTerm, setSearchTerm] = useState('');
    const [chatLieus, setChatLieus] = useState<number[]>([]);
    const [loaiTrangSucs, setLoaiTrangSucs] = useState<number[]>([]);
    const router = useRouter();

    useEffect(() => {
        const setSearchParam = (filters: string) => {
            router.push(`/admin/products?filters=${filters}`);
        };
        const filters = () => {
            const result: { [k: string]: any } = {};

            result.SearchKey = searchTerm;
            if (chatLieus.length > 0) result.ChatLieus = chatLieus;
            if (loaiTrangSucs.length > 0) result.LoaiTrangSucs = loaiTrangSucs;

            const filter = encodeURIComponent(JSON.stringify(result));
            
            const funcDebounce = debounce(() => {
                setSearchParam(filter);
            }, 50);
            funcDebounce();
        };

        filters();
    }, [searchTerm, chatLieus, loaiTrangSucs, router]);

    return (
        <>
            <div className="relative w-full lg:w-[75%] col-span-12 lg:col-span-7">
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className=" col-span-12 lg:col-span-5 place-self-end w-full flex gap-2 justify-stretch">
                <FilterDialog type="chatLieu" />
                <FilterDialog type="loaiTrangSuc" />
            </div>
        </>
    );
}
