import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';

import colors from '../config/colors';

function ShoppingCart({ onPress, customContainerStyle, cartItems }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, customContainerStyle]}>
                <Badge 
                    value={cartItems.length} 
                    status="primary" 
                    containerStyle={{ 
                        position: 'absolute', 
                        top: -4, 
                        right: -4, 
                        zIndex: 1,
                    }}
                    badgeStyle={{
                        borderWidth: 0,
                    }}
                />
                <Icon 
                    name='shopping-basket' 
                    size={22}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginHorizontal: 5
    }
})

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps, null)(ShoppingCart)
