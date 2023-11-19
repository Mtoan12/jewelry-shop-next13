'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillFacebook, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FiMenu, FiPhone } from 'react-icons/fi';
import { SiZalo } from 'react-icons/si';

type Nav = 'default' | 'ring';
export default function MobileNavBar() {
    const [navType, setNavType] = useState<Nav>('default');
    const DefaultNav = () => (
        <div className="fade-in">
            <ul className="flex flex-col mt-5 cursor-pointer">
                <li
                    className="header__mobile-nav-title flex justify-between items-center"
                    onClick={(e) => setNavType('ring')}
                >
                    <span>Nhẫn</span>
                    <AiOutlineRight />
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/vong-tay">Vòng tay</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/lac-tay">Lắc tay</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/bong-tai">Bông tai</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/mat-day">Mặt dây</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/hat-charm">Hạt charm</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/lien-he">Liên hệ</Link>
                </li>
            </ul>
            <ul className="flex items-center justify-center mt-5 gap-5 lg:hidden">
                <li>
                    <a
                        className="facebook-icon"
                        href="https://www.facebook.com/profile.php?id=100054235431878"
                        target="_blank"
                    >
                        <AiFillFacebook size={36} />
                    </a>
                </li>
                <li>
                    <Link className="zalo-icon" href="https://zalo.me/0972456292" target="_blank">
                        <SiZalo size={36} />
                    </Link>
                </li>
                <li>
                    <Link className="phone-icon" href="tel:0972456292" target="_blank">
                        <FiPhone size={36} />
                    </Link>
                </li>
            </ul>
        </div>
    );
    const RingNav = () => (
        <div className="fade-in">
            <SheetHeader>
                <SheetTitle>
                    <button
                        className="flex gap-2 items-center"
                        onClick={(e) => setNavType('default')}
                    >
                        <AiOutlineLeft />
                        <span>Nhẫn</span>
                    </button>
                </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col mt-5">
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/nhan-nam" className="block w-full">
                        Nhẫn nam
                    </Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/nhan-nu" className="block w-full">
                        Nhẫn nữ
                    </Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/danh-muc/nhan-doi-nam-nu" className="block w-full">
                        Nhẫn đôi nam - nữ
                    </Link>
                </li>
            </ul>
        </div>
    );

    const contentType = {
        default: DefaultNav,
        ring: RingNav,
    };

    const Content = contentType[navType];
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden bg-primaryColor rounded-full p-2">
                <FiMenu size={23} className={'text-white '} />
            </SheetTrigger>
            <SheetContent side={'left'} className="w-2/3 md:w-1/2">
                <Content />
            </SheetContent>
        </Sheet>
    );
}
