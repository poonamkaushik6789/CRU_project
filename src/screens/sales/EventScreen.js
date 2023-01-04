import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
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



const EventScreen = (props) => {
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

    const DATA = [
    {
      text: 'Screenings',
      //  image:ImageIcons.salonman,
    },
    {
      text: 'Networking',
      //  image:ImageIcons.salonwoman,
    },
    {
      text: 'Training',
      //  image:ImageIcons.salonwoman,
    },

  ];

  const DATA1 = [
    {
      text: 'RAW Artists Annual Short Film Festival',
      image: ImageIcons.rawartist,
      month: 'JUN',
      date:'3',
    },
    {
      text: 'Cine Gear Expo',
      image: ImageIcons.gearexpo,
      month: 'JUN',
      date:'4',
    },
    {
      text: 'Produced By Conference',
      image: ImageIcons.conference,
      month: 'JUN',
      date:'3',
    },
    {
      text: 'NewFilmmakers Los Angeles',
      image: ImageIcons.filmmakers,
      month: 'JUN',
      date:'4',
    },
    {
      text: 'Los Angeles Film Festival',
      image: ImageIcons.filmfestival,
      month: 'JUN',
      date:'2',
    },

  ];


  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`w-46 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-black`} >
        <Text style={tw`text-center pt-6 text-slate-600	`} >{item.text}</Text>
      </View>
    );
  }

  const renderItem1 = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`m-3 mx-4`} onPress={() => props.navigation.navigate("Eventdetail")}>
        <View style={tw` bg-white  rounded-xl `} >
          <Image source={item.image} style={tw` h-45 w-5/5 rounded-t-xl  `} />
          <Text style={tw`text-center py-4`} >{item.text}</Text>
        </View>
        <View style={tw` bg-white m-6 rounded-[3] border-solid  absolute p-1 px-3`} >
          <Text style={tw`text-center text-black text-[3]`} >{item.month}</Text>
          <Text style={tw`text-center text-[4] font-bold text-black `} >{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={{ paddingBottom: 0, }}>
        <SafeAreaView style={styles.container}>

          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View >
            <FlatList

              data={DATA1}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
            />
          </View>
        </SafeAreaView>

      </ScrollView>
      
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default EventScreen;
