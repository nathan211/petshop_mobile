import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';

import colors from '../config/colors';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Setting from '../components/Setting';
import Text from '../components/Text';
import ListItem from '../components/ListItem';

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
                    <View style={styles.accountContainer}>
                        <Text style={styles.fullName}>Nguyễn Việt Phi</Text>
                        <Text style={styles.email}>fi@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ListItem 
                    title='Thông tin tài khoản' 
                    leftIcon='id-card-o' 
                    leftIconColor={colors.brown}
                    rightIcon='chevron-right'
                    rightIconColor={colors.brown}
                    onPress={() => console.log('work')}
                />
                <ListItem 
                    title='Quản lý đơn hàng' 
                    leftIcon='list-alt' 
                    leftIconColor={colors.brown}
                    rightIcon='chevron-right'
                    rightIconColor={colors.brown}
                    onPress={() => console.log('work')}
                />
                <ListItem 
                    title='Đăng xuất' 
                    leftIcon='sign-out' 
                    leftIconColor={colors.brown}
                    onPress={() => console.log('work')}
                />
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
        marginTop: 5
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
    },
    fullName: {
        textTransform: 'uppercase',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    email: {
        color: colors.white
    }
});
