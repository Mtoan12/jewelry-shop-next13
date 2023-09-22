import getAllProducts from '../api/getAllProducts';
import AdminProductCard from './AdminProductCard';
import adminProductCard from './AdminProductCard';
export default async function AdminProductsList() {
    const res = await getAllProducts();
    if (!res.result) {
        throw new Error(res.errorMessage);
    }

    const products = res.dataResult;
    if (!products) {
        return;
    }

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
