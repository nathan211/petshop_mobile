import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Text from '../components/Text';
import colors from '../config/colors';
import Button from '../components/Button';

export default function ProductDetailsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/product.jpg')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text 
                        customStyle={styles.productName}
                        numberOfLines={2}
                    >
                        Bột Rắc Đồ Ăn Trị Hôi Miệng, Cao Răng Chó Mèo 1gx30 Gói – Cature Oral Care Pro – Mỹ
                        Bột Rắc Đồ Ăn Trị Hôi Miệng, Cao Răng Chó Mèo 1gx30 Gói – Cature Oral Care Pro – Mỹ
                    </Text>
                    <Text customStyle={styles.price}>123456</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text customStyle={styles.title}>Thông tin chi tiết</Text>
                    <View style={styles.categoryContainer}>
                        <Text customStyle={styles.detailTitle}>Danh mục: </Text>
                        <Text customStyle={styles.info}>Thức ăn cho chó</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text customStyle={styles.detailTitle}>Hãng: </Text>
                        <Text customStyle={styles.info}>Petto</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <Text customStyle={styles.detailTitle}>Số lượng kho: </Text>
                        <Text customStyle={styles.info}>123</Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text customStyle={styles.title}>Mô tả sản phẩm</Text>
                    <Text customStyle={styles.description}>
                        Cửa Hàng Đồ Cho Thú Cưng Giá Tốt, Khuyến Mại Hấp Dẫn, Giá Rẻ Bất Ngờ. Chuỗi Hệ Thống Cửa Hàng Uy Tín. Nhân Viên Nhiều Kinh Nghiệm. Khuyến Mãi Hấp Dẫn. Xem Ngay! Dịch Vụ Uy Tín. Giao Hàng Tận Nơi. Chuyên Viên Tay Nghề Cao. Giá Luôn Tốt Nhất.
                    </Text>
                </View>
            </ScrollView>
            <Button 
                title='Thêm vào giỏ hàng' 
                customContainerStyle={styles.customButton}
                customTitleStyle={styles.customTitle}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    customButton: {
        borderRadius: 0,
        marginBottom: 0,
        backgroundColor: colors.pink,
    },
    customTitle: {
        color: colors.light
    },
    productContainer: {
       // flex: 1
    },
    detailsContainer: {
        padding: 15,
        backgroundColor: colors.white,
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'justify',
        lineHeight: 25,
    },
    descriptionContainer: {
        padding: 15,
        backgroundColor: colors.white,
        marginTop: 10,
    },
    detailTitle: {
        width: '35%',
        fontSize: 16
    },
    itemDetail: {
        flexDirection: 'row',
        marginTop: 5,
    },
    categoryContainer: {
        backgroundColor: colors.light,
        flexDirection: 'row',
        marginTop: 10,
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    quantityContainer: {
        backgroundColor: colors.light,
        flexDirection: 'row',
        marginTop: 5,
        padding: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    imageContainer: {
        
    },
    info: {
        color: colors.black
    },
    titleContainer: {
        backgroundColor: colors.white,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 400
    },
    productName: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '600',
        width: '100%'
    },
    price: {
        color: colors.red,
        fontSize: 22,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        color: colors.black
    }
})
