import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Category from '../components/Category';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';

export default function CategoryScreen({ navigation }) {
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
                            color={colors.white}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <SearchBar customStyle={styles.customSearchBarStyle} />
                <ShoppingCart onPress={() => navigation.navigate('ShoppingCart')} />
            </View>
            <View style={styles.content}>
                <Card 
                    title='test 1 tets sdad sadas dsad sad sad sa dsa d sa dsa d sa' 
                    subTitle='123456' 
                    onPress={() => navigation.navigate('ProductDetails')}
                    customContainerStyle={styles.customCardContainer}
                    customTitleStyle={styles.customCardTitle}
                />
                <Card 
                    title='test 1' 
                    subTitle='123456' 
                    onPress={() => navigation.navigate('ProductDetails')}
                    customContainerStyle={styles.customCardContainer}
                    customTitleStyle={styles.customCardTitle}
                />
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
        padding: 10,
        alignItems: 'center'
    },
    customSearchBarStyle: {
        flex: 1,
    },
    customContainerCard: {
        width: 90,
        height: 100,
        elevation: 0,
    },
    customCardTitle: {
        fontSize: 16
    },
    content: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        flexWrap: 'wrap'
    },
    iconBackContainer: {
        width: '10%'
    },
    customCardContainer: {
        width: 175,
        height: 250,
        elevation: 0
    }
});
