type Props = {
    products: SanPham[];
};
export default function ProductsList({ products }: Props) {
    return (
        <section>
            <h1 className="text-2xl font-bold">Danh sách sản phẩm:</h1>
            {<ul>{JSON.stringify(products)}</ul>}
        </section>
    );
}
