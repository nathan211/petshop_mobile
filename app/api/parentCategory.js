import client from './client';

const endpoint = '/parentCategories';

const getListOfParentCategories = () => client.get(endpoint);

export default {
    getListOfParentCategories,
}