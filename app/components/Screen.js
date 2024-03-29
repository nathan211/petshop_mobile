import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={[styles.view, style]}>
                { children }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        flex: 1
    }
})

export default Screen;