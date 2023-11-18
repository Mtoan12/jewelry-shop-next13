import ProductsList from '@/components/products/ProductsList';
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton';
import { Suspense } from 'react';
import getProductsByCategory from '../api/getProductsByCategory';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nhẫn nữ',
    description:
        'Nhẫn Nữ - Điểm Nhấn Tinh Tế Cho Vẻ Đẹp Của Bạn\r\n\r\nKhám phá bộ sưu tập nhẫn nữ tại tiệm vàng Kim Cúc, nơi sự thanh lịch và tinh tế được thể hiện qua từng đường nét. Những chiếc nhẫn được chế tác với chất liệu kim loại quý như vàng và bạc, mang đến cho bạn những lựa chọn trang sức tinh tế và sang trọng.\r\n\r\nVới thiết kế đa dạng từ nhẫn đơn giản đến những mô hình phức tạp, bộ sưu tập nhẫn nữ của chúng tôi đều là biểu tượng của vẻ đẹp và phong cách. Mỗi chiếc nhẫn đều là một tác phẩm nghệ thuật nhỏ, thể hiện cái tôi và gu thẩm mỹ riêng của người đeo.\r\n\r\nCho dù bạn đang tìm kiếm chiếc nhẫn thanh lịch để kết hợp với bộ trang phục hàng ngày, hay chiếc nhẫn đính đá lấp lánh để tôn lên vẻ quý phái trong những dịp đặc biệt, chúng tôi tự tin rằng bạn sẽ tìm thấy điểm nhấn hoàn hảo tại đây. Khám phá ngay để làm mới bộ sưu tập trang sức của bạn.',
};
const NhanNuPage = async () => {
    const res = await getProductsByCategory(2, 0, 12);
    if (!res.result) {
        return;
    }

    const products = res.dataResult.data;
    return (
        <main className="container pt-12 pb-24">
            <h1 className="text-center font-bold text-4xl mb-10">Nhẫn nữ</h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <ProductsList products={products} />
            </Suspense>
        </main>
    );
};
export default NhanNuPage;
