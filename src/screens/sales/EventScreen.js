import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
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



const EventScreen = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  const [socilfeed, setSocialfeed] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [subMsg, onChangeText1] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [eventdata, setEventdata] = React.useState(false);

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

  useEffect(() => {
    props.geteventcategory();
    props.getevent();
    console.log("props.geteventcategorylist======>>>", props?.geteventcategorylist);
    console.log("props.geteventlist======>>>", props?.geteventlist);
  }, [])

  const openPanel = () => {

    setIsPanelActive(true);
    setisaction(false);
  };

  const closePanel = () => {
    setIsPanelActive(false);
    setisaction(true);

  };
  const handletabchange = (id) => {

    props.getevent(socilfeed);
    setEventdata(true)
    setSocialfeed(id);
    console.log("id=======<><>", id)
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
      date: '3',
    },
    {
      text: 'Cine Gear Expo',
      image: ImageIcons.gearexpo,
      month: 'JUN',
      date: '4',
    },
    {
      text: 'Produced By Conference',
      image: ImageIcons.conference,
      month: 'JUN',
      date: '3',
    },
    {
      text: 'NewFilmmakers Los Angeles',
      image: ImageIcons.filmmakers,
      month: 'JUN',
      date: '4',
    },
    {
      text: 'Los Angeles Film Festival',
      image: ImageIcons.filmfestival,
      month: 'JUN',
      date: '2',
    },

  ];


  const renderItemCategory = ({ item, index }) => {
    return (
      <View>
        {socilfeed == item._id ?
          <TouchableOpacity style={tw`w-46 h-18 bg-[#fff] my-6 ml-5 rounded-xl border-solid border-t-8 border-[#000]`} onPress={() => handletabchange(item._id)}>
            <Text style={tw`text-center pt-6 text-slate-600	`} >{item.title}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={tw`w-46 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-[#fff]`} onPress={() => handletabchange(item._id)} >
            <Text style={tw`text-center pt-6 text-slate-600	`} >{item.title}</Text>
          </TouchableOpacity>
        }
      </View>

    );
  }

  const renderItemevent = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`m-3 mx-4`} onPress={() => props.navigation.navigate("Eventdetail", { eventid: item?._id })}>
        <View style={tw` bg-white  rounded-xl `} >
          <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw` h-45 w-5/5 rounded-t-xl `, { resizeMode: 'cover' }]} />
          <Text style={tw`text-center py-4`} >{item.title}</Text>
        </View>
        <View style={tw` bg-white m-6 rounded-[3] border-solid  absolute p-1 px-3`} >
          <Text style={tw`text-center text-black text-[3]`} >{moment(item?.createdAt).format('MMM')}</Text>
          <Text style={tw`text-center text-[4] font-bold text-black `} >{moment(item?.createdAt).format('d')}</Text>
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
            data={props?.geteventcategorylist}
            renderItem={renderItemCategory}
            keyExtractor={item => item.id}
          />
          <View >
            
              <FlatList
              data={props?.geteventlist}
              renderItem={renderItemevent}
              keyExtractor={item => item.id}
              extraData ={eventdata}
            />
            
            
          </View>
        </SafeAreaView>

      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default EventScreen;
