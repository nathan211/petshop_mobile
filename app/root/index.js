import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

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

            if(user === null){
                return setIsLoading(false);
            }

            signIn(token, user.info);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
        }
    } 

    if(isLoading){
        return (
            <View style={styles.activityContainer}>
                <ActivityIndicator size="large" color="#FF7979" />
            </View>
        )
    }
 
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

const styles = StyleSheet.create({
    activityContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})

export default connect(mapStateToProps, mapDispatch)(Root)
