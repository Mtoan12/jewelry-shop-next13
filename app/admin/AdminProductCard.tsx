'use client';
import { useToast } from '@/components/ui/use-toast';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { deleteProduct } from '../api/deleteProduct';

type Props = {
    product: SanPham;
};
export default function AdminProductCard({ product }: Props) {
    const { toast } = useToast();

    if (!product) {
        return;
    }

    const onDeleteClick = async (productId: string) => {
        try {
            const res = await deleteProduct(productId);
            toast({ variant: 'success', title: 'Xóa thành công' });
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Xóa thất bại', description: error.message });
            console.error(error);
        }
    };
    return (
        <article className="relative max-w-full overflow-hidden flex flex-col h-[320px] justify-center items-center gap-2 text-primaryColor shadow-lg rounded-lg ">
            <Image
                src={product.imgUrl}
                alt={product.tenSanPham}
                width={100}
                height={100}
                className="w-full object-contain h-[180px] card__image"
            />

            <h2 className="text-md font-medium">{product.tenSanPham}</h2>
            <span>
                {product.loaiTrangSuc} - {product.chatLieu}
            </span>
            <span className="text-rose-700">{product.trongLuongSanPham}</span>
            <Trash2
                className="absolute bottom-2 right-2 text-red-700 cursor-pointer hover:scale-110 transition-all"
                onClick={() => onDeleteClick(product.id)}
            />
        </article>
    );
}
