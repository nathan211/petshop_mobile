import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import colors from '../config/colors';
import Category from '../components/Category';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';

export default function CategoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customSearchBarStyle} />
                <ShoppingCart onPress={() => navigation.navigate('ShoppingCart')} />
            </View>
            <View style={styles.content}>
                <View style={styles.parentCategory}>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                    >
                        <Category 
                            icon='star'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Gợi ý cho bạn'
                            iconColor={colors.yellow}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                        <Category 
                            icon='paw'
                            customContainerStyle={styles.customContainerStyle}
                            customIconContainer={styles.customIconContainer}
                            customTitleStyle={styles.customTitleStyle}
                            title='Shop cho chó'
                            iconColor={colors.purple}
                        />                       
                    </ScrollView>
                </View>
                <View style={styles.categoryContainer}>
                    <ScrollView 
                        //style={{maxHeight: 1000}}
                    >
                        <View style={styles.categoryWrapper}>
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó chos chos chos chos' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó chos chos chso' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                            <Card 
                                title='Thức ăn cho chó con' 
                                customContainerStyle={styles.customContainerCard}
                                customTitleStyle={styles.customTitleCard}
                            />
                        </View>
                    </ScrollView>
                </View>
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
    customContainerCard: {
        width: 90,
        height: 100,
        elevation: 0,
    },
    customTitleCard: {
        fontSize: 10
    },
    customContainerStyle: {
        borderBottomColor: colors.medium,
        borderBottomWidth: 0.2,
        paddingBottom: 5
    },
    content: {
        flexDirection: 'row',
        marginBottom: 120
    },
    categoryContainer: {
        flex: 1,
        padding: 5,
    },
    categoryWrapper: {
        width: '100%',
        backgroundColor: colors.white,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    parentCategory: {
        backgroundColor: '#FF797911',
        width: 90,
    },
    customIconContainer: {
        elevation: 0,
        width: 50,
        height: 50
    },
    customTitleStyle: {
        fontSize: 10
    },
});
