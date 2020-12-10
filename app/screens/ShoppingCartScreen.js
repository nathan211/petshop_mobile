import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../components/Button';
import colors from '../config/colors';
import CartItem from '../components/CartItem';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Text from '../components/Text';

export default function ShoppingCartScreen({ navigation }) {
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
                <View style={styles.iconContainer}>
                    <Chatting 
                        onPress={() => console.log('go to chatting')} 
                        customContainerStyle={styles.customIconContainer}
                    />
                    <ShoppingCart 
                        onPress={() => getListOfProducts()}
                        customContainerStyle={styles.customIconContainer} 
                    />
                </View>
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
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
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
        justifyContent: 'space-between',
    },
    orderContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    iconBackContainer: {
        marginLeft: 5,
        width: '10%'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '20%',
        marginRight: 10,
    },
    totalContainer: {
        width: '40%',
        padding: 5
    },
    totalTitle: {
        fontSize: 14
    },
    total: {
        fontWeight: 'bold',
        color: colors.red
    }
})
