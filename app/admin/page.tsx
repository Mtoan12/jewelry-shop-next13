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
export default function Admin() {
    const [imageSource, setImageSource] = useState<File | null>(null);
    const [category, setCategory] = useState('0');
    const [material, setMaterial] = useState('0');
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        reset,
    } = useForm();

    const onSubmit = async (data: any) => {
        const { image, name, weight, description } = data;
        const formData = new FormData();
        formData.append('Img', image[0]);
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
        } catch (error: any) {
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
        <form onSubmit={handleSubmit(onSubmit)} className="p-20 flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold">Thêm sản phẩm</h2>
            <div>
                <label htmlFor="" className="text-xl font-semibold mb-2">
                    Ảnh:
                </label>
                {imageSource && (
                    <Image src={URL.createObjectURL(imageSource)} alt="" width={500} height={500} />
                )}
                <Input {...register('image')} type="file" onChange={onImageChange} />
            </div>
            <div>
                <label htmlFor="" className="text-xl font-semibold mb-2">
                    Tên sản phẩm
                </label>
                <Input {...register('name')} placeholder="Nhập tên sản phẩm" />
            </div>
            <div>
                <label htmlFor="" className="text-xl font-semibold mb-2">
                    Trọng lượng
                </label>
                <Input
                    {...register('weight')}
                    type="number"
                    placeholder="Nhập trọng lượng sản phẩm (Chỉ)"
                />
            </div>
            <div>
                <label htmlFor="" className="text-xl font-semibold mb-2">
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

            <Button type="submit" disabled={isSubmitting}>
                Xác nhận
            </Button>
        </form>
    );
}
