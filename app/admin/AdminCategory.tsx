'use client';

import CategoryCard from '@/components/home/CategoryCard';
import { usePathname } from 'next/navigation';

export default function AdminCategory() {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="flex justify-center items-center gap-3">
                <li>
                    <CategoryCard
                        icoUrl="/category/all-cate.png"
                        title="Sản phẩm"
                        href="/admin/products"
                        className={`min-w-[172px] ${
                            pathname === '/admin/products' &&
                            'bg-primaryColor text-white shadow-lg font-bold'
                        } `}
                    />
                </li>
                <li>
                    <CategoryCard
                        icoUrl="/category/material.png"
                        title="Chất liệu"
                        href="/admin/materials"
                        className={`min-w-[172px] ${
                            pathname === '/admin/materials' &&
                            'bg-primaryColor text-white shadow-lg font-bold'
                        } `}
                    />
                </li>
            </ul>
        </nav>
    );
}
