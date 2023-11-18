import ProductsList from '@/components/products/ProductsList';
import TitleProvider from '@/components/home/TitleProvider';

type Props = {
    title: string;
    products: Promise<ProductsApi>;
};

export default async function HomePreviewSection({ products, title }: Props) {
    const {
        dataResult: { data },
    } = await products;

    return (
        <TitleProvider title={title}>
            <ProductsList products={data} />
        </TitleProvider>
    );
}
