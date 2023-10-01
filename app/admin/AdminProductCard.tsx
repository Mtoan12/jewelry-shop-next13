'use client';
import { Button } from '@/components/ui/button';
import DialogCustomize from '@/components/DialogCustomize';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
    product: SanPham;
    handleDeleteClick(productId: string): void;
};
export default function AdminProductCard({ product, handleDeleteClick }: Props) {
    const [open, setOpen] = useState(false);
    if (!product) {
        return;
    }

    const TrashComponent = (
        <Trash2 className="absolute bottom-2 right-2 text-red-700 cursor-pointer hover:scale-110 transition-all" />
    );

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
            <DialogCustomize
                open={open}
                setOpen={setOpen}
                TriggerComponent={TrashComponent}
                HeaderTitle={<h2>Bạn có chắn chắn muốn xóa? </h2>}
                HeaderDescription={<span>id: {product.id}</span>}
                ContentComponent={
                    <ul>
                        <li>Tên: {product.tenSanPham}</li>
                        <li>Loại sản phẩm: {product.loaiTrangSuc}</li>
                        <li>Chất liệu: {product.chatLieu}</li>
                        <li>Trọng lượng: {product.trongLuongSanPham}</li>
                    </ul>
                }
                FooterComponent={
                    <Button
                        variant={'destructive'}
                        onClick={() => {
                            handleDeleteClick(product.id);
                            setOpen(false);
                        }}
                    >
                        Xóa
                    </Button>
                }
            />
        </article>
    );
}
