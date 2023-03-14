/*
Contains functionality to manage drawer navigation before and after login based on login auth redux variable
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import React, { useEffect, useState } from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VendorStack from './VendorStack';
import SalesStack from './SalesStack';
import { ImageIcons, Colors, Fonts } from '../common';
import { logout } from '../redux/actions/Auth'
import { StackActions } from '@react-navigation/native';
import tw from 'twrnc';

const Drawer = createDrawerNavigator();

/*
Custom Drawer left side bar
Created By: Ashish Swami
Created Date: 01/06/2022
*/

const CustomDrawer = (props) => {
  console.log('props?.loginCredentials:', props?.loginCredentials)
  //Local states
  const [currentItem, setCurrentItem] = useState("Vendor");

  const onItemSelection = (routeName) => {
    setCurrentItem(routeName);
  }
  useEffect(() => {
    props?.navigation?.closeDrawer();
  }, [])

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: 300,
          flex: 1
        },
      }}
      openByDefault={false}
      initialRouteName={"Vendor"}
      drawerContentOptions={{
        activeTintColor: Colors.GREEN,
        inactiveTintColor: Colors.WHITE,
        activeBackgroundColor: Colors.WHITE,
      }}
      drawerContent={prop => <CustomDrawerContent prop={prop} rootProps={props} currentItem={currentItem} onItemSelection={onItemSelection} />}
    >
      <Drawer.Screen
        name="Vendor"
        component={VendorStack}
        options={({ navigation }) => ({
          //drawerIcon: ({ focused }) => <DrawerLeftIcon focused={focused} icon={ImageIcons.venderIcon}  />,
          drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='Logs' />,
        })}
      />

      <Drawer.Screen
        name="Saleslisting"
        component={SalesStack}
        options={({ navigation }) => ({
          //drawerIcon: ({ focused }) => <DrawerLeftIcon focused={focused} icon={ImageIcons.venderIcon}  />,
          drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='Saleslisting' />,

        })}
      />
    </Drawer.Navigator >
  );
};


/*
Custom Drwaer Content
Created By: Ashish Swami
Created Date: "01/06/2022"
*/

