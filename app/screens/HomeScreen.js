import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'

import colors from '../config/colors'
import CumulativePoints from '../components/CumulativePoints'
import Chatting from '../components/Chatting'
import Category from '../components/Category'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import ShoppingCart from '../components/ShoppingCart'
import productApi from '../api/product';

export default function HomeScreen() {
    const [listOfProducts, setListOfProducts] = useState([]);

    const getListOfProducts = async () => {
        const result = await productApi.getListOfProducts();
        console.log(result.data);
        setListOfProducts(result.data);
    }

    useEffect(() => {
        getListOfProducts();
    }, []);

    const renderItem = ({item}) => {
        return (
            <Card title={item.name} subTitle={item.price} />
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customStyle} />
                <ShoppingCart onPress={() => getListOfProducts()} />
                <Chatting onPress={() => console.log('go to chatting')} />
            </View>
            <View style={styles.content}>
                <CumulativePoints />
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Danh mục</Text>
                    <ScrollView 
                        style={styles.iconContainer}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <Category 
                            icon='paw' 
                            title='Thức ăn'
                        />
                        <Category 
                            icon='paw' 
                            title='Thức ăn'
                        />
                        <Category 
                            icon='paw' 
                            title='Thức ăn'
                        />
                        <Category 
                            icon='paw' 
                            title='Thức ăn'
                        />
                        <Category 
                            icon='paw' 
                            title='Thức ăn'
                        />
                    </ScrollView>
                </View>
                <View style={styles.featureProductContainer}>
                    <Text style={styles.categoryTitle}>Sản phẩm nỗi bật</Text>
                    <FlatList 
                        style={styles.cardContainer}
                        horizontal
                        //showsHorizontalScrollIndicator={false}
                        data={listOfProducts}
                        keyExtractor={product => product._id.toString()}
                        renderItem={renderItem}
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
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
    },
    iconContainer: {
        paddingVertical: 10,
    },
    cardContainer: {
        paddingVertical: 10,
    },
})
