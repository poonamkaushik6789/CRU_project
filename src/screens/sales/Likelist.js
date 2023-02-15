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


const Likelist = (props) => {
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
      text: 'Matthew',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Ashley',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Brian',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Jianna',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Ed',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Sven',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Jonathan',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Sarah',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Paul',
      image: ImageIcons.womanclap,
    },
    {
      text: 'Pierce',
      image: ImageIcons.womanclap,
    },
    {
      text: 'John',
      image: ImageIcons.womanclap,
    },

  ];



  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`items-center mx-4`}>
        <Text style={tw`text-[#000] text-center	 text-[3.4] font-normal`}>{item.text}</Text>
        <View>
          <Image source={item.image} style={tw`w-23 h-23 rounded-full`} />
        </View>
      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={tw`flex-1	`}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>

        <View style={tw`m-4 bg-white rounded-[3] p-3 py-5`}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
          />
        </View>

      </ScrollView>
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Likelist;
