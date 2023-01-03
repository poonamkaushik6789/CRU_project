import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Commentlist = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  const [visible, setVisible] = React.useState(false);
  const [subMsg, onChangeText1] = React.useState("");
  const [msg, onChangeText2] = React.useState("");

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    //onlySmall:true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const [isaction, setisaction] = useState(true);



  const openPanel = () => {

    setIsPanelActive(true);
    setisaction(false);
  };

  const closePanel = () => {
    setIsPanelActive(false);
    setisaction(true);

  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  // const hideisaction = () => {
  //   setisaction(false);
  // };
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };



  const DATA = [
    {
      image: ImageIcons.salonwoman,
      text: 'Jonathan Williams',
      text1: 'I use the Briese all the time',
      time: '10 mins ago'
    },
    {
      image: ImageIcons.salonwoman,
      text: 'Jianna Maarten',
      text1: 'Just used that light on a Reebok commercial. Too soft in my opinion.',
      time: '10 mins ago'
    },
    {
      image: ImageIcons.salonwoman,
      text: 'John Hanfner',
      text1: 'Never seen it, is it an LED?',
      time: '10 mins ago'
    },

  ];



  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`mt-2`}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Air")} style={tw`flex-row justify-between	py-5 px-4 w-full `}>
          <View style={tw`flex-row items-center ml-2 w-3/12`}>
            <Image source={item.image} style={tw`w-20 h-20 rounded-full`} />
          </View>
          <View style={tw`flex-row items-center w-9.2/12	`}>
            <View style={tw`ml-2 w-11.3/12`}>
              <View style={tw`flex-row items-center	justify-between `}>
                <Text style={tw`text-[#000]	 text-[3.4] font-bold`}>{item.text}</Text>

                <View style={tw`	`}>
                  <Text style={tw`text-[#000] text-center	 text-[2.4] font-bold`}>{item.time}</Text>
                </View>
              </View>
              <Text style={tw`text-[#000] text-[3.4] font-normal`}>{item.text1}</Text>
            </View>

          </View>
        </TouchableOpacity>
        <View style={tw`border-b border-[#ccc]`}></View>
      </View>
    );
  }




  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>
        <View style={tw`bg-white m-4 rounded-[3]`}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Commentlist;
