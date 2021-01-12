import client from './client';

const endpoint = "/products"

const getListOfProducts = (currentPage) => client.post(endpoint, { currentPage });

const getFilteredProductsByCategory = (currentPage, categoryId) => client.post('/products/filterByCategory', { currentPage, categoryId});

const getSortedProductsLowToHigh = () => client.get('/products/lowToHigh');

const getSortedProductsHighToLow = () => client.get('products/highToLow');

const search = (searchTerm) => client.post('/products/search', { searchTerm });

export default {
    getListOfProducts,
    getFilteredProductsByCategory,
    getSortedProductsLowToHigh,
    getSortedProductsHighToLow,
    search,
};