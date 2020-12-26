import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../config/colors';
import Text from '../../components/Text';
import numberFormatter from '../../utilities/numberFormatter';

export default function BookingItem({ 
    dayBooking,
    timeBooking, 
    price, 
    onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.clockContainer}>
                    <Icon 
                        name='clock-o'
                        size={60}  
                        color={colors.brown}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text>{ dayBooking }</Text>
                    <Text>{ timeBooking }</Text>
                    <Text customStyle={styles.customPrice}>{numberFormatter(price) + ' ₫' }</Text>
                </View>
                <View style={styles.viewDetails}>
                    <Icon 
                        name='chevron-right'
                        size={15}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    counter: {
    },
    container: {
        backgroundColor: colors.white,
        marginTop: 5,
        width: '100%',
        height: 90,
        flexDirection: 'row',
        borderRadius: 15,
    },
    customPrice: {
        color: colors.red,
        fontWeight: 'bold',
    },
    counterContainer: {
    },
    clockContainer: {
        padding: 15,
    },
    viewDetails: {
        paddingTop: 40,
        paddingRight: 5,
        color: colors.medium,

    },
    image: {
        width: '30%',
        height: 90,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 10
    },
})
