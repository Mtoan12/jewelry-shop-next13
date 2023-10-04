import ProductsList from '@/components/ProductsList';
import getAllProducts from '@/app/api/getAllProducts';
import AdminProductsList from '../../AdminProductsList';

type Props = {
    search: string;
    page: number;
    perPage: number;
};
export default async function AdminProducts(props: Props) {
    return <AdminProductsList {...props} />;
}
