import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import orderApi from '../api/order';

function OrderManagerScreen({ navigation, currentUser }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders();
    }, []);
    
    const getAllOrders = async () => {
        try {
            const result = await orderApi.getAllOrders(currentUser._id);
            if(result.ok){
                setOrders(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Header 
                title='Tất cả đơn hàng' 
                onPress={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.orderContainer}> 
                    {
                        orders.map(item => (
                            <OrderItem 
                                name={'Ngày: ' + moment(item.createdDate).format('DD/MM/YYYY')}
                                price={item.totalMoney}
                                cartCounter={'Sản phẩm: ' + 3}
                                details={true}
                                onPress={() => navigation.navigate('OrderDetails') }
                                customNameStyle={styles.name}
                                key={item._id}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    orderContainer: {
        padding: 10,
        marginBottom: 50,
    },
    name: {
        fontSize: 14
    }
})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {
    
}

export default connect(mapStateToProps, mapDispatch)(OrderManagerScreen)
