import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from '../components/Header';
import BookingItem from '../components/lists/BookingItem';
import bookingApi from '../api/booking';

export default function BookingManagerScreen({ navigation }) {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
       getAllBookings();
    }, [])
    
    const getAllBookings = async () => {
        try {
            const result = await bookingApi.getAllBookings();
            if(result.ok){
                setBookings(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View>
            <Header 
                title='Lịch hẹn' 
                onPress={() => navigation.goBack()}
            />
            <View style={styles.bookingItemContainer}>
                <ScrollView>
                    {
                        bookings.map(item => (
                            <BookingItem 
                                dayBooking={item.bookedDate}
                                timeBooking={item.bookedTime + ':00'} 
                                price={item.totalMoney}
                                onPress={() => navigation.navigate('BookedDetails')}
                                key={item._id}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookingItemContainer: {
        padding: 10,
    }
})
