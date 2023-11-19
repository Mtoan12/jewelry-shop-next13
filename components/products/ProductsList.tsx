import ProductCard from './ProductCard';
import './product.scss';

type Props = {
    products: any[];
};
export default function ProductsList({ products }: Props) {
    return (
        <section className="px-2 py-3">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10">
                {products.length > 0 &&
                    products.map((product) => (
                        <li key={product.id} className="max-w-[240px]">
                            <ProductCard
                                id={product.id}
                                imgUrl={product.imgUrl}
                                tenSanPham={product.tenSanPham}
                                trongLuongSanPham={product.trongLuongSanPham}
                                loaiTrangSuc={product.loaiTrangSuc}
                                chatLieu={product.chatLieu}
                            />
                        </li>
                    ))}
            </ul>
        </section>
    );
}
