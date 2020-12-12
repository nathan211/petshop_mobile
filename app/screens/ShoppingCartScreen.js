import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Button from '../components/Button';
import colors from '../config/colors';
import CartItem from '../components/CartItem';
import Text from '../components/Text';
import { decreaseHandler, increaseHandler } from '../redux/shoppingCartSlice';

function ShoppingCartScreen({ 
    navigation, 
    cartItems, 
    decreaseHandler, 
    increaseHandler, }) {
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
                            color={colors.grey}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <Text customStyle={{
                    width: '100%',
                    textAlign: 'center',
                    paddingRight: 80,
                }}>Giỏ hàng({cartItems.length})</Text>
            </View>
            <ScrollView style={styles.cartContainer}>
                <View style={styles.addressContainer}>
                    <View style={styles.addressWrapper}>
                        <Text customStyle={styles.addressTitle}>Địa chỉ giao hàng</Text>
                        <Text customStyle={styles.name}>Nguyễn Việt Phi - 0962104912</Text>
                        <Text customStyle={styles.address}>Somewhere in Vietnam</Text>
                    </View>
                    <TouchableWithoutFeedback 
                        style={styles.deleteContainer}
                        onPress={() => console.log('delete')}
                    >
                        <Text customStyle={styles.delete}>Sửa</Text>
                    </TouchableWithoutFeedback>
                </View>
                { 
                    cartItems.map(item => {
                        return (
                            <CartItem 
                                key={item._id.toString()}
                                name={item.name} 
                                price={item.price} 
                                cartCounter={item.cartCounter}
                                onDecrease={() => decreaseHandler(item._id)}
                                onIncrease={() => increaseHandler(item._id)}
                            />
                        );
                    }) 
                }
            </ScrollView>
            <View style={styles.orderContainer}>
                <View style={styles.totalContainer}>
                    <Text customStyle={styles.totalTitle}>Tổng tiền</Text>
                    <Text customStyle={styles.total}>123456789</Text>
                </View>
                <Button 
                    title='tiến hành đặt hàng' 
                    color='brown'
                    customTitleStyle={styles.customButtonTitle}
                    customContainerStyle={styles.customButtonContainer}
                    onPress={() => navigation.navigate('Order')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addressContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: 80,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addressTitle: {
        fontSize: 14
    },
    address: {
        fontSize: 15
    },
    addressWrapper: {
        flex: 1
    },
    customButtonTitle: {
        color: colors.white
    },
    customButtonContainer: {
        flex: 1
    },
    customIconContainer: {
        backgroundColor: colors.grey,
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete: {
        color: colors.secondary,
        fontSize: 14
    },
    name: {
        fontWeight: 'bold'
    },
    header: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 5,
        alignItems: 'center',
    },
    orderContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
    },
    iconBackContainer: {
        marginLeft: 5,
        width: '10%'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '10%',
        marginRight: 5,
    },
    totalContainer: {
        width: '40%',
        padding: 5,
    },
    totalTitle: {
        fontSize: 14
    },
    total: {
        fontWeight: 'bold',
        color: colors.red
    }
})

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatch = {
    decreaseHandler,
    increaseHandler,
}

export default connect(mapStateToProps, mapDispatch)(ShoppingCartScreen)