import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

import ActivityIndicator from '../components/AcitvityIndicator';
import AppNavigator from '../navigation/AppNavigator';
import AuthNavigator from '../navigation/AuthNavigator';
import navigationTheme from '../navigation/navigationTheme';
import { getUserToken } from '../api/ManagerStorage';
import { signIn } from '../redux/authSlice';

function Root({ currentUser, signIn }) {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        refreshToken();
    }, []);

    async function refreshToken(){
        try {
            const token = await getUserToken();
            const user = await jwtDecode(token);
            signIn(token, user.info);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    } 

    // if(isLoading){
    //     return <ActivityIndicator />
    // }
 
    return (
        <NavigationContainer theme={navigationTheme}>
            { currentUser ? <AppNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

const mapDispatch = {
    signIn,
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps, mapDispatch)(Root)
