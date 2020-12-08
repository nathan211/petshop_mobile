import React, { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';

import authApi from '../api/auth';
import colors from '../config/colors';
import Button from '../components/Button';
import Screen from '../components/Screen';
import Text from '../components/Text';
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/forms';
import { signIn } from '../redux/authSlice';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Bạn chưa nhập email').email('Sai định dạng email'),
    password: Yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
});

function LoginScreen({ navigation, signIn }) {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);
        
        if(!result.ok) return setLoginFailed(true);

        setLoginFailed(false);
        const customer = jwtDecode(result.data);
        //console.log(customer.info);
        signIn(result.data, customer.info);
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
                    customInputStyle={styles.customInput}
                />
                <FormField 
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='lock'
                    name='password'
                    placeholder='Mật khẩu'
                    textContentType='password'
                    secureTextEntry
                    customInputStyle={styles.customInput}
                />
                <SubmitButton title='đăng nhập'/>
                <View style={styles.separatorContainer}>
                    <Text customStyle={styles.or}>Hoặc</Text>
                    <View style={styles.line} />
                </View>
                <Button 
                    title='đăng ký' 
                    onPress={() => navigation.navigate('Register')}
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
    customInput: {
        color: colors.white
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        backgroundColor: colors.light,
        width: 100,
        height: 100,
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

const mapDispatch = {
    signIn,
};
  

export default connect(null, mapDispatch)(LoginScreen)
