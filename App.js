/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "react-redux";
// import LoggedOut from './src/screens/LoggedOut';
import ForgotPassword from './src/screens/ForgotPassword';
import { Root, configureStore } from './src/navigators/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore({})}>
        <Root />
      </Provider>
    );
  }
}
