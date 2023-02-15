import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Glyndenprofile = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const { width } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [connectVisible, setConnectVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);
  const [checked, setChecked] = React.useState('first');


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
  const handlemessagesend = () => {
    setMessage("");
    setModalVisible(false)
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

  const DATA2 = [
    {

      image: ImageIcons.social,
      text1: 'Camera operator',

    },
    {
      image: ImageIcons.event,
      text1: 'Cinematographer',

    },
    {
      image: ImageIcons.event,
      text1: 'Gaffer',

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

  const renderItem1 = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity style={tw`  border-solid rounded-full mx-2 bg-white`}>
          <Text style={tw`text-center my-auto text-xs p-2 px-3`}>{item.text1}</Text>
        </TouchableOpacity>
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
        {/* <View style={{
          position: "absolute",
          //left: "50%",
          //alignSelf:'center',
          transform: [{ scaleX: 1.3 }]}}>
          <View style={{
            width: 200,
            height: 270,
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 100,
            overflow: "hidden",
            transform: [{ scaleX: 5 }]
          }}>
            <Image
              source={ImageIcons.rawartist}
              style={{
                height: 270,
                width: '100%',
                //left: 25,
                position: "absolute",
                transform: [{ scaleX: 0.5 }]
              }}
            />
          </View>
        </View> */}

        <View style={{ height: '30%' }}>
          <View style={{ height: '45%', zIndex: 1, width: '100%', transform: [{ scaleX: 2 }], borderBottomStartRadius: 200, borderBottomEndRadius: 200, overflow: 'hidden', }}>

            <Image
              style={{
                width: '100%',
                transform: [{ scaleX: 0.5 }], resizeMode: 'cover',
                backgroundColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center'
              }} source={ImageIcons.rawartist} />

          </View>
          <View style={tw`w-96 h-60 mx-5 px-8 pt-30 top-40  bg-white  absolute overflow-hidden rounded-[2]	flex-row	justify-between`}>
            <TouchableOpacity style={tw`items-center	`} onPress={() => setModalVisible(!modalVisible)}>
              <Image style={tw`w-15 h-15 `} source={ImageIcons.cru} />
              <Text style={tw`text-black `}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setConnectVisible(!connectVisible)}>
              <Image style={tw`w-15 h-15  `} source={ImageIcons.cru} />
              <Text style={tw`text-black `}>Connect</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`ml-40 mt-45 z-50 absolute`}>
            <Image style={tw`w-30 h-30 rounded-full `} source={ImageIcons.womanclap} ></Image>
          </View>

          {/* <View>
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
          </View> */}

        </View>
        <View style={tw`ml-5`}>
          <FlatList
            horizontal={true}
            data={DATA2}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={tw`ml-5 mt-3`}>
          <FlatList
            horizontal={true}
            data={DATA3}
            renderItem={renderItem3}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={tw`mx-5`}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          style={tw`m-0`} >
          <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
            <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
              <View style={tw`flex-row justify-between items-center border-b border-[#ccc] p-4`}>
                <View>
                  <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' ></Text>
                </View>
                <View>
                  <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >Message</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                </TouchableOpacity>
              </View>
              <View style={tw`p-3`}>
                <View style={tw`mx-5`}>
                  <TextInput
                    style={tw`border-b	border-[#ccc] text-black	pl-7 h-15`}
                    placeholder="Type Your Message here...."
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholderTextColor={'#ccc'}
                    onSubmitEditing={() => handlemessagesend()}
                  />
                </View>
                <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mt-15 mx-10`} onPress={() => handlemessagesend()}>
                  <Text style={tw`text-[#000] text-[3.9] p-2 px-15 font-normal`}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={connectVisible}
          onRequestClose={() => {
            setConnectVisible(!connectVisible);
          }}
          style={tw`m-0`} >
          <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
            <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
              <View style={tw`flex-row justify-between items-center border-b border-[#ccc] p-4`}>
                <View>
                  <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' ></Text>
                </View>
                <View>
                  <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >Connect</Text>
                </View>
                <TouchableOpacity onPress={() => setConnectVisible(false)}>
                  <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                </TouchableOpacity>
              </View>
              <View style={tw`p-3`}>
                <View style={tw`mx-5`}>
                  <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >Add Matthew to My Network or My Cru</Text>
                  <View style={tw`flex-row items-center justify-around  my-3`}>
                    <View style={tw`items-center `}>
                      <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>My Network</Text>
                      <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        uncheckedColor={"#5fafcf"}
                        color={'#5fafcf'}
                      />
                    </View>
                    <View style={tw`items-center `}>
                      <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>My Cru</Text>
                      <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        uncheckedColor={"#5fafcf"}
                        color={'#5fafcf'}
                      />
                    </View>

                  </View>
                </View>
                <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mt-5 mx-10`} onPress={() => handlemessagesend()}>
                  <Text style={tw`text-[#000] text-[3.9] p-2 px-15 font-normal`}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </Modal>

      </ScrollView>
      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Glyndenprofile;