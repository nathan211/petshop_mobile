import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableWithoutFeedback, 
    ScrollView,
    Modal,
    TouchableOpacity,
    Alert } from 'react-native';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../components/Button';
import colors from '../config/colors';
import CartItem from '../components/CartItem';
import Text from '../components/Text';
import { decreaseHandler, increaseHandler } from '../redux/shoppingCartSlice';
import numberFormatter from '../utilities/numberFormatter';
import { 
    Form, 
    FormField,
    SubmitButton,
    ErrorMessage, 
} from '../components/forms';
import customerApi from '../api/customer';

const validationSchemaUpdateInfomation = Yup.object().shape({
    address: Yup.string().required('Bạn chưa nhập địa chỉ'),
    phoneNumber: Yup.string().required('Bạn chưa nhập số điện thoại'),
});

function ShoppingCartScreen({ 
    navigation, 
    cartItems, 
    decreaseHandler, 
    increaseHandler,
    totalMoney,
    currentUser }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [updateInformationFailed, setUpdateInformationFailed] = useState(false);

    const handleRequestModal = () => {
        setModalVisible(!modalVisible);
    }

    const handleSubmit = async ({ address, phoneNumber }) => {
        try {
            const result = await customerApi.updateShippingInformation(currentUser._id, address, phoneNumber);

            if(result.ok){
                createAlert();
            } else {
                setUpdatePasswordFailed(true);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const createAlert = () =>
    Alert.alert(
      "Thông báo!",
      "Cập nhật thành công.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: handleRequestModal}
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
                            color={colors.white}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <Text customStyle={{
                    width: '100%',
                    textAlign: 'center',
                    paddingRight: 80,
                    color: colors.white,
                }}>Giỏ hàng({cartItems.length})</Text>
            </View>
            <ScrollView style={styles.cartContainer}>
                <View style={styles.addressContainer}>
                    <View style={styles.addressWrapper}>
                        <Text customStyle={styles.addressTitle}>Địa chỉ giao hàng</Text>
                        <Text customStyle={styles.name}>{ currentUser.fullName + ' - ' + currentUser.phoneNumber }</Text>
                        <Text customStyle={styles.address}>{ currentUser.address }</Text>
                    </View>
                    <TouchableWithoutFeedback 
                        style={styles.deleteContainer}
                        onPress={handleRequestModal}
                    >
                        <Text customStyle={styles.delete}>Sửa</Text>
                    </TouchableWithoutFeedback>
                </View>
                { 
                    cartItems.map(item => {
                        return (
                            <CartItem 
                                key={item._id.toString()}
                                name={item.name} 
                                price={item.price} 
                                cartCounter={item.cartCounter}
                                onDecrease={() => decreaseHandler(item._id)}
                                onIncrease={() => increaseHandler(item._id)}
                                imageUrl={item.imageUrl}
                            />
                        );
                    }) 
                }
            </ScrollView>
            <View style={styles.orderContainer}>
                <View style={styles.totalContainer}>
                    <Text customStyle={styles.totalTitle}>Tổng tiền</Text>
                    <Text customStyle={styles.total}>{ numberFormatter(totalMoney) + ' ₫' }</Text>
                </View>
                <Button 
                    title='tiến hành đặt hàng' 
                    color='brown'
                    customTitleStyle={styles.customButtonTitle}
                    customContainerStyle={styles.customButtonContainer}
                    onPress={() => navigation.navigate('Order')}
                />
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleRequestModal}
            >
                <TouchableOpacity 
                    activeOpacity={1} 
                    onPressOut={handleRequestModal}
                >
                    <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableWithoutFeedback onPress={handleRequestModal}>
                            <View style={styles.closeModalIcon}>
                                <Icon
                                    name='arrow-left'
                                    size={25}
                                    color={colors.white}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.modalHeaderTitleContainer}>
                            <Text customStyle={styles.modalHeaderTitle}>Cập nhật thông tin</Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                            <Form
                                initialValues={{
                                    address: currentUser.address,
                                    phoneNumber: currentUser.phoneNumber,
                                }}
                                validationShema={validationSchemaUpdateInfomation}
                                onSubmit={handleSubmit}
                            >
                                <ErrorMessage 
                                    visible={updateInformationFailed}
                                    error="Cập nhật không thành công!"
                                />
                                <FormField 
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    icon='address-book'
                                    name='address'
                                    placeholder='Địa chỉ'
                                    customContainerStyle={styles.customInputContainer}
                                    customInputStyle={styles.customInput}
                                    placeholderTextColor={colors.medium} 
                                    iconColor={colors.medium}
                                    multiline
                                />
                                <FormField 
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    icon='phone'
                                    name='phoneNumber'
                                    placeholder='Số điện thoại'
                                    keyboardType='numeric'
                                    customContainerStyle={styles.customInputContainer}
                                    customInputStyle={styles.customInput}
                                    placeholderTextColor={colors.medium}
                                    iconColor={colors.medium} 
                                />
                                <SubmitButton 
                                    title='Cập nhật' 
                                    customTitleStyle={styles.customButtonTitle}
                                    color='brown'
                                    customTitleStyle={styles.customButtonTitle}
                                />
                            </Form>
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
    container: {
        flex: 1
    },
    closeModalIcon: {
        marginLeft: 10
    },
    addressContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: 80,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addressTitle: {
        fontSize: 14
    },
    address: {
        fontSize: 15
    },
    addressWrapper: {
        flex: 1
    },
    customInput: {
        fontSize: 16,
    },
    customInputContainer: {
        borderWidth: 0,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    customButtonTitle: {
        color: colors.white
    },
    customButtonContainer: {
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
    delete: {
        color: colors.secondary,
        fontSize: 14
    },
    name: {
        fontWeight: 'bold'
    },
    header: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 5,
        alignItems: 'center',
    },
    orderContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
    },
    inputContainer: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    iconBackContainer: {
        marginLeft: 5,
        width: '10%'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '10%',
        marginRight: 5,
    },
    totalContainer: {
        width: '40%',
        padding: 5,
    },
    totalTitle: {
        fontSize: 14
    },
    total: {
        fontWeight: 'bold',
        color: colors.red
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.lightPink,
        alignSelf: 'flex-end',
        marginTop: 55,
        elevation: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden'
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
})

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        totalMoney: state.cart.totalMoney,
        currentUser: state.auth.currentUser
    }
}

const mapDispatch = {
    decreaseHandler,
    increaseHandler
}

export default connect(mapStateToProps, mapDispatch)(ShoppingCartScreen)