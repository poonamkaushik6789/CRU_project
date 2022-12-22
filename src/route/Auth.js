import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import {
  Registration,
  Login,
  OTPVerification,
  StoreOwner,
  Forgotpassword,
  ResetPassword,
  Step1
} from '../container';
import Colors from '../common/Color';
import { connect } from 'react-redux';


const Stack = createStackNavigator();

const Auth = (props) => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Forgotpassword"
        component={Forgotpassword}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Step1"
        component={Step1}
        options={{ title: '', headerShown: false }}
      />
    </Stack.Navigator>
  );
};


const mapStateToProps = (state) => ({
  defaultAuthScreen: state.auth.defaultAuthScreen,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

// export default Auth;
