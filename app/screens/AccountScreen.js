import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import colors from '../config/colors';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Setting from '../components/Setting';
import Text from '../components/Text';
import ListItem from '../components/ListItem';
import { signOut } from '../redux/authSlice';

function SearchScreen({ currentUser, signOut, navigation }) {
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
                        icon={{name: 'user', type: 'font-awesome'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={styles.avatar}
                        rounded
                    />
                    <View style={styles.accountContainer}>
                        <Text style={styles.fullName}>{ currentUser.fullName }</Text>
                        <Text style={styles.email}>{ currentUser.email }</Text>
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
                    onPress={() => navigation.navigate('ProfileEdit')}
                />
                <ListItem 
                    title='Quản lý đơn hàng' 
                    leftIcon='list-alt' 
                    leftIconColor={colors.brown}
                    rightIcon='chevron-right'
                    rightIconColor={colors.brown}
                    onPress={() => navigation.navigate('OrderManager')}
                />
                <ListItem 
                    title='Lịch hẹn' 
                    leftIcon='calendar' 
                    leftIconColor={colors.brown}
                    rightIcon='chevron-right'
                    rightIconColor={colors.brown}
                    onPress={() => console.log('work')}
                />
                <ListItem 
                    title='Đăng xuất' 
                    leftIcon='sign-out' 
                    leftIconColor={colors.brown}
                    onPress={() => signOut()}
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

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {
    signOut,
}

export default connect(mapStateToProps, mapDispatch)(SearchScreen)