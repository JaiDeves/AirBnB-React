/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import  transparentHeaderStyle  from '../styles/navigation'
import NavBarButton from '../components/buttons/navBarButton'

import {
    Text,
    View,
    Image, 
    StyleSheet,
    TouchableHighlight
} from 'react-native';



export default class LoggedOut extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
      });

    onFacebookPressed(){
        alert("Facebook button pressed")
    }
    onCreateAccountPress(){
        alert("createAccount button pressed")
    }
    moreOptionPress(){
        alert("more button pressed")
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo} />
                        <Text style={styles.welcomText}>Welcome to Airbnb</Text>
                        <RoundedButton 
                        text="Continue with Facebook"
                        textColor={colors.green01} 
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                        handleOnPress={this.onFacebookPressed}>
                        </RoundedButton>

                        <RoundedButton 
                        text="Create Account"
                        textColor={colors.white} 
                        handleOnPress={this.onCreateAccountPress}>
                        </RoundedButton>

                        <TouchableHighlight 
                        style={styles.moreOptionsButton}
                        onPress={this.moreOptionPress}>
                            <Text style={styles.moreOptionsButtonText}>More Option</Text>
                        </TouchableHighlight>
                        
                        <View style={styles.termsAndConditions}>
                            <Text style={styles.termsText}>By Tapping continue, Create account or More</Text>    
                            <Text style={styles.termsText}>options, </Text>    
                            <Text style={styles.termsText}>I agree to Airbnb's </Text>    
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>Terms of service</Text>
                            </TouchableHighlight>

                            <Text style={styles.termsText}>, </Text>    
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>Payment Terms of Service</Text>
                            </TouchableHighlight>

                            <Text style={styles.termsText}>, </Text>    
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>Privacy Policy</Text>
                            </TouchableHighlight>
                            
                            <Text style={styles.termsText}>, and </Text>    
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                            </TouchableHighlight>
                            <Text style={styles.termsText}>.</Text>    
                        </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.green01
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeWrapper: {
        flex: 1,
        marginTop: 20,
        padding: 20
    },
    welcomText:{
        fontSize:30,
        color:colors.white,
        fontWeight:'300',
        marginBottom:40
    },
    facebookButtonIcon:{
        color:colors.green01,
        position:'relative',
        left:20,
        zIndex:8
    },
    moreOptionsButton:{
        marginTop:15
    },
    moreOptionsButtonText:{
        color:colors.white,
        fontSize:16
    },
    termsAndConditions:{
        flexWrap:'wrap',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:30
    },
    termsText:{
        color:colors.white,
        fontSize:12,
        fontWeight:'600'
    },
    linkButton:{
        borderBottomWidth:1,
        borderBottomColor:colors.white
    }

});