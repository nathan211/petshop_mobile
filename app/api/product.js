import client from './client';

const endpoint = "/products"

const getListOfProducts = () => client.get(endpoint);

const getFilteredProductsByCategory = (categoryId) => client.get('/products/filterByCategory/' + categoryId);

const getSortedProductsLowToHigh = () => client.get('/products/lowToHigh');

const getSortedProductsHighToLow = () => client.get('products/highToLow');

export default {
    getListOfProducts,
    getFilteredProductsByCategory,
    getSortedProductsLowToHigh,
    getSortedProductsHighToLow,
};