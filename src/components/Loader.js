import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    View,
    Modal,
    StyleSheet,    
    Image
} from 'react-native';


export default class Loader extends Component {
    render() {
        const { animationType, modalVisible } = this.props;
        return (
            <Modal 
                animationType={animationType}
                transparent={true}
                visible={modalVisible}>
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        <Image
                            style={styles.loaderImage}
                            source={require('../img/greenLoader.gif')}>
                        </Image>
                    </View>
                </View>

            </Modal>
        );
    }
}
Loader.propTypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    loaderImage: {
        width: 90,
        height: 90,
        borderRadius: 25
    },
    loaderContainer: {
        width: 90,
        height: 90,
        borderRadius: 15,
        backgroundColor: colors.white,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45
    }
});