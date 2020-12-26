import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import BookingItem from '../components/lists/BookingItem';

export default function BookingManagerScreen({ navigation }) {
    return (
        <View>
            <Header 
                title='Lịch hẹn' 
                onPress={() => navigation.goBack()}
            />
            <View style={styles.bookingItemContainer}>
                <BookingItem 
                    dayBooking='12/12/2020'
                    timeBooking='9:00' 
                    price={123456}
                    onPress={() => navigation.navigate('BookedDetails')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookingItemContainer: {
        padding: 10,
    }
})
