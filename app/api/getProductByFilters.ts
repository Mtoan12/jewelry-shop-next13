type Arguments = {};

const getProductByFilters = async (filter: string, pagination: Pagination) => {
    const res = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/SearchSanPham?filter=${filter}&pagination=${encodeURIComponent(
            JSON.stringify(pagination)
        )}`,
        {
            next: { revalidate: 0 },
        }
    );

    if (!res.ok) {
        throw new Error('failed to fetch');
    }
    return res.json();
};

export default getProductByFilters;
