import client from './client';

const endpoint = '/orders';

const insertOrder = (customerId, totalMoney) => client.post(endpoint, {customerId, totalMoney});

const getLatestOrder = customerId => client.get('/orders/latestOrder/' + customerId);

const getAllOrders = customerId => client.get('orders/getAllOrdersByCustomerId/' + customerId);

const getAllOrderDetails = orderId => client.get('/orderDetails/' + orderId);

const getOrdersByStatus = (customerId, status) => client.post('orders/getOrdersByStatus', { customerId, status });

const cancelOrder = (orderId) => client.post('orders/cancelOrder', { orderId });

export default {
    insertOrder,
    getLatestOrder,
    getAllOrders,
    getAllOrderDetails,
    getOrdersByStatus,
    cancelOrder,
}