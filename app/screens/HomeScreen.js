import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

import colors from '../config/colors';
import CumulativePoints from '../components/CumulativePoints';
import Category from '../components/Category';
import Card from '../components/Card';
import Chatting from '../components/Chatting';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import productApi from '../api/product';
import categoryApi from '../api/category';

export default function HomeScreen({ navigation }) {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [listOfCategories, setListOfCategories] = useState([]);

    const getListOfProducts = async () => {
        try {
            const result = await productApi.getListOfProducts();
            setListOfProducts(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getListOfCategories = async () => {
        try {
            const result = await categoryApi.getListOfCategories();
            setListOfCategories(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getListOfProducts();
        getListOfCategories();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customStyle} />
                <ShoppingCart onPress={() => navigation.navigate('ShoppingCart')} />
                <Chatting onPress={() => console.log('go to chatting')} />
            </View>
            <View style={styles.content}>
                <CumulativePoints />
                <View style={styles.categoryContainer}>
                    <Text style={styles.title}>Danh mục</Text>
                    <FlatList 
                        style={styles.iconContainer}
                        horizontal
                        data={listOfCategories}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({item}) => {
                            return (
                                <Category title={item.name} icon='paw' />
                            );
                        }}
                        showsHorizontalScrollIndicator={false} 
                    />
                </View>
                <View style={styles.featureProductContainer}>
                    <Text style={styles.title}>Sản phẩm nỗi bật</Text> 
                    <FlatList 
                        style={styles.cardContainer}
                        horizontal
                        data={listOfProducts}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({item}) => {
                            return (
                                <Card 
                                    title={item.name} 
                                    subTitle={item.price} 
                                    onPress={() => navigation.navigate('ProductDetails', item)}
                                />
                            );
                        }}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightPink,
    },
    header: {
        height: 100,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 10
    },
    customStyle: {
        flex: 1,
    },
    content: {
        padding: 15,
    },
    categoryContainer: {
        marginTop: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
    },
    iconContainer: {
        paddingVertical: 5,
    },
    cardContainer: {
        paddingVertical: 5,
    },
    customTitleCategory: {
      
    },
})
