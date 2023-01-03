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



const Salonwoman = (props) => {
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
      text: 'RAW  Annual Short Film Festival',
      image: ImageIcons.rawartist,
      View: 'JUN 3',
    },
    {
      text: 'Cine Gear Expo',
      image: ImageIcons.gearexpo,
      View: 'JUN 5',
    },
    {
      text: 'Produced By Conference',
      image: ImageIcons.conference,
      View: 'JUN 5',
    },
    {
      text: 'NewFilmmakers Los Angeles',
      image: ImageIcons.filmmakers,
      View: 'JUN 6',
    },
    {
      text: 'Los Angeles Film Festival',
      image: ImageIcons.filmfestival,
      View: 'JUN 7',
    },

  ];


  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`w-46 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-black`} >
        {/* <Image source={item.image} style={styles.manclap2} /> */}
        <Text style={tw`text-center pt-6 text-slate-600	`} >{item.text}</Text>
      </View>
    );
  }

  const renderItem1 = ({ item, index }) => {
    return (
      <View >
        <View style={tw`w-80 bg-white mb-6 ml-5 rounded-xl z-10 `} >
          <Image source={item.image} style={tw`w-80 h-40 mx-auto rounded-xl  `} />
          <Text style={tw`text-center py-4`} >{item.text}</Text>
        </View>
        <View style={tw`w-12 h-12 bg-white mt-4 ml-10 rounded-xl border-solid  absolute z-50`} >
          <Text style={tw`text-center pt-1 mb-2 text-black text-center text-justify	`} >{item.View}</Text>
        </View>
      </View>
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
      <Editprofile />
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Salonwoman;
