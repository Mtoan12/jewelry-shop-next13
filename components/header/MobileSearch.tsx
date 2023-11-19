'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function MobileSearch() {
    const searchParams = useSearchParams();
    const search = searchParams.get('q');
    const [term, setTerm] = useState(search ?? '');
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const searchSubmit = () => {
        setOpen(false);
        router.push(`/tat-ca-san-pham?q=${term}`);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchSubmit();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="lg:hidden header__mobile-search-icon">
                    <FiSearch size={25} />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="header__search mt-5 lg:hidden">
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
            </DialogContent>
        </Dialog>
    );
}
