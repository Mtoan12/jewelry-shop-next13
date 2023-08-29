import Banner from '@/components/home/Banner';
import TitleProvider from '@/components/home/TitleProvider';
import './home.scss';
import HomeCategories from '@/components/home/HomeCategories';

export default async function Home() {
    return (
        <main>
            <Banner />
            <div className="mt-10">
                <TitleProvider title="Danh mục sản phẩm">
                    <HomeCategories />
                </TitleProvider>
            </div>
        </main>
    );
}
