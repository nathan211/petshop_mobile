import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import colors from '../config/colors';
import Text from '../components/Text';

function CustomerInfomation({ currentUser }) {
    return (
        <View style={styles.addressContainer}>
            <View style={styles.addressWrapper}>
                <Text customStyle={styles.addressTitle}>Địa chỉ giao hàng</Text>
                <Text customStyle={styles.name}>
                    {currentUser.fullName + ' - ' + currentUser.phoneNumber}
                </Text>
                <Text customStyle={styles.address}>{currentUser.address}</Text>
            </View>
            <TouchableWithoutFeedback 
                style={styles.deleteContainer}
                onPress={() => console.log('edit')}
            >
                <Text customStyle={styles.delete}>Sửa</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    address: {
        fontSize: 15
    },
    addressContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: 80,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addressWrapper: {
        flex: 1
    },
    addressTitle: {
        fontSize: 14
    },
    delete: {
        color: colors.secondary,
        fontSize: 14
    },
    name: {
        fontWeight: 'bold'
    },
})

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        currentUser: state.auth.currentUser,
        totalMoney: state.cart.totalMoney
    }
}

const mapDispatch = {
   
}

export default connect(mapStateToProps, mapDispatch)(CustomerInfomation)
