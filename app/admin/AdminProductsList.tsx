import { toast } from '@/components/ui/use-toast';
import { deleteProduct } from '../api/deleteProduct';
import getAllProducts from '../api/getAllProducts';
import AdminProductCard from './AdminProductCard';
import getProductByFilters from '../api/getProductByFilters';

type Props = {
    search: string;
    page: number;
    perPage: number;
};
export default async function AdminProductsList({ search, page, perPage }: Props) {
    const res = await getProductByFilters(
        { SearchKey: search },
        { PageIndex: page, PageSize: perPage }
    );
    if (!res.result) {
        throw new Error(res.errorMessage);
    }

    const products = res.dataResult.data;
    const handleDeleteClick = async (productId: string) => {
        'use server';
        try {
            const res = await deleteProduct(productId);
            toast({ variant: 'success', title: 'Xóa thành công' });
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Xóa thất bại', description: error.message });
            console.error(error);
        }
    };
    if (!products) {
        return;
    }

    return (
        <section>
            <ul className="w-screen lg:w-[1200px] px-6 mx-auto products-list">
                {products.map((product: SanPham) => (
                    <li key={product.id}>
                        <AdminProductCard product={product} handleDeleteClick={handleDeleteClick} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
