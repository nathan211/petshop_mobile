import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';

import colors from '../config/colors';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Setting from '../components/Setting';
import Text from '../components/Text';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.utils}>
                    <Setting onPress={() => console.log('go to chatting')} />
                    <ShoppingCart onPress={() => console.log('go to shopping cart')} />
                    <Chatting onPress={() => console.log('go to chatting')} />
                </View>
                <View style={styles.customerInfo}>
                    <Avatar
                        size="large"
                        icon={{ name: 'face' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={styles.avatar}
                        rounded
                    />
                    <Text>Nguyễn Việt Phi</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text>Quản lý đơn hàng</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    header: {
        height: 130,
        backgroundColor: colors.pink,
        padding: 10,
    },
    customSearchBarStyle: {
        flex: 1,
    },
    content: {
        padding: 10
    },
    utils: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    customerInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: colors.primary,
        marginRight: 10
    }
});
