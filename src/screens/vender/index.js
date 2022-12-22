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


const Vendor = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  const [visible, setVisible] = React.useState(false);
  const [search, setSearch] = React.useState("");
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
  const handlesearch = () => {
    setSearch("");
  };
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

  const DATA = [
    {
      name: "Glynden kenzie",
      days: "Today",
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
    {
      name: "Sven Kampka",
      days: "Yesterday",
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
    {
      name: "LA Film School",
      days: "Tomarrow",
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
    {
      name: "Matthew Grace",
      days: "Friday",
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`my-2 `}>
        <Text style={tw`text-[#000] text-center	 text-[3.5]  px-15 font-normal`}>{item.name}</Text>
        <View style={tw`flex-row`}>
          <View style={tw`flex-row`}>
            <Image source={ImageIcons.calendar_icon} style={tw`w-4 h-4`} />
            <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{item.days}</Text>
          </View>
          <View style={tw`flex-row`}>

          </View>
        </View>
        <View style={tw`my-2 bg-white`}>

        </View>

      </TouchableOpacity>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={{ paddingBottom: 0 }}>
        <View >
          <View style={tw`bg-white m-4 rounded-[2] p-3 px-5`}>
            <View style={tw`border-b border-[#ccc]`}>
              <TextInput
                value={search}
                placeholder="Share work related content here..."
                onChangeText={(text) => setSearch(text)}
                style={styles.thumbnail_searchBar}
                onSubmitEditing={() => handlesearch()}
              />
            </View>
            <View style={tw`flex-row my-5`}>
              <View>
                <Image source={ImageIcons.camrea} style={tw`w-12 h-12`} />
              </View>
              <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1  mx-10`} onPress={() => setModalVisible(false)}>
                <Text style={tw`text-[#000] text-[3.5]  px-15 font-normal`}>New Post</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`m-4 `}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Vendor;
