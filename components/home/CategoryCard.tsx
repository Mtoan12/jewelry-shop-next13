import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    icoUrl: string;
    href?: string | null;
    title: string;
    className?: string;
};
export default function CategoryCard({
    icoUrl,
    title,
    href = null,
    className = 'text-primaryColor',
}: Props) {
    if (href !== null) {
        return (
            <Link
                href={href}
                passHref
                className={cn(
                    'flex flex-col h-[172px] max-w-[172px] justify-center items-center gap-7 border rounded-md shadow-sm hover:shadow-lg transition-all duration-300 text-primaryColor',
                    className
                )}
            >
                <div className="h-[64px] overflow-hidden">
                    <Image
                        className="w-full object-contain"
                        src={icoUrl}
                        alt="ring"
                        width={60}
                        height={60}
                    />
                </div>
                <h3 className="text-md text-center">{title}</h3>
            </Link>
        );
    } else {
        return (
            <button
                className={`flex flex-col h-[172px] w-full max-w-[172px] justify-center items-center gap-7 border rounded-md shadow-sm hover:shadow-lg transition-all duration-300  ${className}`}
            >
                <div className="h-[64px] overflow-hidden">
                    <Image
                        className="w-full object-contain"
                        src={icoUrl}
                        alt="ring"
                        width={60}
                        height={60}
                    />
                </div>
                <h3 className="text-md text-center">{title}</h3>
            </button>
        );
    }
}
