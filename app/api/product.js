import client from './client';

const endpoint = "/products"

const getListOfProducts = () => client.get(endpoint);

const getFilteredProductsByCategory = (categoryId) => client.get('/products/filterByCategory/' + categoryId);

export default {
    getListOfProducts,
    getFilteredProductsByCategory
};