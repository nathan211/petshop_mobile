import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import Button from '../components/Button';
import colors from '../config/colors';
import Text from '../components/Text';
import DatetimePickerItem from '../components/DatetimePickerItem';
import TimeItem from '../components/TimeItem';
import bookingApi from '../api/booking';

export default function BookingDetails({ navigation }) {
    const bookingTime = [
        8, 9, 10
    ];
    const [time, setTime] = useState([]);
    const [isSelected, setIsSelected] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState();
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const [totalMoney, setTotalMoney] = useState(123456);

    useEffect(() => {
        
    }, [])

    const handleSubmit = async () => {
        try {
            console.log('submitted');
            console.log(selectedDate, selectedTime, totalMoney);
            const result = await bookingApi.insertBooking(selectedDate, selectedTime, totalMoney);
            if(result.ok){
                createAlert();
            } 
        } catch (error) {
            console.log(error);
        }
        
    }

    const createAlert = () =>
    Alert.alert(
      "Thông báo!",
      "Đặt lịch thành công.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok", onPress: () => console.log('Ok') }
      ],
      { cancelable: false }
    );

    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    };
     
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    };
    
    const handleDatePicked = async date => {
        setTime([]);
        const output = moment(date).format('DD/MM/YYYY');
        setSelectedDate(output);

        await bookingApi.findSelectedDate(output).then(result => {
            const timeClone = result.data.map(item => {
                return item.bookedTime;
            });
            console.log({timeClone, result: result.data});
            setTime(timeClone);
        });
    
        hideDateTimePicker();
    };
    
    const handleChooseTime = (item) => {
        setIsSelected(item);
        setSelectedTime(item);
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <View style={styles.iconBackContainer}>
                    <TouchableWithoutFeedback 
                        onPress={() => navigation.goBack()}
                    >
                        <Icon 
                            name='chevron-circle-left'
                            size={40}
                            color={colors.white}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <Text customStyle={{
                   width: '100%',
                   textAlign: 'center',
                   paddingRight: 80,
                   color: colors.white,
                }}>Đặt lịch</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text customStyle={styles.title}>Chọn ngày: </Text>
                <DatetimePickerItem 
                    title={selectedDate}
                    onPress={showDateTimePicker}
                />
                <DateTimePicker
                    isVisible={isDateTimePickerVisible}
                    onConfirm={handleDatePicked}
                    onCancel={hideDateTimePicker}
                />
                <Text customStyle={styles.title}>Chọn thời gian: </Text>
                <View style={styles.timeContainer}> 
                    {
                        bookingTime.map((item, key) => (
                            <TimeItem 
                                key={key}
                                label={item} 
                                onPress={() => handleChooseTime(item)}
                                isSelected={time.includes(item) ? true : false}
                            />
                        ))
                    }
                </View>
                <Button 
                    title='Xong' 
                    color='brown' 
                    customContainerStyle={styles.customButtonContainer}
                    customTitleStyle={styles.customTitle}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    customButtonContainer: {
        padding: 10,
        marginTop: 15,
    },
    customTitle: {  
        color: colors.white,
    },
    container: {
        flex: 1,
    },
    header: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 5,
        alignItems: 'center',
    },
    iconBackContainer: {
        marginLeft: 5,
        width: '10%'
    },
    inputContainer: {
        padding: 10
    },
    title: {
        marginVertical: 5,
        marginLeft: 5
    },
    timeContainer: {
        width: '100%',
        height: 150,
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderRadius: 10,
        padding: 5,
        flexWrap: 'wrap',
    },   
})
