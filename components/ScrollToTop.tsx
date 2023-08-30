'use client';

import { BsArrowUpSquare } from 'react-icons/bs';
import TooltipCustomize from './TooltipCustomize';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <BsArrowUpSquare
            size={36}
            className={`fixed right-10 bottom-10 text-primaryColor cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-105 ${
                isVisible ? ' opacity-50' : 'opacity-0'
            }`}
            onClick={handleScrollToTop}
        />
    );
}
