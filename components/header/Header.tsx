import HeaderBody from './HeaderBody';
import HeaderContact from './HeaderContact';
import NavBar from './NavBar';
import './header.scss';

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
