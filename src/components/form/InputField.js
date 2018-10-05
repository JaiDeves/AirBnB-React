import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Easing,
    Animated
} from 'react-native';
import colors from '../../styles/colors';

export default class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
            scaleCheckMarkValue: new Animated.Value(0),
            showCheckmark: true
        }
        this.toggleShowPassword = this.toggleShowPassword.bind(this)
        this.scaleCheckMark = this.scaleCheckMark.bind(this)
    }
    scaleCheckMark(value) {
        Animated.timing(this.state.scaleCheckMarkValue,
            {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack
            }
        ).start()
    }
    toggleShowPassword() {
        this.setState({ secureInput: !this.state.secureInput })
    }
    render() {
        const { labelText, labelTextSize, labelColor,
            textColor, borderBottomColor, inputType,
            customStyle, onChangeText, showCheckmark,
            autoCapitalize, autoFocus } = this.props;

        const { secureInput, scaleCheckMarkValue } = this.state;
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputTextColor = textColor || colors.white;
        const _borderBottomColor = borderBottomColor || 'trasparent';
        const keyboardType = inputType === 'email' ? 'email-address' : 'default';
        const iconScale = scaleCheckMarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1.6, 1]
        })

        const scaleValue = showCheckmark ? 1 : 0
        this.scaleCheckMark(scaleValue)
        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ fontSize, color }, styles.label]}>{labelText}</Text>
                {
                    inputType === 'password' ?
                        <TouchableOpacity
                            style={styles.showButton}
                            onPress={this.toggleShowPassword}>
                            <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                        : null
                }
                <Animated.View style={[{ transform: [{ scale: iconScale }] }, styles.checkMarkWrapper]}>
                    <Icon
                        name="check"
                        color={colors.white}
                        size={20}>
                    </Icon>
                </Animated.View>

                <TextInput                    
                    style={[{ color: inputTextColor, borderBottomColor: _borderBottomColor }, styles.inputField]}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoFocus={autoFocus}
                    autoCorrect={false}>                    
                </TextInput>
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    showCheckmark: PropTypes.bool.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.bool
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    label: {
        fontWeight: '700',
        marginBottom: 10
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    showButton: {
        position: 'absolute',
        right: 0
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '600'
    },
    checkMarkWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 10
    }

});