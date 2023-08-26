'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch() {
    const [term, setTerm] = useState('');
    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };
    const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(term);
    };
    return (
        <form onSubmit={searchSubmit} className="header__search hidden lg:block">
            <input
                type="text"
                placeholder="Tìm kiếm"
                className=" rounded-full border pl-3 pr-[36px] py-2 text-sm w-full header__search-input"
                value={term}
                onChange={onSearchInputChange}
            />
            <button type="submit" className="header__search-icon">
                <FiSearch />
            </button>
        </form>
    );
}
