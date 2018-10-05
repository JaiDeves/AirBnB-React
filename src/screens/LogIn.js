import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import  ActionCreators  from "../redux/actions";
import colors from '../styles/colors';
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import  transparentHeaderStyle  from '../styles/navigation'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';


class LogIn extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
      });

    constructor(props) {
        super(props)
        this.state = {
            formValid: true,
            validEmail: false,
            validPassword: false,
            emailAddress: '',
            password:'',
            loadingVisible: false
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleNextButton = this.handleNextButton.bind(this)
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this)
    }
    handleNextButton() {
        this.setState({ loadingVisible: true })
        setTimeout(() => {
            const {emailAddress,password } = this.state;            
            if (this.props.logIn(emailAddress,password)) {
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
        // eslint-disable-next-line
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
    handlePasswordChange(password) {
        this.setState({password:password})
        if (!this.state.validPassword) {
            if (password.length > 4) {
                this.setState({ validPassword: true })
            }
        } else if (password.length <= 4) {
            this.setState({ validPassword: false })
        }
    }
    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state
        if (validEmail && validPassword) {
            return false
        }
        return true
    }

    render() {
        const { formValid, loadingVisible, validEmail, validPassword } = this.state;
        const showNotification = formValid ? false : true
        const backgroundColor = formValid ? colors.green01 : colors.darkOrange
        const notificationMarginTop = showNotification ? 10 : 0
        return (
            <KeyboardAvoidingView style={[{ backgroundColor: backgroundColor }, styles.wrapper]}
                behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus
                        >
                        </InputField>

                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}>
                        </InputField>
                    </ScrollView>

                    <View style={[{ opacity: showNotification ? 0 : 1 }]}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                            disabled={this.toggleNextButtonState()}>
                        </NextArrowButton>
                    </View>
                    <View style={[{ marginTop: notificationMarginTop }, styles.notificationWrapper]}>
                        <Notification
                            type="Error"
                            firstLine="Those credentials doesn't look right"
                            secondLine="Please try again"
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}></Notification>
                    </View>
                </View>
                <Loader
                    modalVisible={loadingVisible}
                    animationType={"fade"}></Loader>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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
    loginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0
    }


});
const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators,dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);