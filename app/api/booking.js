import client from './client';

const endpoint = '/bookings'

const insertBooking = (bookedDate, bookedTime, totalMoney) => client.post(endpoint, {bookedDate, bookedTime, totalMoney});

const findSelectedDate = (selectedDate) => client.post('/bookings/findSelectedDate', { selectedDate });

const getAllBookings = () => client.get(endpoint);

export default {
    insertBooking,
    findSelectedDate,
    getAllBookings,
}