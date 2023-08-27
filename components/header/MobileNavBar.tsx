'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillFacebook, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FiMenu, FiPhone } from 'react-icons/fi';
import { SiZalo } from 'react-icons/si';
import TooltipCustomize from '../TooltipCustomize';

type Nav = 'default' | 'ring' | 'bracelet';
export default function MobileNavBar() {
    const [navType, setNavType] = useState<Nav>('default');
    const DefaultNav = () => (
        <SheetContent side={'left'}>
            <ul className="flex flex-col mt-5 cursor-pointer">
                <li
                    className="header__mobile-nav-title flex justify-between items-center"
                    onClick={(e) => setNavType('ring')}
                >
                    <span>Nhẫn</span>
                    <AiOutlineRight />
                </li>
                <li
                    className="header__mobile-nav-title flex justify-between items-center"
                    onClick={(e) => setNavType('bracelet')}
                >
                    <span>Vòng tay</span>
                    <AiOutlineRight />
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Bông tai</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Mặt dây</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Hạt charm</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Liên hệ</Link>
                </li>
            </ul>
            <ul className="flex items-center justify-center mt-5 gap-5 lg:hidden">
                <TooltipCustomize content="Follow Facebook: Tiệm Vàng Kim Cúc LX">
                    <li>
                        <a
                            className="facebook-icon"
                            href="https://www.facebook.com/profile.php?id=100054235431878"
                            target="_blank"
                        >
                            <AiFillFacebook size={36} />
                        </a>
                    </li>
                </TooltipCustomize>
                <TooltipCustomize content="Liên hệ Zalo: Mai Ngoc Man">
                    <li>
                        <a className="zalo-icon" href="https://zalo.me/0972456292" target="_blank">
                            <SiZalo size={36} />
                        </a>
                    </li>
                </TooltipCustomize>
                <TooltipCustomize content="Liên hệ Hotline: 097 245 62 92">
                    <li>
                        <a className="phone-icon" href="tel:0972456292" target="_blank">
                            <FiPhone size={36} />
                        </a>
                    </li>
                </TooltipCustomize>
            </ul>
        </SheetContent>
    );
    const RingNav = () => (
        <SheetContent side={'left'}>
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
                    <Link href="/" className="block w-full">
                        Nhẫn nam
                    </Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/" className="block w-full">
                        Nhẫn nữ
                    </Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/" className="block w-full">
                        Nhẫn cặp
                    </Link>
                </li>
            </ul>
        </SheetContent>
    );
    const BraceletNav = () => (
        <SheetContent side={'left'}>
            <SheetHeader>
                <SheetTitle>
                    <button
                        className="flex gap-2 items-center"
                        onClick={(e) => setNavType('default')}
                    >
                        <AiOutlineLeft />
                        <span>Vòng tay</span>
                    </button>
                </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col mt-5">
                <li className="header__mobile-nav-title">
                    <Link href="/">Lắc tay vàng - bạc</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Vòng tay đá</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Vòng tay đôi</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Vòng tay mix charm</Link>
                </li>
                <li className="header__mobile-nav-title">
                    <Link href="/">Vòng tay nguyên khối</Link>
                </li>
            </ul>
        </SheetContent>
    );
    const contentType = {
        default: DefaultNav,
        ring: RingNav,
        bracelet: BraceletNav,
    };

    const Content = contentType[navType];
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden bg-primaryColor rounded-full p-2">
                <FiMenu size={23} className={'text-white '} />
            </SheetTrigger>
            <Content />
        </Sheet>
    );
}
