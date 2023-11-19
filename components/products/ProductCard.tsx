import Image from 'next/image';
import Link from 'next/link';

type Props = {
    id: string;
    imgUrl: string;
    tenSanPham: string;
    trongLuongSanPham: number;
    loaiTrangSuc: string;
    chatLieu: string;
};

export default function ProductCard({
    id,
    imgUrl,
    tenSanPham,
    trongLuongSanPham,
    loaiTrangSuc,
    chatLieu,
}: Props) {
    return (
        <Link
            href={`/san-pham/${id}`}
            className="cursor-pointer group max-w-[240px] overflow-hidden flex flex-col h-[320px] justify-center items-center gap-2 text-primaryColor shadow-lg rounded-lg "
        >
            <Image
                src={imgUrl}
                alt={tenSanPham}
                width={100}
                height={100}
                className="w-full object-contain h-[180px] card__image group-hover:scale-110 transition-all duration-300"
            />

            <div className="px-2 py-3 w-full h-[120px] flex flex-col justify-around">
                <span className="text-md font-bold truncate text-center">{tenSanPham}</span>
                <span className="text-md font-medium truncate text-center">
                    {loaiTrangSuc} - {chatLieu}
                </span>
                <span className="text-red-700 font-medium truncate text-center">
                    {trongLuongSanPham}
                </span>
            </div>
        </Link>
    );
}
