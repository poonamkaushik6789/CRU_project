/*
Vendor stack
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import React, { Fragment, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Vendor, Ucsafe, Safeservice, Massagewomen, Massagemen, Hairwomen, Cleankitbath, Plumber, waterpurifier, Cleaning, Homerepair, Pestcontrol } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';

const Stack = createStackNavigator();

const VendorStack = (props) => {
  const { navigation } = props;

  return (
    <>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Vendor"
          component={Vendor}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <Image source={ImageIcons.mor} style={{ width: 20, height: 21, right: 20 }} />
              </View>
            ),
            headerTitle: "Salon For Man",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Ucsafe"
          component={Ucsafe}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "UC Safe",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Safeservice"
          component={Safeservice}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "UC Safe Services",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Massagewomen"
          component={Massagewomen}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem1 navigation={navigation}  isMenu={true}/>,
            headerTitle: "Massage Therapy for Women",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />

        <Stack.Screen
          name="Massagemen"
          component={Massagemen}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Massage Therapy for Men",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Hairwomen"
          component={Hairwomen}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Hair Service for Women",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Cleankitbath"
          component={Cleankitbath}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Bathroom and Kitchen Cleaning",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Plumber"
          component={Plumber}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Plumbers",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="waterpurifier"
          component={waterpurifier}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Water Purifier",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Cleaning"
          component={Cleaning}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Cleaning",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Homerepair"
          component={Homerepair}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Home Repair",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="Pestcontrol"
          component={Pestcontrol}
          options={({ navigation }) => ({
            headerShown: true,
            //headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitle: "Pest Control",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.BLACK, },
            headerStyle: { backgroundColor: "#dedede", elevation: 0, shadowOpacity: 0 },
          })}
        />
      </Stack.Navigator>
    </>
  );
};

const LeftMenuItem = ({ navigation, isMenu }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isMenu) {
          navigation?.toggleDrawer()
        } else {
          navigation?.goBack();
        }
      }}
      style={styles.leftButton}
    >
      <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backIcon} style={[styles.leftIcon, { tintColor: isMenu ? Colors.BLACK : Colors.WHITE }]} />
    </TouchableOpacity>
  )
}

const LeftMenuItem1 = ({ navigation, isMenu }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isMenu) {
          navigation?.toggleDrawer()
        } else {
          navigation?.navigate("Saleslisting");
        }
      }}
      style={styles.leftButton}
    >
      <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backIcon} style={[styles.leftIcon, { tintColor: isMenu ? Colors.BLACK : Colors.WHITE }]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  leftButton: {
    height: wp('6%'),
    marginLeft: 15,
    paddingHorizontal: 8,
    justifyContent: 'center'
  },
  leftIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginLeft: 15,
    tintColor: Colors.WHITE
  }
});

export default VendorStack;
