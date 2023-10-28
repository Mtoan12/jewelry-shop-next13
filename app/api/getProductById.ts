const getProductById = async (productId: string) => {
    const res = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/GetSanPham?id=${productId}`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error('Get sản phẩm thất bại');
    }

    return res.json();
};

export default getProductById;
