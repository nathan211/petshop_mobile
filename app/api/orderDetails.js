import client from './client';

const endpoint = '/orderDetails';

const insertOrderDetails = (orderId, productId, amount) => client.post(endpoint, {orderId, productId, amount});

export default {
    insertOrderDetails,
}