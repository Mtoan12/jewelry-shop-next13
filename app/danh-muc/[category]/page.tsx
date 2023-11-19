import getProductsByCategory from '@/app/api/getProductsByCategory';
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton';
import Pagination from '@/components/pagination/Pagination';
import ProductsList from '@/components/products/ProductsList';
import { LOAI_TRANG_SUCS, categoryMap } from '@/constance/constance';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
    params: {
        category: string;
    };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const category = params.category;

    const categoryId = categoryMap[category as keyof typeof categoryMap];
    const categoryInfo = LOAI_TRANG_SUCS.find((item) => item.id === categoryId);

    return {
        title: `${categoryInfo?.loaiTrangSuc} - Tiệm vàng Kim Cúc`,
        description: categoryInfo?.moTa,
    };
}

const CategoryPage = async ({ params }: Props) => {
    const { category } = params;
    const categoryId = categoryMap[category as keyof typeof categoryMap];
    const categoryInfo = LOAI_TRANG_SUCS.find((item) => item.id === categoryId);

    const res = await getProductsByCategory(categoryId, 0, 12);
    if (!res.result) {
        return;
    }

    const totalPages = res.dataResult.totalPages;
    const products = res.dataResult.data;

    return (
        <main className="container pt-12 pb-24">
            <h1 className="text-center font-bold text-4xl mb-10">{categoryInfo?.loaiTrangSuc}</h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <ProductsList products={products} />
            </Suspense>
            {/* <div className="flex w-full justify-center mt-12">
                <Pagination totalPages={totalPages} />
            </div> */}
        </main>
    );
};
export default CategoryPage;
