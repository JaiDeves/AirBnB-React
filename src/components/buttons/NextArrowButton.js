import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class NextArrowButton extends Component {
    render() {
        const { disabled, handleNextButton } = this.props
        const opacityStyle = disabled ? 0.2 : 0.6
        return (
            <View style={styles.nextButtonWrapper}>
            <TouchableHighlight style={[{opacity:opacityStyle},styles.button]}
                onPress={handleNextButton}
                disabled={disabled}>
                <Icon
                    name="angle-right"
                    colors={colors.green01}
                    size={30}
                    style={styles.icon}>
                </Icon>
            </TouchableHighlight>
            </View>
        );
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
    icon: {
        marginTop: -2,
        marginRight: -2
    },
    nextButtonWrapper: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor:colors.white
    }
});