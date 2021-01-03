import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Text from '../components/Text';
import comboApi from '../api/combo';
import numberFormatter from '../utilities/numberFormatter';


export default function BookingScreen({ navigation }) {
    const [combos , setCombos] = useState([]);

    useEffect(() => {
        getCombos();
    }, []);

    const getCombos = async () => {
        try {
            const result = await comboApi.getCombos();

            if(result.ok){
                setCombos(result.data);
                console.log(result.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.spaAndGrooming}>Spa & Grooming</Text>
                <View style={styles.iconContainer}>
                    <ShoppingCart onPress={() => navigation.navigate('ShoppingCart')} />
                    <Chatting onPress={() => console.log('go to chatting')} /> 
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('BookingDetails')}>
                <View style={styles.bookingContainer}>
                    {
                        combos.map(item => (
                            <Card 
                                title={item.name}
                                subTitle={numberFormatter(item.price) + ' ₫'}
                                imageUrl={item.imageUrl}
                                customContainerStyle={styles.booking}
                                customTitleStyle={styles.customTitle}
                                customTitleContainerStyle={styles.customTitleContainer}
                                key={item._id}
                                onPress={() => navigation.navigate('BookingDetails', item)}
                            />
                        ))
                    }
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    bookingContainer: {
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    booking: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 0,
        marginHorizontal: 0,
        marginVertical: 0,
    },
    customTitle: {
        fontSize: 20,
    },
    customTitleContainer: {
        padding: 10,
    },  
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: 'row',
        width: '20%',
        marginRight: 5,
    },
    spaAndGrooming: {
        color: colors.white,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
})
