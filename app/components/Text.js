import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({children, customStyle, ...otherProps}) {
    return (
        <Text
            style={[defaultStyles.text, customStyle]}
            {...otherProps}
        >
            {children}
        </Text>
    );
}