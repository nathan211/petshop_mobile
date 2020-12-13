import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';

import colors from '../config/colors';
import Category from '../components/Category';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import parentCategoryApi from '../api/parentCategory';
import categoryApi from '../api/category';

export default function CategoryScreen({ navigation }) {
    const [listOfParentCategories, setListOfParentCategories] = useState([]); 
    const [listOfCategories, setListOfCategories] = useState([]); 

    useEffect(() => {
        getListOfParentCategories();
        getListOfCategories();
    }, []);

    const getListOfParentCategories = async () => {
        try {
            const result = await parentCategoryApi.getListOfParentCategories();
            if(result.ok){
                setListOfParentCategories(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getListOfCategories = async () => {
        try {
            const result = await categoryApi.getListOfCategories();
            if(result.ok){
                setListOfCategories(result.data);
                console.log(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        {
                            listOfParentCategories.map(item => (
                                 <Category 
                                    icon='paw'
                                    customContainerStyle={styles.customContainerStyle}
                                    customIconContainer={styles.customIconContainer}
                                    customTitleStyle={styles.customTitleStyle}
                                    title={item.name}
                                    iconColor={colors.purple}
                                    key={item._id.toString()}
                                /> 
                            ))
                        }            
                    </ScrollView>
                </View>
                <View style={styles.categoryContainer}>
                    <ScrollView 
                        //style={{maxHeight: 1000}}
                    >
                        <View style={styles.categoryWrapper}>
                            <Text style={{
                                width: '100%', 
                                marginTop: 5, 
                                marginLeft: 10, 
                                fontSize: 16}}>
                                    Tất cả danh mục
                            </Text>
                            {
                                listOfCategories.map(item => (
                                    <Card 
                                        title={item.name} 
                                        customContainerStyle={styles.customContainerCard}
                                        customTitleStyle={styles.customTitleCard}
                                        onPress={() => navigation.navigate('Products')}
                                    /> 
                                ))
                            }       
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
        fontSize: 10,
        textAlign: 'center'
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
        height: '100%',
        backgroundColor: colors.white,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
