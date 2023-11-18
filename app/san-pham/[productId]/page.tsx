import { Suspense } from 'react';
import ProductDetail from './ProductDetail';
import { Metadata, ResolvingMetadata } from 'next';
import getProductById from '@/app/api/getProductById';

type Props = {
    params: { productId: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.productId;

    const product = await getProductById(id);

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product?.dataResult.tenSanPham ?? 'Không tìm thấy sản phẩm',
        openGraph: {
            images: [product.imgUrl, ...previousImages],
        },
    };
}

export default function page({ params }: Props) {
    const { productId } = params;
    return (
        <Suspense fallback="Đang tải">
            <ProductDetail id={productId} />
        </Suspense>
    );
}
