'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';

type Props = {
    totalPages: number;
};
const Pagination = ({ totalPages }: Props) => {
    const searchParams = useSearchParams();
    const page = searchParams.get('trang') || 1;
    const handlePageClick = (event: { selected: number }) => {};
    return (
        <ReactPaginate
            className="flex gap-6 text-primaryColor  "
            breakLabel="..."
            nextLabel={
                <ChevronRight className="hover:bg-primaryColor hover:text-white transition-all rounded-md" />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={+totalPages}
            previousLabel={
                <ChevronLeft className="hover:bg-primaryColor hover:text-white transition-all rounded-md" />
            }
            renderOnZeroPageCount={null}
        />
    );
};
export default Pagination;
