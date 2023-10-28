import getProductById from '@/app/api/getProductById';
import UpdateProductForm from './UpdateProductForm';

export default async function page({ params }: { params: { productId: string } }) {
    let product = null;
    try {
        const res = await getProductById(params.productId);

        if (res.result) {
            product = res.dataResult;
        }
    } catch (error) {
        throw error;
    }
    return <UpdateProductForm product={product} />;
}
