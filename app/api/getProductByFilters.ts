type Arguments = {};

const getProductByFilters = async (filter: Filter, pagination: Pagination) => {
    const res = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/SearchSanPham?filter=${encodeURIComponent(
            JSON.stringify(filter)
        )}&pagination=${encodeURIComponent(JSON.stringify(pagination))}`,
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
