import client from "./client";

const register = (fullName, address, phoneNumber, email, password) => client.post("/customers/register", { fullName, address, phoneNumber, email, password });

export default {
    register,
};