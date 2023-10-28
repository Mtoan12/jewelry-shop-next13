import getProductById from '@/app/api/getProductById';
import Image from 'next/image';

type Props = {
    id: string;
};
export default async function ProductDetail({ id }: Props) {
    const data = await getProductById(id);

    if (!data.result) {
        console.error(data.errorMessage);
        throw new Error('Có lỗi xảy ra');
    }

    const product = data.dataResult;
    return (
        <main className="container mx-auto py-12">
            <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 ">
                <div className="overflow-hidden">
                    <Image
                        src={product.imgUrl}
                        alt={product.tenSanPham}
                        height={420}
                        width={420}
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-5 w-full lg:max-w-[320px]">
                    <h2 className="text-3xl font-bold text-primaryColor leading-8">
                        {product.tenSanPham}
                    </h2>
                    <div className="">
                        <div className="grid grid-cols-2 py-3 text-sm border-b-[1px]">
                            <h3 className="font-semibold">Loại trang sức:</h3>
                            <span className="text-primaryColor">{product.loaiTrangSuc}</span>
                        </div>
                        <div className="grid grid-cols-2 py-3 text-sm border-b-[1px]">
                            <h3 className="font-semibold">Chất liệu:</h3>
                            <span className="text-primaryColor">{product.chatLieu}</span>
                        </div>
                        <div className="grid grid-cols-2 py-3 text-sm border-b-[1px]">
                            <h3 className="font-semibold">Trọng lượng:</h3>
                            <span className="text-primaryColor">{product.trongLuongSanPham}</span>
                        </div>
                    </div>
                    <button className=" bg-gradient-to-b from-[#fd6e1d] to-[#f59000] text-white text-lg font-bold px-2 py-3">
                        Liên hệ
                    </button>
                </div>
            </section>
            <section className="flex flex-col gap-3 mt-5">
                <h2 className="bg-[#c1932c] text-lg font-bold leading-5 p-3 w-fit text-white ">
                    Mô tả
                </h2>
                <h3 className="text-3xl font-bold text-primaryColor leading-8">
                    {product.tenSanPham}
                </h3>
                <p>{product.moTa}</p>
            </section>
        </main>
    );
}
