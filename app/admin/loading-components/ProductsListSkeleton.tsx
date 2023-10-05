import ProductCardSkeleton from './ProductCardSkeleton';

export default async function ProductsListSkeleton({ size }: { size: number }) {
    const products = new Array(size);
    products.fill(0);

    return (
        <section>
            <ul className="w-screen lg:w-[1200px] px-6 mx-auto products-list">
                {products.map((product: number, index: number) => (
                    <li key={index}>
                        <ProductCardSkeleton />
                    </li>
                ))}
            </ul>
        </section>
    );
}
