import client from './client';

const endpoint = '/categories';

const getListOfCategories = () => client.get(endpoint);

export default {
    getListOfCategories,
}