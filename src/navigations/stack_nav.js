import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import SignUp from '../screens/Signup';
import Register from '../screens/RegisterDetails';
import Forgotpassword from '../screens/Forgotpassword';
import Resetpassword from '../screens/Resetpassword';
import Settings from '../screens/Settings';
import { TabNavigation } from "./tab_nav";
import ContactUs from '../screens/Contactus';
import Notification from '../screens/Notification';
import CustomerSupport from '../screens/CustomerSupport';
import PreviousTickets from '../screens/PreviousTickets';
import EmployDetails from '../screens/EmploymentDetails';
import LeaveApplication from '../screens/LeaveApplication';
import AboutUs from '../screens/AboutUs';
import FAQs from '../screens/Faqs';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const userData = true;
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        gestureDirection: 'horizontal',
        // ...TransitionPresets.SlideFromRightIOS,
        // headerMode: "screen",

        headerShown: false,
      }}>
      {userData ? (
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
          <Stack.Screen name="Resetpassword" component={Resetpassword} />
          <Stack.Screen name="Dashboard" component={TabNavigation} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="CustomerSupport" component={CustomerSupport} />
          <Stack.Screen name="PreviousTickets" component={PreviousTickets} />
          <Stack.Screen name="EmployDetails" component={EmployDetails} />
          <Stack.Screen name="LeaveApplication" component={LeaveApplication} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Faqs" component={FAQs} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
