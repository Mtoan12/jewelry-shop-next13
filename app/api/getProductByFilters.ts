type Arguments = {};

const getProductByFilters = async (filter: Filter, pagination: Pagination) => {
    const res = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/SearchSanPham?filter=${encodeURIComponent(
            JSON.stringify(filter)
        )}&pagination=%257B%2522PageIndex%2522%253A0%252C%2522PageSize%2522%253A1%257D`,
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
