import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

import { 
    Form, 
    FormField,
    SubmitButton,
    ErrorMessage, 
} from '../components/forms';
import colors from '../config/colors';
import Text from '../components/Text';    

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Bạn chưa nhập họ và tên'),
    address: Yup.string().required('Bạn chưa nhập địa chỉ'),
    phoneNumber: Yup.string().required('Bạn chưa nhập số điện thoại'),
    email: Yup.string().required('Bạn chưa nhập email').email('Sai định dạng email'),
    password: Yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
    confirmPassword: Yup.string().required('Bạn chưa nhập lại mật khẩu')
        .min(6, 'Mật khẩu phải lớn hơn 6 ký tự')
        .test('confirmPassword','Mật khẩu xác nhận không chính xác!', function(value) {
        return this.parent.password === value;
    }),
});

export default function ProfileEdit({ navigation }) {
    const [updateFailed, setUpdateFailed] = useState(false);

    const handleUpdateUserInformation = async ({fullName, address, phoneNumber, email}) => {

        
        //setUpdateFailed(false);
        //console.log(result.data);
    }

    const handleChangePassword = async () => {
        
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
                            fullName: '',
                            address: '',
                            phoneNumber: '',
                            email: '', 
                        }}
                        validationShema={validationSchema}
                        onSubmit={handleUpdateUserInformation}
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
                        validationShema={validationSchema}
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
