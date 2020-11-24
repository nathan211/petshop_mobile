import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customSearchBarStyle} />
                <ShoppingCart onPress={() => console.log('go to shopping cart')} />
            </View>
            <View style={styles.content}>
                <Text>Lịch sử tìm kiếm</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 10
    },
    customSearchBarStyle: {
        flex: 1,
    },
    content: {
        padding: 10
    }
});
