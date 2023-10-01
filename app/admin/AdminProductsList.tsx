import { toast } from '@/components/ui/use-toast';
import { deleteProduct } from '../api/deleteProduct';
import getAllProducts from '../api/getAllProducts';
import AdminProductCard from './AdminProductCard';
import { useRouter } from 'next/navigation';
export default async function AdminProductsList() {
    const router = useRouter();
    const res = await getAllProducts();
    if (!res.result) {
        throw new Error(res.errorMessage);
    }

    const products = res.dataResult;
    const handleDeleteClick = async (productId: string) => {
        'use server';
        try {
            const res = await deleteProduct(productId);
            toast({ variant: 'success', title: 'Xóa thành công' });
            router.refresh();
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
