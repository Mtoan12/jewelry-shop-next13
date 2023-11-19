'use client';
import { useState } from 'react';
import CategoryCard from './CategoryCard';

export default function HomeCategories() {
    const [showRing, setShowRing] = useState(false);

    const handleCategoryClick = (showRingValue: boolean) => {
        setShowRing(showRingValue);
    };

    if (showRing) {
        return (
            <ul key="ring" className="category-card-list mx-auto transition-all duration-300 ">
                <li onClick={() => handleCategoryClick(false)}>
                    <CategoryCard
                        icoUrl="/category/back-button.png"
                        title="Trở lại"
                        className="text-gray-300"
                    />
                </li>
                <li>
                    <CategoryCard
                        href="/danh-muc/nhan-nam"
                        icoUrl="/category/ring1.png"
                        title="Nhẫn nam"
                    />
                </li>
                <li>
                    <CategoryCard
                        href="/danh-muc/nhan-nu"
                        icoUrl="/category/ring2.png"
                        title="Nhẫn nữ"
                    />
                </li>
                <li>
                    <CategoryCard
                        href="/danh-muc/nhan-doi-nam-nu"
                        icoUrl="/category/ring3.png"
                        title="Nhẫn đôi nam - nữ"
                    />
                </li>
            </ul>
        );
    }
    return (
        <ul key="default" className="category-card-list mx-auto transition-all duration-300">
            <li onClick={() => handleCategoryClick(true)}>
                <CategoryCard icoUrl="/category/ring3.png" title="Nhẫn" />
            </li>
            <li>
                <CategoryCard
                    href="/danh-muc/vong-tay"
                    icoUrl="/category/bracelet.png"
                    title="Vòng tay"
                />
            </li>
            <li>
                <CategoryCard
                    href="/danh-muc/lac-tay"
                    icoUrl="/category/pendant.png"
                    title="Lắc tay"
                />
            </li>
            <li>
                <CategoryCard
                    href="/danh-muc/bong-tai"
                    icoUrl="/category/earrings.png"
                    title="Bông tai"
                />
            </li>
            <li>
                <CategoryCard
                    href="/danh-muc/mat-day"
                    icoUrl="/category/necklace.png"
                    title="Mặt dây"
                />
            </li>
            <li>
                <CategoryCard
                    href="/danh-muc/hat-charm"
                    icoUrl="/category/charm.png"
                    title="Hạt charm"
                />
            </li>
            <li>
                <CategoryCard
                    href="/tat-ca-san-pham"
                    icoUrl="/category/all-cate.png"
                    title="Tất cả"
                />
            </li>
        </ul>
    );
}
