import ProductsList from '@/components/products/ProductsList';
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton';
import { Suspense } from 'react';
import getProductsByCategory from '../api/getProductsByCategory';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nhẫn nam - Tiệm vàng Kim Cúc',
    description:
        'Nhẫn Nam - Biểu Tượng Phong Cách và Đẳng Cấp.\r\n\r\nKhám phá bộ sưu tập nhẫn nam tại tiệm vàng Kim Cúc, nơi sự tinh tế và sang trọng hòa quyện. Những chiếc nhẫn được chế tác từ kim loại quý như vàng và bạc, đem đến sự lựa chọn hoàn hảo cho phong cách cá nhân của bạn.\r\n\r\nVới thiết kế hiện đại và đường nét tinh xảo, những chiếc nhẫn nam của chúng tôi không chỉ là trang sức, mà còn là biểu tượng của sự đẳng cấp. Từ nhẫn đơn giản đến mẫu đính đá tinh tế, mỗi chiếc nhẫn là một câu chuyện về phong cách riêng của người đeo. Khám phá ngay để tìm kiếm sự hoàn hảo cho phong cách nam tính và độc đáo của bạn.',
};
const NhanNamPage = async () => {
    const res = await getProductsByCategory(1, 0, 12);
    if (!res.result) {
        return;
    }

    const products = res.dataResult.data;
    return (
        <main className="container pt-12 pb-24">
            <h1 className="text-center font-bold text-4xl mb-10">Nhẫn nam</h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <ProductsList products={products} />
            </Suspense>
        </main>
    );
};
export default NhanNamPage;
