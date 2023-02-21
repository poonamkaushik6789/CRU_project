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


const Messages = (props) => {
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
  const loginId = props?.loginCredentials?.data?._id
  useEffect(() => {
    props.getmessage(loginId);
    console.log("props.getmessagelist======>>>", props?.getmessagelist);

  }, [])

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

      image: ImageIcons.womanclap,
      text1: 'Glynden Kenzie',
      text2: 'Yo I need my shoulder pad.. ',
      text3: '8:44 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Jonathan Williams',
      text2: 'Yo I need my shoulder pad..',
      text3: '6:29 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Jianna Maarten',
      text2: 'Yo I need my shoulder pad..',
      text3: '03:11 pm',

    },


  ];





  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Glynden")}>

          <View style={tw`bg-white rounded w-99	 flex-row mb-0.5 p-2 py-4`} >
            <View style={tw`w-18 items-center`}>
              {item?.fromUser?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.fromUser?.profileImage}` }} style={tw`w-15 h-15 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full	mt-1`} />
              }
            </View>
            <View style={tw`flex-row justify-between	w-80 pr-3`}>
              <View style={tw`w-50 `}>
                <Text style={tw` text-black text-base font-bold ml-2`} >{item?.fromUser?.fullName}</Text>
                <Text style={tw`text-[#808080] text-sm font-semibold  ml-2`} >{item.message}</Text>
              </View>
              <View style={tw`w-20 	`}>
                <Text style={tw`text-center text-black text-xs text-right	 font-semibold  `} >{moment(item?.createdAt).startOf('hour').fromNow()}</Text>
              </View>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    );
  }
  // const renderItem1 = ({ item, index }) => {
  //   return (
  //     <View>
  //       <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
  //         <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
  //         <View style={tw` flex flex-column w-46`}>
  //           <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
  //           <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
  //         </View>

  //         <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>



  //       </View>
  //     </View>
  //   );
  // }
  // const renderItem2 = ({ item, index }) => {
  //   return (
  //     <View>
  //       <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
  //         <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
  //         <View style={tw` flex flex-column w-46`}>
  //           <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
  //           <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
  //         </View>

  //         <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>



  //       </View>
  //     </View>
  //   );
  //}
  // const renderItem3 = ({ item, index }) => {
  //   return (
  //     <View>
  //       <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
  //         <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
  //         <View style={tw` flex flex-column w-46`}>
  //           <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
  //           <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
  //         </View>

  //         <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>



  //       </View>
  //     </View>
  //   );
  // }




  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>
        {/* <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Today</Text></View> */}

        <View style={tw`mx-3 mt-6`}>
          <FlatList
            data={props?.getmessagelist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        {/* <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Yesterday</Text></View> */}
        {/* <View style={tw`mx-auto mt-6`}>
          <FlatList
            data={DATA1}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Friday</Text></View> */}
        {/* <View style={tw`mx-auto mt-6`}>
          <FlatList
            data={DATA2}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Thursday</Text></View>
        <View style={tw`mx-auto mt-6 mb-10`}>
          <FlatList
            data={DATA3}
            renderItem={renderItem3}
            keyExtractor={item => item.id}
          />
        </View> */}


      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Messages;
