import React from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    ScrollView, 
    TouchableWithoutFeedback,
    Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Button from '../components/Button';
import colors from '../config/colors';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Text from '../components/Text';
import { addToCart } from '../redux/shoppingCartSlice';
import numberFormatter from '../utilities/numberFormatter';
import UrlContstants from '../contstants/UrlContstant';

function ProductDetailsScreen({ route, navigation, addToCart, cartItems }) {
    const { name, price, quantity, description, imageUrl } = route.params;
    
    const handleAddToCart = () => {
        const product = route.params;
        addToCart(product);
        createAlert();
    }

    const createAlert = () =>
    Alert.alert(
      "Thông báo!",
      "Sản phẩm đã được thêm vào giỏ hàng.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Xem giỏ hàng", onPress: () => navigation.navigate('ShoppingCart') }
      ],
      { cancelable: false }
    );

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
                            color={colors.grey}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.iconContainer}>
                    <ShoppingCart 
                        onPress={() => navigation.navigate('ShoppingCart')}
                        customContainerStyle={styles.customIconContainer} 
                    />
                    <Chatting 
                        onPress={() => console.log('go to chatting')} 
                        customContainerStyle={styles.customIconContainer}
                    />
                </View>
            </View>
            <ScrollView style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: UrlContstants.HOSTING + imageUrl }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text 
                        customStyle={styles.productName}
                        numberOfLines={2}
                    >
                        { name }
                    </Text>
                    <Text customStyle={styles.price}>{ numberFormatter(price) + ' ₫' }</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text customStyle={styles.title}>Thông tin chi tiết</Text>
                    <View style={styles.categoryContainer}>
                        <Text customStyle={styles.detailTitle}>Danh mục: </Text>
                        <Text customStyle={styles.info}>Thức ăn cho chó</Text>
                    </View>
                    <View style={styles.brandContainer}>
                        <Text customStyle={styles.detailTitle}>Hãng: </Text>
                        <Text customStyle={styles.info}>Petto</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <Text customStyle={styles.detailTitle}>Số lượng kho: </Text>
                        <Text customStyle={styles.info}>{ quantity }</Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text customStyle={styles.title}>Mô tả sản phẩm</Text>
                    <Text customStyle={styles.description}>
                        { description }
                    </Text>
                </View>
            </ScrollView>
            <Button 
                title='Thêm vào giỏ hàng' 
                customContainerStyle={styles.customButton}
                customTitleStyle={styles.customTitle}
                icon='cart-plus'
                iconColor={colors.white}
                color='pink'
                onPress={handleAddToCart}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    customIconContainer: {
        backgroundColor: colors.grey,
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        borderRadius: 0,
        marginBottom: 0,
    },
    customTitle: {
        color: colors.white
    },
    categoryContainer: {
        backgroundColor: colors.light,
        flexDirection: 'row',
        marginTop: 10,
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
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
    brandContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    header: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantityContainer: {
        backgroundColor: colors.light,
        flexDirection: 'row',
        padding: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    iconBackContainer: {
        marginLeft: 5,
        width: '10%'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '20%',
        marginRight: 10,
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
        height: 350,
    },
    productName: {
        color: colors.black,
        fontWeight: '600',
        width: '100%',
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

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatch = {
    addToCart,
}

export default connect(mapStateToProps, mapDispatch)(ProductDetailsScreen)
