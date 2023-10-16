import { toast } from '@/components/ui/use-toast';
import { deleteProduct } from '../api/deleteProduct';
import getAllProducts from '../api/getAllProducts';
import AdminProductCard from './AdminProductCard';
import getProductByFilters from '../api/getProductByFilters';

type Props = {
    filters: string;
    page: number;
    perPage: number;
};
export default async function AdminProductsList({ filters, page, perPage }: Props) {
    const res = await getProductByFilters(filters, { PageIndex: page, PageSize: perPage });
    if (!res.result) {
        throw new Error(res.errorMessage);
    }

    const products = res.dataResult.data;
    if (!products) {
        return;
    }

    console.log(products);

    return (
        <section>
            <ul className="w-screen lg:w-[1200px] px-6 mx-auto products-list">
                {products.map((product: SanPham) => (
                    <li key={product.id}>
                        <AdminProductCard product={product} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
