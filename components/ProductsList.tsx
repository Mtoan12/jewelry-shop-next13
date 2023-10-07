import Link from 'next/link';
import ProductCard from './ProductCard';

type Props = {
    products: any[];
};
export default function ProductsList({ products }: Props) {
    return (
        <section>
            {/* <h1 className="text-2xl font-bold">Danh sách sản phẩm:</h1> */}
            <ul className="home__products">
                {products &&
                    products.map((product) => (
                        <li key={product.id} className="max-w-[200px]">
                            <Link href={`/product/${product.id}`}>
                                <ProductCard
                                    imgUrl={product.imgUrl}
                                    tenSanPham={product.tenSanPham}
                                    trongLuongSanPham={product.trongLuongSanPham}
                                />
                            </Link>
                        </li>
                    ))}
            </ul>
        </section>
    );
}
