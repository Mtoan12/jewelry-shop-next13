import { HiLocationMarker } from 'react-icons/hi';
import { FiMail, FiPhone, FiClock } from 'react-icons/fi';
import TooltipCustomize from '../TooltipCustomize';

export default function HeaderContact() {
    return (
        <div className="container flex flex-wrap justify-end items-center gap-2 text-primaryColor font-medium">
            <TooltipCustomize content="4 Đường Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long Xuyên, An Giang">
                <a
                    href="https://goo.gl/maps/4EAn5i3iKcuqgwpY9"
                    target="_blank"
                    className="flex items-center text-sm hover:underline cursor-pointer gap-1"
                >
                    <span className="grid place-content-center">
                        <HiLocationMarker />
                    </span>
                    <span>4 Đ. Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long Xuyên, An Giang</span>
                </a>
            </TooltipCustomize>

            <span className="w-[1px] h-4 opacity-40 bg-primaryColor"></span>
            <TooltipCustomize content="mailmailmail@gmail.com">
                <a
                    href="mailto:mailmailmail@gmail.com"
                    target="_blank"
                    className="flex items-center text-sm hover:underline cursor-pointer gap-1"
                >
                    <span className="grid place-content-center">
                        <FiMail />
                    </span>
                    <span>mailmailmail@gmail.com</span>
                </a>
            </TooltipCustomize>
            <span className="w-[1px] h-4 opacity-40 bg-primaryColor"></span>
            <TooltipCustomize content="Mở cửa 8:30-20:30">
                <div className="flex items-center text-sm hover:underline cursor-pointer gap-1">
                    <span className="grid place-content-center">
                        <FiClock />
                    </span>
                    <span>Mở cửa 8:30-20:30</span>
                </div>
            </TooltipCustomize>
            <span className="w-[1px] h-4 opacity-40 bg-primaryColor"></span>
            <TooltipCustomize content="Hotline 097 245 62 92">
                <a
                    href="tel:0972456292"
                    target="_blank"
                    className="flex items-center text-sm hover:underline cursor-pointer gap-1"
                >
                    <span className="grid place-content-center">
                        <FiPhone />
                    </span>
                    <span>Hotline 097 245 62 92</span>
                </a>
            </TooltipCustomize>
        </div>
    );
}
