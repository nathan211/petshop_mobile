import React, { useRef } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'



import colors from '../config/colors'

export default function Category() {
    const scrollView = useRef();

    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Danh mục</Text>
            <ScrollView 
                ref={scrollView}
                style={styles.iconContainer}
                horizontal
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.backgroundIcon}>
                    <Icon
                        name='paw'
                        size={40}
                        color={colors.purple}
                    />
                </View>
                <View style={styles.backgroundIcon}>
                    <Icon
                        name='paw'
                        size={40}
                        color={colors.purple}
                    />
                </View>
                <View style={styles.backgroundIcon}>
                    <Icon
                        name='paw'
                        size={40}
                        color={colors.purple}
                    />
                </View>
                <View style={styles.backgroundIcon}>
                    <Icon
                        name='paw'
                        size={40}
                        color={colors.purple}
                    />
                </View>
                <View style={styles.backgroundIcon}>
                    <Icon
                        name='paw'
                        size={40}
                        color={colors.purple}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        paddingVertical: 15,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
       
    },
    iconContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 5
    },
    backgroundIcon: {
        width: 70,
        height: 70,
        backgroundColor: colors.white,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 1.00,
        elevation: 5,
        marginRight: 15
    },
})
