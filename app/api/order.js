import client from './client';

const endpoint = '/orders';

const insertOrder = (customerId, totalMoney) => client.post(endpoint, {customerId, totalMoney});

const getLatestOrder = customerId => client.get('/orders/latestOrder/' + customerId);

const getAllOrders = customerId => client.get('orders/getAllOrdersByCustomerId/' + customerId);
 
export default {
    insertOrder,
    getLatestOrder,
    getAllOrders,
}