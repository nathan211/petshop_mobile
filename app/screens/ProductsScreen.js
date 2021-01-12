import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    View, ScrollView, 
    TouchableWithoutFeedback,
    Modal, 
    TouchableOpacity,
    FlatList } from 'react-native';
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
    const [currentPage, setCurrentPage] = useState(1);

    
    useEffect(() => {
        if(Array.isArray(route.params)){
            setListOfProducts(route.params);
        } else {
            getFilteredProductsByCategory();
        }
    }, []);

    const getFilteredProductsByCategory = async () => {
        try {
            const result = await productApi.getFilteredProductsByCategory(currentPage, route.params);
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
        setIsSelected(item);
    }

    const handleSubmit = async () => {
        if(isSelected === null) return;

        if(isSelected.value === 1){
            const result = await productApi.getSortedProductsLowToHigh();
            if(result.ok){
                setListOfProducts(result.data);
            }
        } else if(isSelected.value === 2){
            const result = await productApi.getSortedProductsHighToLow();
            if(result.ok){
                console.log(result.data);
                setListOfProducts(result.data);
            }
        }
        handleCloseModal();
    }

    const handleUnchosen = () => {
        setIsSelected(null);
    }

    const handleLoadMore = async () => {
        const result = await productApi.getFilteredProductsByCategory(currentPage + 1, route.params);
        
        setCurrentPage(currentPage + 1);
        setListOfProducts([...listOfProducts, ...result.data]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconBackContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
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
            <FlatList 
                style={styles.cardContainer}
                data={listOfProducts}
                keyExtractor={item => item._id.toString()}
                renderItem={({item}) => {
                    return (
                        <Card 
                            title={item.name}
                            subTitle={numberFormatter(item.price) + ' ₫'} 
                            onPress={() => navigation.navigate('ProductDetails', item)}
                            customContainerStyle={styles.customCardContainer}
                            customTitleStyle={styles.customCardTitle}
                            imageUrl={item.imageUrl}
                            key={item._id}
                        />
                    );
                }}
                numColumns={2}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
            />
                
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <TouchableOpacity 
                    activeOpacity={1} 
                    onPressOut={() => {setModalVisible(!modalVisible)}}
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
                        <TouchableWithoutFeedback onPress={handleUnchosen}>
                            <View>
                                <Text customStyle={{color: colors.white }}>Bỏ chọn</Text>
                            </View>
                        </TouchableWithoutFeedback>
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
                                            isSelected={isSelected === item ? true : false}
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
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
                </TouchableOpacity>
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
        marginBottom: 110,
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
        marginVertical: 5,
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
        width: '80%',
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
        marginLeft: 35,
    },
    filterTitle: {
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    }
});
