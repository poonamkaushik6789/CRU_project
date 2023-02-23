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


const Notifications = (props) => {
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
  const loginId = props?.loginCredentials?.data?._id

  useEffect(() => {
    props.getnotification(loginId);
    console.log("props.getnotificationlist======>>>", props?.getnotificationlist);

  }, [])
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };



  const DATA = [
    {

      image: ImageIcons.womanclap,
      text1: 'Sarah Orefice',
      text2: 'Like your post',
      text3: '8:44 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Jonathan Williams',
      text2: 'Commented on your post',
      text3: '6:29 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Jianna Maarten',
      text2: 'Like your post',
      text3: '03:11 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'John Hafner',
      text2: 'Commented on your post',
      text3: '12:42 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Sven Campaka',
      text2: 'Like your post',
      text3: '11:17 am',

    },

  ];




  const renderItem = ({ item, index }) => {
    return (
      <View>

        <View style={tw`bg-white rounded w-full mx-2 flex-row mb-0.5 p-2 py-4`} >
          <View style={tw`w-2/12 items-center`}>
            {item?.from?.profileImage != null ?
              <Image source={{ uri: `${Api.imageUri}${item?.from?.profileImage}` }} style={tw`w-15 h-15 rounded-full	mt-1`} />
              :
              <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full	mt-1`} />
            }
          </View>
          <View style={tw`flex-row	w-10/12`}>
            <View style={tw` w-9/12`}>
              <Text style={tw` text-black text-base font-bold ml-2`} >{item?.from?.fullName}</Text>
              <Text style={tw`text-[#808080] text-sm font-semibold  ml-2`} >{item.message}</Text>
            </View>
            <View style={tw` w-3/12 pr-5`}>
              <Text style={tw`text-black text-xs text-right	 font-semibold  `} >{moment(item?.createdAt).format("h:mm a")}</Text>
            </View>
          </View>  

        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>
        <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Today</Text></View>

        <View style={tw`mx-3 mt-6`}>
          <FlatList
            data={props?.getnotificationlist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>



      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Notifications;
