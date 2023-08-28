import Image from 'next/image';
import Link from 'next/link';

type Props = {
    imgUrl: string;
    tenSanPham: string;
    trongLuongSanPham: number;
};

export default function ProductCard({ imgUrl, tenSanPham, trongLuongSanPham }: Props) {
    return (
        <div className="flex flex-col justify-center">
            <div className="h-[200px] rounded-md shadow-md overflow-hidden">
                <Link href={'/'}>
                    <Image
                        className="w-full object-cover hover:scale-105 transition-all duration-300"
                        src={imgUrl}
                        alt={tenSanPham}
                        width={200}
                        height={200}
                    />
                </Link>
            </div>
            <h3 className="text-primaryColor text-center">{tenSanPham}</h3>
            <span className="text-secondaryColor text-center">{trongLuongSanPham}</span>
        </div>
    );
}
