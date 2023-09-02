import Image from 'next/image';
import './footer.scss';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container flex flex-col lg:flex-row justify-center gap-5 items-center lg:items-start">
                <div className="max-w-[360px] overflow-hidden">
                    <Image className="w-2/3" src="/logo.png" alt="logo" width={100} height={100} />
                    <ul className="list-disc space-y-2">
                        <li>
                            Chào mừng bạn đến với Tiệm vàng Kim Cúc Long Xuyên - nơi khám phá những
                            tác phẩm trang sức đẹp tự nhiên, từ những viên vàng, bạc, đá quý độc
                            đáo. Tạo điểm nhấn cho vẻ đẹp của bạn với những món trang sức tinh xảo,
                            từ nhẫn, vòng cổ đến bộ sưu tập đá quý quý hiếm. Hãy khám phá nguồn cảm
                            hứng từ thiên nhiên tại tiệm vàng tốt nhất Long Xuyên, An Giang - Tiệm
                            vàng Kim Cúc. Đại chỉ: 4 Đ. Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long
                            Xuyên, An Giang.
                        </li>
                        <li>
                            <a href="tel:+84972456292">Hotline: 097 245 62 92</a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=100054235431878"
                                target="_blank"
                            >
                                Facebook: Tiệm vàng Kim Cúc LX
                            </a>
                        </li>
                        <li>
                            <a href="https://zalo.me/0972456292" target="_blank">
                                Zalo: Mai Ngoc Man
                            </a>
                        </li>
                        <li>
                            <a href="https://tiemvangkimcuc.vercel.app" target="_blank">
                                Web: https://tiemvangkimcuc.vercel.app
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/4EAn5i3iKcuqgwpY9" target="_blank">
                                Địa chỉ: 4 Đ. Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long Xuyên, An
                                Giang
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap grow gap-20">
                    <section className="w-1/4">
                        <h2 className="text-xl font-semibold mb-5">Về chúng tôi</h2>
                        <ul className="footer__section">
                            <li className="footer__link">
                                <a href="/">Giới thiệu</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Liên hệ</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Chính sách vận chuyển</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Chính sách bảo mật</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Chính sách bảo hành</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Chính sách thanh toán</a>
                            </li>
                        </ul>
                    </section>
                    <section className="w-1/4">
                        <h2 className="text-xl font-semibold mb-5">Góc tư vấn</h2>
                        <ul className="footer__section">
                            <li className="footer__link">
                                <a href="/">Thiết kế trang sức</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Gia công đá quý</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Trang sức theo tháng</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Lựa chọn trang sức cưới</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Nhẫn báo giá mẫu</a>
                            </li>
                        </ul>
                    </section>
                    <section className="w-1/4">
                        <h2 className="text-xl font-semibold mb-5">Hỗ trợ khách hàng</h2>
                        <ul className="footer__section">
                            <li className="footer__link">
                                <a href="/">Giá vàng hôm nay</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Hướng dẫn do size tay</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Cách bảo quản trang sức</a>
                            </li>
                            <li className="footer__link">
                                <a href="/">Mẫu nhẫn đẹp</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    );
}
