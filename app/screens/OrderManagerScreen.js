import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import colors from '../config/colors';
import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import orderApi from '../api/order';
import numberFormatter from '../utilities/numberFormatter';
import TabItem from '../components/lists/TabItem';

function OrderManagerScreen({ navigation, currentUser }) {
    const [tabItems, setTabItems] = useState([
        { label: 'Tất cả', value: 1 },
        { label: 'Đang xử lý', value: 2 },
        { label: 'Đang giao', value: 3 },
        { label: 'Đã giao', value: 4 },
        { label: 'Đã hủy', value: 5 }
    ]);
    const [isActive, setIsActive] = useState(tabItems[0]);
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

    const getOrderByStatus = async (customerId, status) => {
        try {
            const result = await orderApi.getOrdersByStatus(customerId, status);
            if(result.ok){
                setOrders(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeTab = (item) => {
        if(item.value === 1){
            return getAllOrders();
        }

        setIsActive(item);
        getOrderByStatus(currentUser._id, item.value);
    }

    const renderStatus = (status) => {
        let text = '';

        if(status === 2){
            text = 'Đang xử lý';
        } else if(status === 3) {
            text = 'Đang giao';
        } else if(status === 4){
            text = 'Đã giao';
        } else  if(status === 5){
            text = 'Đã hủy';
        }

        return text;
    }

    return (
        <View style={styles.container}>
            <Header 
                title='Tất cả đơn hàng' 
                onPress={() => navigation.goBack()}
            />
            <View style={styles.tabContainer}>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        tabItems.map((item, key) => (
                            <TabItem 
                                title={item.label}
                                isActive={isActive === item ? true : false}
                                onPress={() => handleChangeTab(item)}
                                key={key}
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <ScrollView>
                <View style={styles.orderContainer}> 
                    {
                        orders.map(item => (
                            <OrderItem 
                                name={'Ngày: ' + moment(item.order.createdDate).format('DD/MM/YYYY') + ', ' + renderStatus(item.order.status)}
                                price={numberFormatter(item.order.totalMoney + ' ₫')}
                                cartCounter={'Sản phẩm: ' + item.cartCounter}
                                details={true}
                                onPress={() => navigation.navigate('OrderDetails', item.order) }
                                customNameStyle={styles.name}
                                key={item.order._id}
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
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
    },
})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {}

export default connect(mapStateToProps, mapDispatch)(OrderManagerScreen)
