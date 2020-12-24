import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Category from '../components/Category';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import productApi from '../api/product';
import numberFormatter from '../utilities/numberFormatter';

export default function CategoryScreen({ navigation, route }) {
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        getFilteredProductsByCategory();
    }, []);

    const getFilteredProductsByCategory = async () => {
        try {
            const result = await productApi.getFilteredProductsByCategory(route.params);
            if(result.ok){
                setListOfProducts(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

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
            <FlatList 
                style={styles.cardContainer}
                data={listOfProducts}
                keyExtractor={item => item._id.toString()}
                renderItem={({item}) => (
                        <Card 
                            title={item.name}
                            subTitle={numberFormatter(item.price) + ' ₫'} 
                            onPress={() => navigation.navigate('ProductDetails', item)}
                            customContainerStyle={styles.customCardContainer}
                            customTitleStyle={styles.customCardTitle}
                            keyExtractor={item._id}
                            />
                    )}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    cardContainer: {
        paddingHorizontal: 20
    },
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
    iconBackContainer: {
        width: '10%'
    },
    customCardContainer: {
        height: 250,    
        elevation: 0,
        flex: 1
    }
});
