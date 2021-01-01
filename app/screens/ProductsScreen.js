import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../components/Button';
import colors from '../config/colors';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import productApi from '../api/product';
import numberFormatter from '../utilities/numberFormatter';
import Text from '../components/Text';
import FilterItem from '../components/lists/FilterItem';

export default function CategoryScreen({ navigation, route }) {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isSelected, setIsSelected] = useState(null);
    const [filterItems, setFilterItems] = useState([
        { label:'Thấp đến cao', value: 1},
        { label:'Cao đến thấp', value: 2}
    ]);

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
        setModalVisible(!modalVisible);
    }

    const handleCloseModal = () => {
        setModalVisible(!modalVisible);
    }

    const handleChooseFilterItem = (item) => {
        console.log(item);
        setIsSelected(item.value);
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
            <ScrollView>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableWithoutFeedback onPress={handleCloseModal}>
                            <View style={styles.closeModalIcon}>
                                <Icon
                                    name='window-close'
                                    size={25}
                                    color={colors.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.modalHeaderTitleContainer}>
                            <Text customStyle={styles.modalHeaderTitle}>Lọc sản phẩm</Text>
                        </View>
                    </View>
                    <View style={styles.modalContent}>
                        <View style={styles.filterByPrice}>
                            <Text customStyle={styles.filterTitle}>Giá: </Text>
                            <View style={styles.priceWrapper}>
                                {
                                    filterItems.map((item, key) => (
                                        <FilterItem 
                                            label={item.label}
                                            onPress={() => handleChooseFilterItem(item)}
                                            isSelected={isSelected === item.value ? true : false}
                                            key={key}
                                        />
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            title='Lọc' 
                            color='dark'
                            customTitleStyle={{color: colors.white}}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 5,
    },
    container: {},
    cardContainer: {
        paddingHorizontal: 20,
        marginBottom: 70,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 10,
        alignItems: 'center'
    },
    closeModalIcon: {
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
        alignItems: 'center',
        padding: 5,
        backgroundColor: colors.white,
        zIndex: 1,
    },
    filterWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.light,
        padding: 5,
        borderRadius: 5,
    },
    filterText: {
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold'
    },
    modalContent: {
        flex: 1,
    },
    modalContainer: {
        width: '70%',
        height: '100%',
        backgroundColor: colors.white,
        alignSelf: 'flex-end',
        elevation: 100,
    },
    modalHeader: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: colors.pink,
    },
    modalHeaderTitleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    modalHeaderTitle: {
        color: colors.white,
    },
    filterTitle: {
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    }
});
