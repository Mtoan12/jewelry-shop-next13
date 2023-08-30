import Banner from '@/components/home/Banner';
import TitleProvider from '@/components/home/TitleProvider';
import './home.scss';
import HomeCategories from '@/components/home/HomeCategories';

export default async function Home() {
    return (
        <main>
            <Banner />
            <article className="flex flex-col gap-12 mt-10">
                <TitleProvider title="Danh mục sản phẩm">
                    <HomeCategories />
                </TitleProvider>
                <TitleProvider title="Sản phẩm mới">
                    <h2>Cập nhật sau...</h2>
                </TitleProvider>
                <TitleProvider title="Nhẫn">
                    <h2>Cập nhật sau...</h2>
                </TitleProvider>
                <TitleProvider title="Lắc tay - Vòng tay">
                    <h2>Cập nhật sau...</h2>
                </TitleProvider>
                <TitleProvider title="Mặt dây">
                    <h2>Cập nhật sau...</h2>
                </TitleProvider>
                <TitleProvider title="Hạt charm">
                    <h2>Cập nhật sau...</h2>
                </TitleProvider>
            </article>
        </main>
    );
}
