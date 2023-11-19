'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch() {
    const searchParams = useSearchParams();
    const search = searchParams.get('q');
    const [term, setTerm] = useState(search ?? '');
    const router = useRouter();

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const searchSubmit = () => {
        router.push(`/tat-ca-san-pham?q=${term}`);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchSubmit();
        }
    };
    return (
        <div className="header__search hidden lg:block">
            <input
                type="text"
                placeholder="Tìm kiếm"
                className=" rounded-full border pl-3 pr-[36px] py-2 text-sm w-full header__search-input"
                value={term}
                onChange={onSearchInputChange}
                onKeyDown={handleKeyDown}
            />
            <button type="submit" className="header__search-icon" onClick={searchSubmit}>
                <FiSearch />
            </button>
        </div>
    );
}
