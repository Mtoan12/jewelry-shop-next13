const getAllLoaiTrangSucs = async () => {
    const res = await fetch(
        'https://webtiemvangkimcucser.azurewebsites.net/api/DanhMuc/getallloaitrangsuc',
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error('failed to fetch');
    }
    return res.json();
};

export default getAllLoaiTrangSucs;
