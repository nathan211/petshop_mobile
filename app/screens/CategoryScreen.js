import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import colors from '../config/colors';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import Card from '../components/Card';

export default function CategoryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customStyle} />
                <ShoppingCart onPress={() => console.log('go to shopping cart')} />
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
                    </ScrollView>
                </View>
                <View style={styles.categoryContainer}>
                    <ScrollView style={{maxHeight: 1000}}>

                    
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
    customStyle: {
        flex: 1,
    },
    customContainerCard: {
        width: 90,
        height: 90,
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
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1,
        padding: 5,
    },
    categoryWrapper: {
        width: '100%',
        backgroundColor: colors.white,
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    parentCategory: {
        backgroundColor: '#FF797911',
        width: 90,
        maxHeight: 1000
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
