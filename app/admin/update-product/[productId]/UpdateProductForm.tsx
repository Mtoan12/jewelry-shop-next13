'use client';

import Button from '@/components/Button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';

import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import getProductByFilters from '@/app/api/getProductByFilters';
import getProductById from '@/app/api/getProductById';

type Props = {
    product: SanPham | null;
};
export default function UpdateProductForm({ product }: Props) {
    const [imageSource, setImageSource] = useState<File | null>(null);
    const [preImage, setPreImage] = useState(product?.imgUrl);
    const [category, setCategory] = useState('0');
    const [material, setMaterial] = useState('0');
    // const [category, setCategory] = useState(product?.loaiTrangSuc);
    // const [material, setMaterial] = useState(product?.chatLieu);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        reset,
    } = useForm();

    useEffect(() => {
        if (product) {
            setValue('name', product.tenSanPham);
            setValue('weight', product.trongLuongSanPham);
            setValue('description', product.moTa);
        }
    }, [product, setValue]);

    const { toast } = useToast();
    const onSubmit = async (data: any) => {
        const { image, name, weight, description } = data;
        const formData = new FormData();
        if (image && image[0]) {
            const fileName = image[0].name;
            const ext = path.parse(fileName).ext;
            const newName = uuidv4() + ext;

            const newFile = new File([image[0]], newName);
            formData.append('Img', newFile);
        }
        formData.append('TenSanPham', name);
        formData.append('TrongLuongSanPham', weight);
        formData.append('MoTa', description);
        formData.append('LoaiTrangSucId', category);
        formData.append('ChatLieuId', material);
        try {
            const res = await fetch(
                'https://webtiemvangkimcucser.azurewebsites.net//api/SanPham/ThemSanPham',
                {
                    method: 'POST',
                    body: formData,
                }
            );
            toast({ variant: 'success', title: 'Thêm thành công' });
        } catch (error: any) {
            toast({ variant: 'destructive', title: error.message });
            reset();
            throw new Error(error);
        }
        setImageSource(null);
        reset();
    };
    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        setImageSource(e.target.files[0]);
    };
    return (
        <>
            <button className="m-12 px-2 py-1 border rounded-md">
                <Link href="/admin/products">
                    <ArrowLeft />
                </Link>
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="px-20 pb-20 flex flex-col gap-y-4">
                <h2 className="text-2xl font-bold">Thêm sản phẩm</h2>
                <div>
                    <label htmlFor="image" className="text-xl font-semibold mb-2">
                        Ảnh:
                    </label>
                    {imageSource && (
                        <Image
                            src={URL.createObjectURL(imageSource)}
                            alt=""
                            width={500}
                            height={500}
                        />
                    )}
                    <Input {...register('image')} type="file" onChange={onImageChange} />
                </div>
                <div>
                    <label htmlFor="name" className="text-xl font-semibold mb-2">
                        Tên sản phẩm
                    </label>
                    <Input {...register('name')} placeholder="Nhập tên sản phẩm" />
                </div>
                <div>
                    <label htmlFor="weight" className="text-xl font-semibold mb-2">
                        Trọng lượng
                    </label>
                    <Input {...register('weight')} placeholder="Nhập trọng lượng sản phẩm" />
                </div>
                <div>
                    <label htmlFor="description" className="text-xl font-semibold mb-2">
                        Mô tả
                    </label>
                    <Textarea {...register('description')} placeholder="Nhập Mô tả sản phẩm" />
                </div>
                <div>
                    <label htmlFor="" className="text-xl font-semibold mb-2">
                        Loại trang sức
                    </label>
                    <Select onValueChange={(data) => setCategory(data)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Chọn loại trang sức" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Nhẫn nam</SelectItem>
                            <SelectItem value="2">Nhẫn nữ</SelectItem>
                            <SelectItem value="3">Nhẫn đôi</SelectItem>
                            <SelectItem value="4">Vòng tay</SelectItem>
                            <SelectItem value="5">Lắc tay</SelectItem>
                            <SelectItem value="6">Bông tai</SelectItem>
                            <SelectItem value="7">Mặt dây</SelectItem>
                            <SelectItem value="8">Hạt charm</SelectItem>
                            <SelectItem value="9">Dây chuyền</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="" className="text-xl font-semibold mb-2">
                        Chất liệu
                    </label>
                    <Select onValueChange={(data) => setMaterial(data)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Chọn chất liệu" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Vàng 10k</SelectItem>
                            <SelectItem value="2">Vàng 18k</SelectItem>
                            <SelectItem value="3">Vàng 23k</SelectItem>
                            <SelectItem value="4">Vàng 24k</SelectItem>
                            <SelectItem value="5">Vàng 610</SelectItem>
                            <SelectItem value="6">Vàng 710</SelectItem>
                            <SelectItem value="7">Bạc</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center items-center "
                >
                    {isSubmitting ? <ReactLoading type="bubbles" color="white" /> : 'Xác nhận'}
                </Button>
            </form>
        </>
    );
}
