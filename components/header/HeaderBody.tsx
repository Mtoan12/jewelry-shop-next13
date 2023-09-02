import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook } from 'react-icons/ai';
import { FiPhone, FiSearch } from 'react-icons/fi';
import { SiZalo } from 'react-icons/si';
import TooltipCustomize from '../TooltipCustomize';
import './header.scss';
import HeaderSearch from './HeaderSearch';
import MobileSearch from './MobileSearch';
import MobileNavBar from './MobileNavBar';

export default function HeaderBody() {
    return (
        <div className="flex justify-around items-center my-1 text-md">
            <MobileNavBar />
            <Link href={'/'} className="header__logo">
                <Image src="/logo.png" alt="logo" width={100} height={100} className="w-full " />
            </Link>
            <HeaderSearch />

            <ul className="hidden lg:flex items-center text-primaryColor gap-3">
                <TooltipCustomize content="Follow Facebook: Tiệm Vàng Kim Cúc LX">
                    <li className="header__follow-icon">
                        <a
                            className="facebook-icon"
                            href="https://www.facebook.com/profile.php?id=100054235431878"
                            target="_blank"
                        >
                            <AiFillFacebook size={20} />
                        </a>
                    </li>
                </TooltipCustomize>
            <TooltipCustomize content="Liên hệ Zalo: Mai Ngoc Man">
                    <li className="header__follow-icon">
                        <a className="zalo-icon" href="https://zalo.me/0972456292" target="_blank">
                            <SiZalo size={20} />
                        </a>
                    </li>
                </TooltipCustomize>
                <TooltipCustomize content="Liên hệ Hotline: 097 245 62 92">
                    <li className="header__follow-icon">
                        <a className="phone-icon" href="tel:0972456292" target="_blank">
                            <FiPhone size={20} />
                        </a>
                    </li>
                </TooltipCustomize>
            </ul>

            <MobileSearch />
        </div>
    );
}
