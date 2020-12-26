import React from 'react';
import { StyleSheet, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import Text from '../components/Text';
import CustomerInfomation from '../components/CustomerInfomation';

function OrderDetailsScreen({ navigation, currentUser }) {
    return (
        <View>
             <Header 
                title='Chi tiết đơn hàng' 
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.cartContainer}>
                <CustomerInfomation />
                        <OrderItem 
                                name='test 1' 
                                price={123456} 
                                cartCounter={2}
                        />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {
  
}

export default connect(mapStateToProps, mapDispatch)(OrderDetailsScreen)
