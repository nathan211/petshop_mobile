import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Header from '../components/Header';
import Text from '../components/Text';

export default function BookedDetailsScreen({ navigation }) {

    const handleSubmit = () => {

    }

    return (
        <View style={styles.container}>
            <Header 
                title='Chi tiết lịch hẹn'
                onPress={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.comboContainer}>
                    <View  style={styles.bookingContainer}>
                        <View style={styles.booking}>
                            <Image 
                                style={styles.image} 
                                source={require('../assets/images/grooming1.jpg')} 
                            />
                            <View style={styles.titleContainer}>
                                <Text style={styles.name}>Combo trọn gói tắm & tạo kiểu</Text>
                                <Text style={styles.price}>234567</Text>
                            </View>
                        </View>
                        <Text style={styles.title}>Lịch hẹn:</Text>
                        <View style={styles.bookingDateContainer}>
                            <Text>Ngày: 12/12/2020</Text>
                            <Text>Giờ: 9:00</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Button 
                title='Hủy' 
                color='brown'
                customTitleStyle={styles.customButtonTitle}
                customContainerStyle={styles.customButtonContainer}
                onPress={handleSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bookingContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    booking: {
        backgroundColor: colors.white,
        width: '100%',
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bookingDateContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: colors.white,
        marginTop: 10,
        padding: 10,
    },
    container: {
        flex: 1,
    },
    customButtonTitle: {
        color: colors.white
    },
    customButtonContainer: {
    },
    image: {
        width: '100%',
        height: 190
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    name: {
        fontSize: 20
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.red
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.danger,
        marginTop: 10,
        marginLeft: 5,
    }
})
