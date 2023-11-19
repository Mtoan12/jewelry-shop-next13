type ChatLieu = {
    id: number;
    chatLieu: string;
    moTa: string | null;
    sanPhams: null;
};

type LoaiTrangSuc = {
    id: number;
    loaiTrangSuc: string;
    moTa: string | null;
    sanPhams: null;
};

type SanPham = {
    id: string;
    imgUrl: string;
    tenSanPham: string;
    trongLuongSanPham: 0;
    moTa: string | null;
    chatLieu: string;
    loaiTrangSuc: string;
    createdDate: string;
    updatedDate: string | null;
    isDeleted: boolean;
};

type Filter = {
    SearchKey: string;
    ChatLieus?: number[];
    LoaiTrangSucs?: number[];
};

type Pagination = {
    PageIndex: number;
    PageSize: number;
};

type ProductsApi = {
    result: boolean;
    errorMessage: string;
    dataResult: {
        data: [
            {
                id: string;
                imgUrl: string;
                tenSanPham: string;
                trongLuongSanPham: string;
                chatLieu: string;
                loaiTrangSuc: string;
                moTa: string;
                createdDate: string;
                updatedDate: string | null;
                isDeleted: boolean;
            },
        ];
        totalRows: number;
    };
};
