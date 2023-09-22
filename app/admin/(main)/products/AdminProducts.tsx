import ProductsList from '@/components/ProductsList';
import getAllProducts from '@/app/api/getAllProducts';
import AdminProductsList from '../../AdminProductsList';
export default async function AdminProducts() {
    
    return <AdminProductsList />;
}
