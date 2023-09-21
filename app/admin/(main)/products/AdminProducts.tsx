import ProductsList from '@/components/ProductsList';
import getAllProducts from '@/app/api/getAllProducts';
export default async function AdminProducts() {
    const products = await getAllProducts();
    return <ProductsList products={products} />;
}
