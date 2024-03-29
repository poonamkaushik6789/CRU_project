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
  // const hideisaction = () => {
  //   setisaction(false);
  // };
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
  const DATA1= [
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
]
const DATA2 = [
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
]
const DATA3= [
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
]




  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
        <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
        <View style={tw` flex flex-column w-46`}>
        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
        <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
        </View>
    
        <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>
       
    

        </View>
      </View>
    );
  }
  const renderItem1 = ({ item, index }) => {
    return (
      <View>
        <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
        <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
        <View style={tw` flex flex-column w-46`}>
        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
        <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
        </View>
    
        <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>
       
    

        </View>
      </View>
    );
  }
  const renderItem2 = ({ item, index }) => {
    return (
      <View>
        <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
        <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
        <View style={tw` flex flex-column w-46`}>
        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
        <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
        </View>
    
        <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>
       
    

        </View>
      </View>
    );
  }
  const renderItem3 = ({ item, index }) => {
    return (
      <View>
        <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-0.5`} >
        <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
        <View style={tw` flex flex-column w-46`}>
        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
        <Text style={tw`text-[#808080] text-sm font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
        </View>
    
        <Text style={tw`text-center text-black text-xs font-semibold mt-12 `} >{item.text3}</Text>
       
    

        </View>
      </View>
    );
  }




  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>
        <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Today</Text></View>
        
        <View style={tw`mx-auto mt-6`}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Yesterday</Text></View>
          <View style={tw`mx-auto mt-6`}>
            <FlatList
              data={DATA1}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Friday</Text></View>
          <View style={tw`mx-auto mt-6`}>
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
          </View>
        

      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Notifications;
