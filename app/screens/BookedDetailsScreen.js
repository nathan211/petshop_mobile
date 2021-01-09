import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Header from '../components/Header';
import Text from '../components/Text';
import comboApi from '../api/combo';
import numberFormatter from '../utilities/numberFormatter';
import UrlContstants from '../contstants/UrlContstant';

export default function BookedDetailsScreen({ navigation, route }) {
    const { comboId, bookedDate, bookedTime } = route.params;
    const [combo, setCombo] = useState({});
    
    useEffect(() => {
        getComboDetails();
    }, []);

    const handleSubmit = () => {
        
    }

    const getComboDetails = async () => {
        try {
            const result = await comboApi.getComboDetails(comboId);

            if(result.ok){
                setCombo(result.data);
            }
        } catch (error) {
            console.log(error.message);
        }
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
                                source={{ uri: UrlContstants.HOSTING + combo.imageUrl }} 
                            />
                            <View style={styles.titleContainer}>
                                <Text style={styles.name}>{ combo.name }</Text>
                                <Text style={styles.price}>{numberFormatter(combo.price ? combo.price : 0) + ' ₫'}</Text>
                            </View>
                        </View>
                        <Text style={styles.title}>Lịch hẹn:</Text>
                        <View style={styles.bookingDateContainer}>
                            <Text>{'Ngày: ' + bookedDate}</Text>
                            <Text>{'Giờ: ' + bookedTime + ':00'}</Text>
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
