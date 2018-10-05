import {
    createStackNavigator,
  } from 'react-navigation';
  import LoggedOut from '../screens/LoggedOut';
  import LogIn from '../screens/LogIn';
  import ForgotPassword from '../screens/ForgotPassword';
  
  const AppRouteConfigs = createStackNavigator({
    LoggedOut: { screen: LoggedOut }, 
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword }
  });
  
  export default AppRouteConfigs;
  