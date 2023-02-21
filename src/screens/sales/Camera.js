import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons, Api } from '../../common';
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


const Camera = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const userArray = props?.route?.params?.user
  console.log("user====>>", userArray)

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




  const DATA3 = [
    {
      text2: 'Jonathan Williams',

      image: ImageIcons.womanclap,
      text1: 'Cinematographer',

    },
    
  ];

  const renderItem3 = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`mx-2 w-45`} onPress={() => props.navigation.navigate("Glyndenprofile",{userId : item?._id})}>
        <View style={tw` bg-white mt-5 p-5 items-center  rounded-[3] `} >
          <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>
          <View style={tw`items-center`}>

            {item?.profileImage != null ?
              <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
              :
              <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
            }
          </View>
          <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>
        </View>
      </TouchableOpacity>
    );
  }



  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>

      <View style={tw`mx-3 `}>
        <FlatList
          data={userArray}
          numColumns={2}
          renderItem={renderItem3}
          keyExtractor={item => item.id}
        />
      </View>

      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Camera;
