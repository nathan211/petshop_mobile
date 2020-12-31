import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import productApi from '../api/product';
import numberFormatter from '../utilities/numberFormatter';
import Text from '../components/Text';

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

    const handleShowFilterModal = () => {
        
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
            <ScrollView>
                <View style={styles.filterContainer}>
                    <Text customStyle={styles.title}>Tất cả sản phẩm: </Text>
                    <TouchableWithoutFeedback onPress={handleShowFilterModal}>
                        <View style={styles.filterWrapper}>
                            <Text customStyle={styles.filterText}>Bộ lọc</Text>
                            <Icon 
                                name='filter'
                                size={23}
                                color={colors.brown}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View  style={styles.cardContainer}>
                {
                    listOfProducts.map((item) => (
                        <Card 
                            title={item.name}
                            subTitle={numberFormatter(item.price) + ' ₫'} 
                            onPress={() => navigation.navigate('ProductDetails', item)}
                            customContainerStyle={styles.customCardContainer}
                            customTitleStyle={styles.customCardTitle}
                            key={item._id}
                        />
                    ))
                }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    cardContainer: {
        paddingHorizontal: 20,
        marginBottom: 70,
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        width: 175,
        height: 250,    
        elevation: 0,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: colors.white,
    },
    filterWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    filterText: {
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold'
    }
});
