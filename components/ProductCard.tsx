import Image from 'next/image';
import Link from 'next/link';

type Props = {
    imgUrl: string;
    tenSanPham: string;
    trongLuongSanPham: number;
};

export default function ProductCard({ imgUrl, tenSanPham, trongLuongSanPham }: Props) {
    return (
        <article className="cursor-pointer group max-w-[200px] overflow-hidden flex flex-col h-[320px] justify-center items-center gap-2 text-primaryColor shadow-lg rounded-lg ">
            <Image
                src={imgUrl}
                alt={tenSanPham}
                width={100}
                height={100}
                className="w-full object-contain h-[180px] card__image group-hover:scale-110 transition-all duration-300"
            />

            <span className="text-md font-medium">{tenSanPham}</span>
            {/* <span>
                    {loaiTrangSuc} - {chatLieu}
                </span> */}
            <span className="text-rose-700">{trongLuongSanPham}</span>
        </article>
    );
}
