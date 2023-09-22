import Image from 'next/image';

type Props = {
    product: SanPham;
};
export default function AdminProductCard({ product }: Props) {
    if (!product) {
        return;
    }
    return (
        <article className="max-w-full overflow-hidden flex flex-col h-[320px] justify-center items-center gap-2 text-primaryColor shadow-lg rounded-lg ">
            <Image
                src={product.imgUrl}
                alt={product.tenSanPham}
                width={100}
                height={100}
                className="w-full object-contain h-[180px]"
            />

            <h2 className="text-md font-medium">{product.tenSanPham}</h2>
            <span>
                {product.loaiTrangSuc} - {product.chatLieu}
            </span>
            <span className="text-rose-700">{product.trongLuongSanPham}</span>
        </article>
    );
}
