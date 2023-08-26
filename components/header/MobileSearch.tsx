'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
export default function MobileSearch() {
    const [term, setTerm] = useState('');
    const [open, setOpen] = useState(false);
    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };
    const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(term);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="lg:hidden header__mobile-search-icon">
                    <FiSearch size={25} />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={searchSubmit} className="header__search mt-5 lg:hidden">
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
            </DialogContent>
        </Dialog>
    );
}
