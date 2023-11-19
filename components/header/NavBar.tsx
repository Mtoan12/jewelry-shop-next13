'use client';

import * as React from 'react';
import Link from 'next/link';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
export default function NavBar() {
    return (
        <div className="w-screen bg-primaryColor min-h-[36px]">
            <NavigationMenu className="container">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="header__navbar-title">
                            Nhẫn
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col gap-2 py-2">
                            <Link
                                href="/danh-muc/nhan-nam"
                                className="header__navbar-title"
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink className={'header__sub-nav'}>
                                    Nhẫn nam
                                </NavigationMenuLink>
                            </Link>
                            <Link
                                href="/danh-muc/nhan-nu"
                                className="header__navbar-title"
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink className={'header__sub-nav'}>
                                    Nhẫn nữ
                                </NavigationMenuLink>
                            </Link>
                            <Link
                                href="/danh-muc/nhan-doi-nam-nu"
                                className="header__navbar-title"
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink className={'header__sub-nav'}>
                                    Nhẫn đôi nam - nữ
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link
                            href="/danh-muc/vong-tay"
                            className="header__navbar-title"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={` ${navigationMenuTriggerStyle()} header__navbar-title`}
                            >
                                Vòng tay
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href="/danh-muc/lac-tay"
                            className="header__navbar-title"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={` ${navigationMenuTriggerStyle()} header__navbar-title`}
                            >
                                Lắc tay
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href="/danh-muc/bong-tai"
                            className="header__navbar-title"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={` ${navigationMenuTriggerStyle()} header__navbar-title`}
                            >
                                Bông tai
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href="/danh-muc/mat-day"
                            className="header__navbar-title"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={` ${navigationMenuTriggerStyle()} header__navbar-title`}
                            >
                                Mặt dây
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href="/danh-muc/hat-charm"
                            className="header__navbar-title"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={` ${navigationMenuTriggerStyle()} header__navbar-title`}
                            >
                                Hạt charm
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href="/lien-he"
                            className="header__navbar-title"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={` ${navigationMenuTriggerStyle()} header__navbar-title`}
                            >
                                Liên hệ
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
