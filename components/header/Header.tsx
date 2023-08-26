import Image from 'next/image';
import './header.scss';
import HeaderContact from './HeaderContact';
import { AiFillFacebook } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import { FiPhone, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import TooltipCustomize from '../TooltipCustomize';
import HeaderBody from './HeaderBody';
import NavBar from './NavBar';
export default function Header() {
    return (
        <header className="w-full mt-2">
            <div className="hidden lg:block">
                <HeaderContact />
            </div>
            <div>
                <HeaderBody />
            </div>
            <div className="hidden lg:block">
                <NavBar />
            </div>
        </header>
    );
}
