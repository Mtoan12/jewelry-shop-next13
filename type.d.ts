type ChatLieu = {
    id: number;
    chatLieu: string;
    moTa: string | null;
    sanPhams: null;
};

type SanPham = {
    id: string;
    imgUrl: string ;
    tenSanPham: string;
    trongLuongSanPham: 0;
    moTa: string | null;
    chatLieu: string;
    loaiTrangSuc: string;
};
