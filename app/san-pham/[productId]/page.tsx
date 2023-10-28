import { Suspense } from 'react';
import ProductDetail from './ProductDetail';

export default function page({ params }: { params: { productId: string } }) {
    const { productId } = params;
    return (
        <Suspense fallback="Đang tải">
            <ProductDetail id={productId} />
        </Suspense>
    );
}
