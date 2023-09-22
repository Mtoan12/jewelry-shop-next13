const getAllProducts = async () => {
    const res = await fetch('https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/GetAll', {
        next: { revalidate: 120 },
    });

    if (!res.ok) {
        throw new Error('failed to fetch');
    }
    return res.json();
};

export default getAllProducts;
