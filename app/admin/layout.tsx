import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import AdminCategory from './AdminCategory';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tiệm Vàng Kim Cúc - Trang sức Long Xuyên',
    description:
        'Chào mừng bạn đến với Tiệm vàng Kim Cúc Long Xuyên - nơi khám phá những tác phẩm trang sức đẹp tự nhiên, từ những viên vàng, bạc, đá quý độc đáo. Tạo điểm nhấn cho vẻ đẹp của bạn với những món trang sức tinh xảo, từ nhẫn, vòng cổ đến bộ sưu tập đá quý quý hiếm. Hãy khám phá nguồn cảm hứng từ thiên nhiên tại tiệm vàng tốt nhất Long Xuyên, An Giang - Tiệm vàng Kim Cúc. Đại chỉ: 4 Đ. Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long Xuyên, An Giang.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${font.className}`}>
                <Header />
                <section className="py-12">
                    <AdminCategory />
                </section>
                {children}
                <Footer />
                <ScrollToTop />
                <Toaster />
            </body>
        </html>
    );
}