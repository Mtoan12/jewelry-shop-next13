import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
type Props = {
    title: string;
    children: React.ReactNode;
    href?: string | undefined;
};

export default async function TitleProvider({ title, children, href = undefined }: Props) {
    return (
        <section className="container">
            <div className=" w-full border-b-2 border-primaryColor relative mb-6">
                <div className="flex relative w-max h-8">
                    <h2 className="uppercase text-xl text-white font-medium bg-primaryColor px-4 py-1 w-fit">
                        {title}
                    </h2>
                    <span className="trapezoid "></span>
                </div>
                {href && (
                    <Link
                        href={href}
                        className="absolute right-2 top-0 h-full grid place-content-center text-sm font-medium text-primaryColor "
                    >
                        <span className="flex items-center">
                            Xem tất cả <AiOutlineRight />
                        </span>
                    </Link>
                )}
            </div>
            {children}
        </section>
    );
}
