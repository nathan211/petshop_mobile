import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'


import colors from '../config/colors'
import CumulativePoints from '../components/CumulativePoints'
import Chatting from '../components/Chatting'
import Category from '../components/Category'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import ShoppingCart from '../components/ShoppingCart'

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <SearchBar customStyle={styles.customStyle} />
                <ShoppingCart onPress={() => console.log('go to shopping cart')} />
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
                    <ScrollView 
                        style={styles.iconContainer}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <Card title='Product name here' subTitle={123456} />
                        <Card title='Product name here' subTitle={123456} />
                        <Card title='Product name here' subTitle={123456} />
                        <Card title='Product name here' subTitle={123456} />
                        <Card title='Product name here' subTitle={123456} />
                        <Card title='Product name here' subTitle={123456} />
                    </ScrollView>
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
        flexDirection: 'row',
        paddingVertical: 10,
    },
})
