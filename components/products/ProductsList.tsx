import ProductCard from './ProductCard';
import './product.scss';

type Props = {
    products: any[];
};
export default function ProductsList({ products }: Props) {
    return (
        <section>
            <ul className="products-list">
                {products.length > 0 &&
                    products.map((product) => (
                        <li key={product.id} className="max-w-[200px]">
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
