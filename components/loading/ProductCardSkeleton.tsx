import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
    return (
        <article className="relative max-w-full overflow-hidden flex flex-col h-[320px] justify-center items-center gap-2 text-primaryColor shadow-lg rounded-lg ">
            <Skeleton className="w-full object-contain h-[180px] card__image" />

            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
        </article>
    );
};
export default ProductCardSkeleton;
