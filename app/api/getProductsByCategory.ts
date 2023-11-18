const getProductsByCategory = async (categoryId: number, page: number, perPage: number) => {
    const filter = encodeURIComponent(JSON.stringify({ LoaiTrangSucs: [categoryId] }));
    const pagination = encodeURIComponent(JSON.stringify({ PageSize: perPage, PageIndex: page }));
    const rs = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/SearchSanPham?filter=${filter}&pagination=${pagination}`,
        { next: { revalidate: 0 } }
    );

    if (!rs.ok) {
        throw new Error('failed to fetch');
    }

    return rs.json();
};

export default getProductsByCategory;