const CustomDrawerContent = ({ prop, rootProps, currentItem, onItemSelection }) => {

  const dispatch = useDispatch()

  const { logoutIcon, logo, search, calendar_icon, notification_icon, accountIcon } = ImageIcons;
  const { loginCredentials, storeAutofilInfo, verificationStatus, verificationSteps } = rootProps;
  const completedVerification = (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) ? true : false;



  useEffect(() => {
    if (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) {
      setTimeout(() => {
        if (verificationSteps === 3 && completedVerification) {
          prop.navigation.dispatch(
            StackActions.replace('CouponsStack')
          );
        }
      }, 1000);
    }
  }, [verificationStatus])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: '10%', marginBottom: '7%', marginLeft: '2%', marginRight: '2%', borderRadius: 10, justifyContent: 'center', }} >
      {/* <View style={styles.drawerHeader}>
        <Image source={logo} style={styles.logo} />        
      </View> */}

      <DrawerContentScrollView {...prop} >
        <View style={styles.drawerItemsContainer}>
          <View style={{ flexDirection: 'row', marginTop: '17%', height: '20%' }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '0%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Notifications' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-15 h-15`} source={ImageIcons.notifications} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Notifications' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Notifications' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '0%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Messages' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-15`} source={ImageIcons.msgs} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Messages' />}
                style={{ opacity: 1, width: 100 }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Messages' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '20%', }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                //prop.navigation.navigate('Saleslisting');
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Vendor' }],
                });
                onItemSelection("Saleslisting");

              }}>

              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-15`} source={ImageIcons.social} />
              </View>

              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Social Feed' />}
                style={{ opacity: 1, width: 100 }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();

                  //prop.navigation.navigate('Saleslisting');
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Vendor' }],
                  });
                  onItemSelection("Saleslisting");

                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'EventScreen' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-15`} source={ImageIcons.event} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Events' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'EventScreen' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '20%', }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Cru' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-16`} source={ImageIcons.cru} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='My Cru' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Cru' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Projects' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-15`} source={ImageIcons.project} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Projects' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Projects' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', height: '20%', }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Lighting' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-15`} source={ImageIcons.job} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Job Match' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Lighting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }} onPress={() => { prop.navigation.closeDrawer(); rootProps.logout(); }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>

                <Image style={tw`w-17 h-15`} source={ImageIcons.setting} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Logout' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => { prop.navigation.closeDrawer(); rootProps.logout(); }}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Searchjobs' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>
                <Image style={tw`w-17 h-15`} source={ImageIcons.search} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Search Jobs' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Searchjobs' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity> */}

          </View>
          <View style={{ flexDirection: 'row', height: '18%' }}>
            {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Locator' }],
                });
                onItemSelection("Saleslisting");
              }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>

                <Image style={tw`w-17 h-15`} source={ImageIcons.locator} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Locator' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Locator' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', width: '50%', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              <View style={{ width: '100%', padingTop: '25%', alignItems: 'center', justifyContent: 'center', }}>

                <Image style={tw`w-17 h-15`} source={ImageIcons.setting} />
              </View>
              <DrawerItem
                key="Saleslisting"
                label={({ focused, color }) => <DrawerItemLabel label='Settings' />}
                style={{ opacity: 1, width: 100, }}
                // icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
                // } />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  prop.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Saleslisting' }],
                  });
                  onItemSelection("Saleslisting");
                }}
              />
            </TouchableOpacity> */}

          </View>
          {/* <DrawerItem
            key="Saleslisting"
            label={({ focused, color }) => <DrawerItemLabel label='Sales listing' />}
            style={{ opacity: 1, }}
            icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Saleslisting" ? true : false} icon={ImageIcons.viewIcon
            } />}
            onPress={() => {
              prop.navigation.toggleDrawer();
              onItemSelection("Saleslisting");
              prop.navigation.navigate('Saleslisting');
            }}
          /> */}

          {/* <DrawerItem
            label={({ focused }) => <DrawerItemLabel label='Logout' />}
            style={{ height: 50, width: '100%', padding: 15, marginBottom: '5%' }}
            icon={({ focused }) => <DrawerLeftIcon icon={ImageIcons.logoutIcon} />}
            onPress={() => { prop.navigation.closeDrawer(); rootProps.logout(); }}
          /> */}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView >
  )
}

const DrawerLeftIcon = ({ focused, icon }) => {
  return (
    <Image
      resizeMode="contain"
      source={icon}
      style={{
        width: wp('8%'),
        height: wp('8%'),
        tintColor: focused ? Colors.BLACK : Colors.BLACK
      }}
    />
  )
}

const DrawerItemLabel = ({ focused, label }) => {
  return (
    <Text style={focused ? styles.activeLabel : styles.label}> {label}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginLeft: -20,
    width: 120,

    textAlign: 'center', marginTop: '-5%'
  },
  activeLabel: {
    fontSize: 16,
    color: Colors.GREEN,
    marginLeft: -20, marginTop: '-5%'
  },
  drawerHeader: {
    height: hp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '30%',
    flexDirection: 'row',
    paddingTop: Platform.OS === "ios" ? hp('2%') : hp('10%'),
  },
  logo: {
    width: '140%',
    resizeMode: 'contain'
  },
  notification_icon: {
    width: 70, height: 70, resizeMode: 'contain',
  },
  search_icon: {
    width: 50, height: 50, resizeMode: 'contain', tintColor: '#5fafcf'
  },
  calendar_icon: {
    width: 50, height: 50, resizeMode: 'contain', tintColor: '#5fafcf'
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    //paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  leftIcon: {
    width: wp('5%'),
    height: wp('5%'),
    //marginLeft: 15,
    tintColor: Colors.WHITE
  },
  icon: {
    width: wp('8%'),
    height: wp('8%'),
  },
  info: {
    width: wp('3%'),
    height: wp('3%'),
    resizeMode: 'contain'
  },
  drawerItemsContainer: {
    height: Platform.OS === "ios" ? hp('85%') : hp('85%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: Platform.OS === "ios" ? hp('-5%') : hp('-3%'),

  }
});

const mapStateToProps = (state) => ({
  loginCredentials: state.auth.loginCredentials,
  // isStore: state.vendor.isStore,
  verificationStatus: state.vendor.verificationStatus,
  verificationSteps: state.vendor.verificationSteps,
  storeAutofilInfo: state.vendor.storeAutofilInfo,
  storeImageUploadInfo: state.vendor.storeImageUploadInfo,
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
