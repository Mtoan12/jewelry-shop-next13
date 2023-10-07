import Banner from '@/components/home/Banner';
import HomeCategories from '@/components/home/HomeCategories';
import TitleProvider from '@/components/home/TitleProvider';
import { Suspense } from 'react';
import HomePreviewSection from './HomePreviewSection';
import ProductCardSkeleton from './admin/loading-components/ProductCardSkeleton';
import getProductsByCategory from './api/getProductsByCategory';
import './home.scss';

export default async function Home() {
    const numberOfCate = 5;
    const contents: Array<Promise<ProductsApi>> = [];
    for (let i = 1; i <= numberOfCate; i++) {
        const products = getProductsByCategory(i, 6);

        contents.push(products);
    }

    return (
        <main className="pb-10">
            <Banner />
            <article className="flex flex-col gap-12 mt-10">
                <TitleProvider title="Danh mục sản phẩm">
                    <HomeCategories />
                </TitleProvider>
                <Suspense fallback={<ProductCardSkeleton />}>
                    <HomePreviewSection title="Nhẫn nam" products={contents[0]} />
                </Suspense>
                <Suspense fallback={<ProductCardSkeleton />}>
                    <HomePreviewSection title="Nhẫn nũe" products={contents[1]} />
                </Suspense>
                <Suspense fallback={<ProductCardSkeleton />}>
                    <HomePreviewSection title="Nhẫn đôi" products={contents[2]} />
                </Suspense>
                <Suspense fallback={<ProductCardSkeleton />}>
                    <HomePreviewSection title="Vòng tay" products={contents[3]} />
                </Suspense>
                <Suspense fallback={<ProductCardSkeleton />}>
                    <HomePreviewSection title="Lắc tai" products={contents[4]} />
                </Suspense>
            </article>
        </main>
    );
}
