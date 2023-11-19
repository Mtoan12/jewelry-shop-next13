const getProductByFilters = async (filter: Filter, pagination: Pagination) => {
    const filterEncoded = encodeURIComponent(JSON.stringify(filter));
    const paginationEncoded = encodeURIComponent(JSON.stringify(pagination));
    const res = await fetch(
        `https://webtiemvangkimcucser.azurewebsites.net/api/SanPham/SearchSanPham?filter=${filterEncoded}&pagination=${paginationEncoded}`,
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
