import client from "./client";

const register = (fullName, address, phoneNumber, email, password) => client.post('/customers/register', { fullName, address, phoneNumber, email, password });

const updateUserInformation = (_id, fullName, address, phoneNumber, email) => client.post('/customers/updateUserInformation', { _id, fullName, address, phoneNumber, email });

export default {
    register,
    updateUserInformation,
};