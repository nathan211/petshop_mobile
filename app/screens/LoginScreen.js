import React, { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Button from '../components/Button';
import Screen from '../components/Screen';
import Text from '../components/Text';
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/forms';

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
                <Image style={styles.image} source={require('../assets/images/paw.png')}/>
            </View>
            <Form 
                initialValues={{email: '', password: ''}}
                validationShema={validationSchema}
                onSubmit={handleSubmit}
            >
                <ErrorMessage 
                    visible={loginFailed}
                    error="Email hoặc mật khẩu không chính xác!"
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
                <SubmitButton title='đăng nhập'/>
                <View style={styles.separatorContainer}>
                    <Text customStyle={styles.or}>Hoặc</Text>
                    <View style={styles.line} />
                </View>
                <Button 
                    title='đăng ký' 
                    onPress={() => console.log('go to register')}
                    color='dark'
                    customStyleTitle={styles.customStyleTitle}
                />
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: colors.pink,
    },
    customStyleTitle: {
        color: colors.light
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        backgroundColor: colors.light,
        width: 150,
        height: 150,
        borderRadius: 75
    },
    or: {
        alignSelf: 'center', 
        color: colors.black,
        marginBottom: -10,
        paddingHorizontal: 5,
        zIndex: 1,
        backgroundColor: colors.pink,
        fontSize: 14
    },
    line: {
        alignSelf: 'center', 
        width: '70%',
        height: 1,
        backgroundColor: colors.dark,
    },
    separatorContainer: {
        marginBottom: 10
    }
})
