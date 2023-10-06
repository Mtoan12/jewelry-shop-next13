'use client';
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import FilterDialog from './FilterDialog';
import debounce from '@/lib/debounce';
import { useRouter } from 'next/navigation';
import { CHATLIEUS, LOAITRANGSUCS } from '@/constance/constance';

type Props = {
    filters: string;
};
export default function FilterProduct({ filters }: Props) {
    const decodeFilter = JSON.parse(decodeURIComponent(filters));
    const [searchTerm, setSearchTerm] = useState(decodeFilter.SearchKey || '');
    const [chatLieus, setChatLieus] = useState<number[]>(decodeFilter.ChatLieus || []);
    const [loaiTrangSucs, setLoaiTrangSucs] = useState<number[]>(decodeFilter.LoaiTrangSucs || []);
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

    const showFilters = (type: 'chatLieu' | 'loaiTrangSuc', filters: number[]) => {
        if (filters.length === 0) {
            return;
        }
        const data = type === 'chatLieu' ? CHATLIEUS : LOAITRANGSUCS;
        const result = data.filter((item) => filters.includes(item.id));

        return result;
    };
    const showChatLieus = (filters: number[]) => {
        if (filters.length === 0) {
            return;
        }
        const result = CHATLIEUS.filter((item) => filters.includes(item.id));

        return result;
    };
    const showLoaiTrangSucs = (filters: number[]) => {
        if (filters.length === 0) {
            return;
        }
        const result = LOAITRANGSUCS.filter((item) => filters.includes(item.id));

        return result;
    };

    const chatLieusChosen = showChatLieus(chatLieus);
    const loaiTrangSucsChosen = showLoaiTrangSucs(loaiTrangSucs);

    return (
        <>
            <div className="relative w-full lg:w-[75%] col-span-12 lg:col-span-7">
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className=" col-span-12 lg:col-span-5 place-self-end w-full flex gap-2 justify-stretch">
                <FilterDialog checksList={chatLieus} setChecksList={setChatLieus} type="chatLieu" />
                <FilterDialog
                    checksList={loaiTrangSucs}
                    setChecksList={setLoaiTrangSucs}
                    type="loaiTrangSuc"
                />
            </div>
            {(chatLieus.length > 0 || loaiTrangSucs.length > 0) && (
                <div className=" col-span-12 place-self-end w-full flex flex-col gap-2 justify-stretch">
                    <h2 className="text-lg font-semibold">Đã chọn</h2>
                    {chatLieus.length > 0 && (
                        <>
                            <h3 className="text-md font-semibold">Chất liệu: </h3>
                            <p className="flex flex-wrap gap-2">
                                {chatLieusChosen &&
                                    chatLieusChosen.map((item) => (
                                        <span
                                            key={item.id}
                                            className="py-1 px-2 rounded-lg bg-primary text-white"
                                        >
                                            {item.chatLieu}
                                        </span>
                                    ))}
                            </p>
                        </>
                    )}
                    {loaiTrangSucs.length > 0 && (
                        <>
                            <h3 className="text-md font-semibold">Loại trang sức: </h3>
                            <p className="flex flex-wrap gap-2">
                                {loaiTrangSucsChosen &&
                                    loaiTrangSucsChosen.map((item) => (
                                        <span
                                            key={item.id}
                                            className="py-1 px-2 rounded-lg bg-primary text-white"
                                        >
                                            {item.loaiTrangSuc}
                                        </span>
                                    ))}
                            </p>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
