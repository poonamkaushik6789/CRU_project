import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
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


const Matthew = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const { width } = Dimensions.get('window');
  const [visible, setVisible] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);

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
  const handlelikecount = () => {

    setLikecount(likecount + 1)
  };

  const handleMsgcount = () => {
    setMsgcount(msgcount + 1)

  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  const handlesearch = () => {
    setSearch("");
  };
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

  const DATA = [
    {
      name: "Matthew Grace",
      days: "Friday",
      time: "1 hour ago",
      profile: ImageIcons.womanclap,
      image: ImageIcons.purifier,
      likeimg: ImageIcons.like,
      chatimg: ImageIcons.chat,
      message: "Just used the Briese light for thr first time! Very even light, a great key light when shooting commercials. As you can see we had an audience watching.",
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
  ];
  const DATA3 = [
    {

      image: ImageIcons.social,
      text1: 'Social Feed',

    },
    {
      image: ImageIcons.event,
      text1: 'Calender',

    },
    {
      image: ImageIcons.event,
      text1: 'About',

    },
    {
      image: ImageIcons.event,
      text1: 'About',

    },

  ];




  const renderItem3 = ({ item, index }) => {
    return (
      <View>
        <View style={tw`w-30 h-38 bg-white mb-6 ml-0.5 mt-5  z-10 `} >
          <Image source={item.image} style={tw`w-18 h-14 mt-10 mx-auto `} />
          <Text style={tw`text-center text-black text-base font-semibold mt-1`} >{item.text1}</Text>

        </View>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`my-2 `}>
        <Text style={tw`text-[#000] text-center	 text-[3.5]  px-15 font-normal`}>{item.name}</Text>

        <View style={tw`mt-7`}>

          <View style={tw`flex-row justify-between mx-4 `}>
            <View style={tw`flex-row`}>
              <Image source={ImageIcons.calendar_icon} style={tw`w-4 h-4`} />
              <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{item.days}</Text>
            </View>
            <View style={tw`flex-row`}>
              <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{item.time}</Text>
              <Image source={ImageIcons.timer} style={tw`w-5 h-5`} />
            </View>
          </View>
          <View style={tw`my-2 bg-white pt-14 px-3 mx-auto rounded-[2]`}>
            <View style={tw`py-2 `}>
              <Text style={tw`text-[#000] text-[3.3] font-normal`}>{item.message}</Text>
              <View style={tw`pt-4`}>
                <Image source={item.image} style={tw`w-full h-fit	`} />
              </View>
            </View>
            <View style={tw`flex-row justify-between	items-center	py-3`}>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity style={tw`items-center`} onPress={() => handlelikecount()}>
                  <Image source={item.likeimg} style={tw`w-8 h-8	`} />
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-row ml-2 items-center`} onPress={() => props.navigation.navigate("Likelist")}>
                  <View style={tw`	z-[20]`}>
                    <Image source={item.profile} style={tw`w-12 h-12 rounded-full`} />
                  </View>
                  <View style={tw`absolute	z-[10] left-6`}>
                    <Image source={item.profile} style={tw`w-12 h-12	rounded-full`} />
                  </View>
                  <View style={tw`absolute z-[0] left-12 bg-[#f2f2f2] w-12 h-12 rounded-full items-center justify-center`}>
                    <Text>+{likecount}</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View style={tw`flex-row `}>
                <TouchableOpacity style={tw`flex-row items-center`} onPress={() => props.navigation.navigate("Commentlist")}>

                  <View style={tw`absolute z-[0] `}>
                    <Image source={item.profile} style={tw`w-12 h-12	rounded-full`} />
                  </View>
                  <View style={tw`absolute	z-[10] right-6`}>
                    <Image source={item.profile} style={tw`w-12 h-12	rounded-full`} />
                  </View>
                  <View style={tw`	z-[20] right-12 bg-[#f2f2f2] w-12 h-12 rounded-full items-center justify-center`}>
                    <Text>+{likecount}</Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity style={tw`ml-0 `} onPress={() => handleMsgcount()}>
                  <Image source={item.chatimg} style={[tw`w-13 h-13	`, { tintColor: '#5fafcf' }]} />
                </TouchableOpacity>
              </View>

            </View>

          </View>

        </View>
        <View>

        </View>
        <View style={tw`absolute  inset-x-0.7/2	 top-8		 `}>
          {/* <View style={tw`w-3 h-3 bg-[#ff0000] rounded-full absolute left-15 `}></View> */}
          <View style={tw`w-3 h-3 bg-[#008000] rounded-full absolute left-17 `}></View>
          <View>
            <Image source={item.profile} style={tw`w-24 h-24 rounded-full	mt-1`} />
          </View>
        </View>

      </TouchableOpacity>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <ScrollView style={{ paddingBottom: 0, marginTop: 0 }}>
        <View >
          <View>
            <Image
              style={tw`w-full h-45 rounded-b-full z-30 absolute`} source={ImageIcons.rawartist} ></Image>
            <View
              style={tw`w-95 h-75 mx-auto bg-white `}
            // style={{width: "100%",
            // height: 200,bagroundColor:'white',
            // borderBottomRightRadius: width / 2,
            // borderBottomStartRadius: width / 2,
            // transform:[{scaleX: 2}]}}
            >

              <View style={tw`flex flex-row`}>
                <Image style={tw`w-15 h-15 mt-47 ml-9`} source={ImageIcons.cru} ></Image>
                <Image style={tw`w-15 h-15 mt-47 ml-43`} source={ImageIcons.cru} ></Image>
              </View>
              <View style={tw`flex flex-row`}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Cru")}>
                  <Text style={tw`text-black ml-11`}>My cru</Text>
                </TouchableOpacity>
                <View>
                  <Text style={tw`text-black ml-40`}>Connections</Text>
                </View>
              </View>
            </View>
            <View style={tw`ml-40 mt-33 absolute`}>
              <Image style={tw`w-25 h-30 rounded-full z-50 absolute`} source={ImageIcons.womanclap} ></Image>
            </View>
          </View>
          <View style={tw`flex flex-row mt-4 	justify-center		`}>
            <TouchableOpacity style={tw`  border-solid rounded-full bg-white`}>
              <Text style={tw`text-center my-auto text-xs p-2 px-3`}>camera operator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`mx-3	 border-solid rounded-full bg-white`}>
              <Text style={tw`text-center my-auto text-xs p-2 px-3`}>cinematographer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw` border-solid rounded-full bg-white`}><Text style={tw`text-center my-auto text-xs p-2 px-3`}>Gaffer</Text></TouchableOpacity>
          </View>
          <View style={tw`ml-5`}>
            <FlatList
              horizontal={true}
              data={DATA3}
              renderItem={renderItem3}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={tw`mx-5`}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>



      </ScrollView>
      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Matthew;
