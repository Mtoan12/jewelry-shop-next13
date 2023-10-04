'use client';
import { Input } from '@/components/ui/input';
import debounce from '@/lib/debounce';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const setSearchParam = (search: string) => {
        router.push(`/admin/products?search=${search}`);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);

        const funcDebounce = debounce(setSearchParam, 50);
        funcDebounce(e.target.value);
    };

    return (
        <>
            <Input
                className="w-full pl-10"
                placeholder="Tìm kiếm"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-300" />
        </>
    );
}
