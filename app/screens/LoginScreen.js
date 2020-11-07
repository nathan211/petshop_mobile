import React, { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/colors';
import { Form, SubmitButton, ErrorMessage } from '../components/forms';
import FormField from '../components/forms/FormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Bạn chưa nhập email').email('Sai định dạng email'),
    password: Yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
});

export default function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = ({email, password}) => {
        console.log('Submitted');
        console.log({email, password});
        setLoginFailed(true);
    }

    return (
        <Screen style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../assets/images/logopetshop.png')}/>
            </View>
            <ErrorMessage 
                visible={loginFailed}
                error="Email hoặc mật khẩu không chính xác!"
            />
            <Form 
                initialValues={{email: '', password: ''}}
                validationShema={validationSchema}
                onSubmit={handleSubmit}
            >
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
                <SubmitButton title='đăng nhập'/>
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.pink,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        width: 150,
        height: 150
    },
    fb: {
        margin: 0,
        marginVertical: 10,
    }
})
