class ProductApi {
    getAllSanPham = async () => {
        const res = await fetch(
            'https://webtiemvangkimcucser.azurewebsites.net/api/sanpham/GetAll'
        );

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    };
}

const productApi = new ProductApi();
export default productApi;
