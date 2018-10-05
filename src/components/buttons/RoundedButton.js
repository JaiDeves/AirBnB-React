import React, { Component } from 'react';
import PropTypes from 'prop-types';


import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
    render() {
        const { text, textColor, background, handleOnPress, icon } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <TouchableHighlight
                style={[{ backgroundColor }, styles.wrapper]}
                onPress={handleOnPress}>
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[{ color }, styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    handleOnPress: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center'
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

});