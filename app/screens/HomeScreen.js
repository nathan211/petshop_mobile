import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

import colors from '../config/colors';
import CumulativePoints from '../components/CumulativePoints';
import Category from '../components/Category';
import Card from '../components/Card';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import SearchBar from '../components/SearchBar';
import productApi from '../api/product';
import categoryApi from '../api/category';
import numberFormatter from '../utilities/numberFormatter'

export default function HomeScreen({ navigation }) {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [listOfCategories, setListOfCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        getListOfProducts(currentPage);
        getListOfCategories();
    }, []);

    const getListOfProducts = async (currentPage) => {
        try {
            const result = await productApi.getListOfProducts(currentPage);
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

    const handleLoadMore = async () => {
        try {
            const result = await productApi.getListOfProducts(currentPage + 1);
            setListOfProducts([...listOfProducts, ...result.data]);
            setCurrentPage(currentPage + 1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customStyle} />
                <ShoppingCart onPress={() => navigation.navigate('ShoppingCart')} />
                <Chatting onPress={() => console.log('go to chatting')} />
            </View>
            <View style={styles.content}>
                <CumulativePoints />
                <Text style={styles.title}>Danh mục</Text>
                <View style={styles.categoryContainer}>
                    <FlatList 
                        contentContainerStyle={styles.iconContainer}
                        horizontal
                        data={listOfCategories}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({item}) => {
                            return (
                                <Category 
                                    title={item.name} 
                                    icon='paw' 
                                    onPress={() => navigation.navigate('Products', item._id)}
                                />
                            );
                        }}
                        showsHorizontalScrollIndicator={false} 
                    />
                </View>
                <View style={styles.featureProductContainer}> 
                    <Text style={styles.title}>Sản phẩm nỗi bật</Text> 
                    <FlatList 
                        contentContainerStyle={styles.cardContainer} 
                        horizontal
                        data={listOfProducts}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({item}) => {
                            return (
                                <Card 
                                    title={item.name} 
                                    subTitle={numberFormatter(item.price) + ' ₫'} 
                                    onPress={() => navigation.navigate('ProductDetails', item)}
                                    imageUrl={item.imageUrl}
                                />
                            );
                        }}
                        showsHorizontalScrollIndicator={false}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.5}
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
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
        marginTop: 10
    },
    iconContainer: {
        
    },
    cardContainer: {
        //backgroundColor: colors.red
    },
    customTitleCategory: {
      
    },
})
