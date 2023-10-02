'use client';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );
    return (
        <>
            <Input className="w-full pl-10" placeholder="Tìm kiếm" />
            <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-300" />
        </>
    );
}
