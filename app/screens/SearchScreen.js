import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import TextInput from '../components/TextInput';
import productApi from '../api/product';

export default function SearchScreen({ navigation }) {
    const [searchTerm , setSearchTerm] = useState('');

    const handleSubmitEditting = async () => {
        try {
            const result = await productApi.search(searchTerm);

            if(result.ok){
                navigation.navigate('Products', result.data);
            }
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput 
                    icon='search'
                    iconColor={colors.medium} 
                    placeholder='Tìm kiếm'
                    placeholderTextColor={colors.medium}
                    customContainerStyle={styles.customContainerStyle}
                    customInputStyle={styles.customInputStyle}
                    onSubmitEditing={handleSubmitEditting}
                    onChangeText={text => setSearchTerm(text)}
                    autoFocus
                />
                <ShoppingCart onPress={() => console.log('go to shopping cart')} />
            </View>
            <View style={styles.content}>
                <Text>Lịch sử tìm kiếm</Text>
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
    content: {
        padding: 10
    },
    customContainerStyle: {
        padding: 0,
        marginVertical: 0,
        backgroundColor: colors.white,
        borderRadius: 10,
        flex: 1,
    },
    customInputStyle: {
        padding: 3,
        color: colors.medium
    }
});
