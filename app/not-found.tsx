import Link from 'next/link';
import './not-found.scss';
export default function NotFound() {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">Có vẻ bạn đã bị lạc!</h3>
                                <p>Trang bạn đang tìm không tồn tại</p>
                                <Link href="/" className="link_404">
                                    Trở lại trang chủ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
