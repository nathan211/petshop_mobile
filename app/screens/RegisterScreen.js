import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import * as Yup from 'yup';

import customerApi from '../api/customer';
import colors from '../config/colors';
import Screen from '../components/Screen';
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/forms';

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

export default function LoginScreen({ navigation }) {
    const [registerFailed, setRegisterFailed] = useState(false);

    const handleSubmit = async ({fullName, address, phoneNumber, email, password}) => {
        const result = await customerApi.register(fullName, address, phoneNumber, email, password);

        if(!result.ok) return setRegisterFailed(true);

        setRegisterFailed(false);
        console.log(result.data);
    }

    return (
        <Screen style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image style={styles.image} source={require('../assets/images/paw.png')}/>
                </View>
                <Form 
                    initialValues={{
                        fullName: '',
                        address: '',
                        phoneNumber: '',
                        email: '', 
                        password: '',
                        confirmPassword: ''
                    }}
                    validationShema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <ErrorMessage 
                        visible={registerFailed}
                        error="Đăng ký không thành công!"
                    />
                    <FormField 
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon='user'
                        name='fullName'
                        placeholder='Họ và tên'
                    />
                    <FormField 
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon='address-book'
                        name='address'
                        placeholder='Địa chỉ'
                    />
                    <FormField 
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon='phone'
                        name='phoneNumber'
                        placeholder='Số điện thoại'
                        keyboardType='numeric'
                    />
                    <FormField 
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon='envelope'
                        name='email'
                        keyboardType='email-address'
                        placeholder='Email'
                        textContentType='emailAddress'
                    />
                    <FormField 
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon='lock'
                        name='password'
                        placeholder='Mật khẩu'
                        textContentType='password'
                        secureTextEntry
                    />
                    <FormField 
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon='lock'
                        name='confirmPassword'
                        placeholder='Nhập lại mật khẩu'
                        textContentType='password'
                        secureTextEntry
                    />
                    <SubmitButton title='đăng ký'/>
                </Form>
            </ScrollView>
        </Screen>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        backgroundColor: colors.pink,
    },
    customStyleTitle: {
        color: colors.light
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        backgroundColor: colors.light,
        width: 100,
        height: 100,
        borderRadius: 50
    },
})

