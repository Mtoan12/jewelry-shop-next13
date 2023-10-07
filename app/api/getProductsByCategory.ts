const getProductsByCategory = async (categoryId: number, size: number) => {
    const filter = encodeURIComponent(JSON.stringify({ LoaiTrangSucs: [categoryId] }));
    const pagination = encodeURIComponent(JSON.stringify({ PageSize: size, PageIndex: 0 }));
    const rs = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/SearchSanPham?filter=${filter}&pagination=${pagination}`
    );

    if (!rs.ok) {
        throw new Error('failed to fetch');
    }

    return rs.json();
};

export default getProductsByCategory;
