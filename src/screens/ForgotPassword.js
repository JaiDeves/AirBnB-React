import React, { Component } from 'react';
import colors from '../styles/colors';
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formValid: true,
            loadingVisible: false,
            validEmail: false,
            emailAddress: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.gotoNextStep = this.gotoNextStep.bind(this)
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
    }

    gotoNextStep() {
        this.setState({ loadingVisible: true })
        setTimeout(() => {
            if (this.state.emailAddress === 'Hi@gmail.com') {
                this.setState({ formValid: true, loadingVisible: false }, () => {
                    console.warn('success');
                })
            } else {
                this.setState({ formValid: false, loadingVisible: false })
            }
        }, 2000);
    }
    handleCloseNotification() {
        this.setState({ formValid: true })
    }
    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({ emailAddress: email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
        }
    }
    render() {
        const { loadingVisible, formValid, validEmail } = this.state;
        const _backgroundColor = formValid ? colors.green01 : colors.darkOrange
        const showNotification = formValid ? false : true
        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: _backgroundColor }, styles.wrapper]}
                behavior='padding'>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.forgotPasswordHeading}>Forgot your password</Text>
                        <Text style={styles.forgotPasswordSubHeading}>Enter your email to find your account!</Text>

                        <InputField
                            customStyle={{ marginBottom: 30 }}
                            textColor={colors.white}
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}>
                        </InputField>
                    </ScrollView>


                    <NextArrowButton
                        handleNextButton={this.gotoNextStep}
                        disabled={!validEmail}>
                    </NextArrowButton>
                </View>
                <Loader
                    modalVisible={loadingVisible}
                    animationType="fade">
                </Loader>
                <View styles={styles.notificationWrapper}>
                    <Notification
                        showNotification={showNotification}
                        type="Error"
                        firstLine="No account exists for the requested"
                        secondLine="email address."
                        handleCloseNotification={this.handleCloseNotification}></Notification>
                </View>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    forgotPasswordHeading: {
        fontSize: 28,
        fontWeight: '300',
        color: colors.white
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    forgotPasswordSubHeading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0        
    }

});