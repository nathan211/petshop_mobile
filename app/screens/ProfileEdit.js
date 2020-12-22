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
    // password: Yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
    // confirmPassword: Yup.string().required('Bạn chưa nhập lại mật khẩu')
    //     .min(6, 'Mật khẩu phải lớn hơn 6 ký tự')
    //     .test('confirmPassword','Mật khẩu xác nhận không chính xác!', function(value) {
    //     return this.parent.password === value;
    //}),
});

export default function ProfileEdit({}) {
    const [updateFailed, setUpdateFailed] = useState(false);

    const handleSubmit = async ({fullName, address, phoneNumber, email}) => {

        setUpdateFailed(false);
        console.log(result.data);
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
            <Form
                initialValues={{
                    fullName: '',
                    address: '',
                    phoneNumber: '',
                    email: '', 
                    // password: '',
                    // confirmPassword: ''
                }}
                validationShema={validationSchema}
                onSubmit={handleSubmit}
            >
                <ErrorMessage 
                    visible={updateFailed}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pink
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
})
