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
import CalendarPicker from 'react-native-calendar-picker';


const Commentlist = (props) => {
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
    const DATA2 = [
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


    const DATA = [
        {
            text1: 'June',
            text2: '9',
            text3: 'Music Video',
            text4: 'R&B Artist',
            text5: '$400',


        },
        {
            text1: 'June',
            text2: '13',
            text3: 'TV Commercial',
            text4: 'luxury Car Dealership',
            text5: '$400',
        },
        {
            text1: 'June',
            text2: '15-16',
            text3: 'Short Film',
            text4: 'Comic Con',
            text5: '$400',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',
            text5: '$400',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
           
            text4: 'Hip-Hop Artist',
            text5: '$400',


        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',
            text5: '$400',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',
            text5: '$400',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',
            text5: '$400',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',
            text5: '$400',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',
            text5: '$400',

        },
       

    ];
    

    const renderItem2 = ({ item, index }) => {
        return (
          <View style={tw`w-46 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-black`} >
            <Text style={tw`text-center pt-6 text-slate-600	`} >{item.text}</Text>
          </View>
        );
      }


    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-80 h-25 bg-white rounded-xl flex flex-row mb-6`} >
                    <View style={tw`w-18 h-18 bg-white mt-3 ml-3 flex flex-row  border-r-2 border-slate-100`} >
                         <View style={tw`flex flex-column`}>
                    <Text style={tw`text-center text-black text-base font-semibold mt-3 ml-3`} >{item.text1}</Text>
                    <Text style={tw`text-center text-black text-base font-bold mt-1 ml-3`} >{item.text2}</Text>
                 
                    </View>
                         </View>
                    <View style={tw`flex flex column  mt-4 w-42`}>
                    <Text style={tw` text-black text-base font-bold ml-4`} >{item.text3}</Text>
                    <Text style={tw`text-black text-xm font-semibold mt-4 ml-4 `} >{item.text4}</Text>
                    </View>
                    <View style={tw`w-14 h-14 bg-slate-200 mt-5  flex flex-row rounded-full`} >
                    <Text style={tw`text-black text-base font-semibold mx-auto mt-4 `} >{item.text5}</Text></View>
                    </View>
                </View>
                );
  }
  




                return (
                <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
                    <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
                    <ScrollView style={tw``}>
                        <View style={tw`w-80`}>
                            <Text style={tw`mx-auto mt-5 text-xs`}>Monday, April 16</Text>
                            <View style={tw`flex flex-row`}>
                        <Image source={ImageIcons.womanclap} style={tw`w-15 h-15 mt-5 ml-5 rounded-full  `} />
                        <View style={tw`w-48 h-18 mt-5 ml-3 bg-white rounded-lg`}>
                        </View>
                        </View>
                        <Text style={tw`mx-auto mt-5 text-xs`}>7:53 pm</Text>
                        <View style={tw`flex flex-row`}>
                        <View style={tw`w-38 h-14 mt-5 ml-29 bg-white rounded-lg`}></View>
                            
                        
                        <Image source={ImageIcons.womanclap} style={tw`w-15 h-15 mt-5 ml-3 rounded-full  `} /></View>
                        <Text style={tw`mx-auto mt-5 text-xs`}>7:55 pm</Text>
                        <View style={tw`flex flex-row`}>
                        <Image source={ImageIcons.womanclap} style={tw`w-15 h-15 mt-5 ml-5 rounded-full  `} />
                        <View style={tw`w-48 h-18 mt-5 ml-3 bg-white rounded-lg`}>
                        </View>
                        </View>

                        
                        </View>
                   
                        
                        
                


                    </ScrollView>

                    <Loader />
                </KeyboardAvoidingView>
                )
}

                export default Commentlist;
