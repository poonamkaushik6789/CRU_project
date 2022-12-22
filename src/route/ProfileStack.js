/*
Profile stack for navigation
Created By: Ashish Swami
Created Date: 01/06/2022
*/
import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Coupons, Profile, Editprofile } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';

const Stack = createStackNavigator();

const ProfileStack = (props) => {
    const { navigation } = props;

    return (
        <>
            <Stack.Navigator
            >
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
                        headerTitle: "PROFILE",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.BLACK,
                            //  fontFamily: Fonts.RalewayExtraBold 
                            fontWeight: 'bold'
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="Editprofile"
                    component={Editprofile}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
                        headerTitle: "EDIT PROFILE",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.BLACK,
                            fontFamily: Fonts.RalewayExtraBold
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
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
            <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backIcon} style={styles.leftIcon} />
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
        tintColor: Colors.BLACK,
    }
});

export default ProfileStack;
