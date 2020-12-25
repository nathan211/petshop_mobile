import client from './client';

const endpoint = '/categories';

const getListOfCategories = () => client.get(endpoint);

const getCategoryByParentId = (categoryId) => client.get('/categories/getCategoryByParentId/' + categoryId);

export default {
    getListOfCategories,
    getCategoryByParentId,
}