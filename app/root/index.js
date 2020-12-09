import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';

import AppNavigator from '../navigation/AppNavigator';
import AuthNavigator from '../navigation/AuthNavigator';
import navigationTheme from '../navigation/navigationTheme';

function Root({ currentUser }) {
    return (
        <NavigationContainer theme={navigationTheme}>
            {/* { currentUser ? <AppNavigator /> : <AuthNavigator /> } */}
            <AppNavigator />
        </NavigationContainer>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps, null)(Root)
