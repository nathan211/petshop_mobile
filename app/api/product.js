import client from './client';

const endpoint = "/products"

const getListOfProducts = () => client.get(endpoint);

export default {
    getListOfProducts,
};