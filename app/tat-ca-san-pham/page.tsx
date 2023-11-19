import { Suspense } from 'react';
import getProductByFilters from '../api/getProductByFilters';
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton';
import ProductsList from '@/components/products/ProductsList';

type Props = {
    searchParams?: { [key: string]: string | undefined };
};

const AllProductsPage = async ({ searchParams }: Props) => {
    const searchKey = searchParams?.q ?? '';
    const filter = {
        SearchKey: searchKey,
    };
    const pagination: Pagination = {
        PageIndex: 0,
        PageSize: 12,
    };
    const res = await getProductByFilters(filter, pagination);

    if (!res.result) {
        return;
    }

    const products = res.dataResult.data;
    return (
        <main className="container pt-12 pb-24">
            <h1 className="text-center font-bold text-4xl mb-10">Tất cả sản phẩm</h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <ProductsList products={products} />
            </Suspense>
        </main>
    );
};
export default AllProductsPage;
