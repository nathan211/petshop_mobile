import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { 
    Form, 
    FormField,
    SubmitButton,
    ErrorMessage, 
} from '../components/forms';
import colors from '../config/colors';
import Text from '../components/Text';   
import customerApi from '../api/customer'; 
import TextInput from '../components/TextInput';

const validationSchemaUpdateInfomation = Yup.object().shape({
    fullName: Yup.string().required('Bạn chưa nhập họ và tên'),
    address: Yup.string().required('Bạn chưa nhập địa chỉ'),
    phoneNumber: Yup.string().required('Bạn chưa nhập số điện thoại'),
    email: Yup.string().required('Bạn chưa nhập email').email('Sai định dạng email'),
});

const validationSchemaChangePassword = Yup.object().shape({
    password: Yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
    confirmPassword: Yup.string().required('Bạn chưa nhập lại mật khẩu')
        .min(6, 'Mật khẩu phải lớn hơn 6 ký tự')
        .test('confirmPassword','Mật khẩu xác nhận không chính xác!', function(value) {
        return this.parent.password === value;
    }),
});

function ProfileEditScreen({ navigation, currentUser }) {
    const [updateFailed, setUpdateFailed] = useState(false);
    console.log(currentUser);
    const handleSubmit = async ({fullName, address, phoneNumber, email}) => {
        try {
            console.log('pressed');
            console.log(currentUser._id);
            const result = await customerApi.updateUserInformation(currentUser._id, fullName, address, phoneNumber, email);
            if(result.ok){
                createAlert();
            }
        } catch (error) {
            console.log(error.message);
        }
        // setUpdateFailed(false);
        // console.log(result.data);
    }

    const handleChangePassword = async () => {
        console.log('pressed');
    } 

    const createAlert = () =>
    Alert.alert(
      "Thông báo!",
      "Cập nhật thông tin thành công.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: console.log("OK Pressed")}
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
                }}>Cập nhật thông tin</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Form
                        initialValues={{
                            fullName: currentUser.fullName,
                            address: currentUser.address,
                            phoneNumber: currentUser.phoneNumber,
                            email: currentUser.email, 
                        }}
                        validationShema={validationSchemaUpdateInfomation}
                        onSubmit={handleSubmit}
                    >
                        <ErrorMessage 
                            visible={updateFailed}
                            error="Cập nhật không thành công!"
                        />
                        <FormField 
                            autoCorrect={false}
                            autoCapitalize='none'
                            icon='user'
                            name='fullName'
                            placeholder='Họ và tên'
                            customContainerStyle={styles.customInputContainer}
                            customInputStyle={styles.customInput}
                            customInputStyle={styles.customInput}
                            placeholderTextColor={colors.medium} 
                            iconColor={colors.medium}
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
                        <FormField 
                            autoCorrect={false}
                            autoCapitalize='none'
                            icon='envelope'
                            name='email'
                            keyboardType='email-address'
                            placeholder='Email'
                            textContentType='emailAddress'
                            customContainerStyle={styles.customInputContainer}
                            customInputStyle={styles.customInput}
                            placeholderTextColor={colors.medium} 
                            iconColor={colors.medium}
                        />
                        <SubmitButton 
                            title='Cập nhật' 
                            customTitleStyle={styles.customTitleButton}
                            color='brown'
                            customTitleStyle={styles.customTitleButton}
                        />
                    </Form>
                </View>
                <View style={styles.inputContainer}>
                    <Form
                        initialValues={{
                            password: '',
                            confirmPassword: ''
                        }}
                        validationShema={validationSchemaChangePassword}
                        onSubmit={handleChangePassword}
                    >
                        <ErrorMessage 
                            visible={updateFailed}
                            error="Đỗi mật khẩu không thành công!"
                        />
                        
                        <FormField 
                            autoCorrect={false}
                            autoCapitalize='none'
                            icon='lock'
                            name='password'
                            placeholder='Mật khẩu'
                            textContentType='password'
                            secureTextEntry
                            customContainerStyle={styles.customInputContainer}
                            customContainerStyle={styles.customInputContainer}
                            customInputStyle={styles.customInput}
                            placeholderTextColor={colors.medium} 
                            iconColor={colors.medium}
                        />
                        <FormField 
                            autoCorrect={false}
                            autoCapitalize='none'
                            icon='lock'
                            name='confirmPassword'
                            placeholder='Nhập lại mật khẩu'
                            textContentType='password'
                            secureTextEntry
                            customContainerStyle={styles.customInputContainer}
                            customContainerStyle={styles.customInputContainer}
                            customInputStyle={styles.customInput}
                            placeholderTextColor={colors.medium} 
                            iconColor={colors.medium}
                        />
                        <SubmitButton 
                            title='Đỗi mật khẩu' 
                            customTitleStyle={styles.customTitleButton}
                            color='brown'
                            customTitleStyle={styles.customTitleButton}
                        />
                    </Form>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 10,
    },
    customTitleButton: {
        color: colors.white,
    },
    container: {
        backgroundColor: colors.lightPink,
    },
    customInput: {
        fontSize: 16,
    },
    customInputContainer: {
        borderWidth: 0,
        backgroundColor: colors.lightPink,
        borderRadius: 10,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 10,
        alignItems: 'center'
    },
    iconBackContainer: {
        width: '10%'
    },
    inputContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 10
    }
})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {
}

export default connect(mapStateToProps, mapDispatch)(ProfileEditScreen)
