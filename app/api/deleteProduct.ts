export const deleteProduct = async (productId: string) => {
    try {
        const res = await fetch(
            `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/XoaSanPham?id=${productId}`,
            {
                method: 'DELETE',
            }
        );

        if (!res.ok) {
            throw new Error('Xóa không được');
        }

        return res.json();
    } catch (error) {
        throw error;
    }
};
