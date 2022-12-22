import React, { useEffect, useState } from 'react';
import { Text,KeyboardAvoidingView, View,TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
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
import { RadioButton ,Provider , Portal, Button,} from 'react-native-paper';
import Modal from 'react-native-modal'
import {FlatListSlider} from 'react-native-flatlist-slider';


const Booking = (props) => {
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
    closeOnTouchOutside:true,
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
    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

     const images = [
   {
    image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  ]

   const DATA = [
       {
        text:'Salon for Men',
        image:ImageIcons.manclap,
       },
        {
       text:'Salon for Women',
        image:ImageIcons.womanclap,
       },
        {
        text:'Spa for Women',
        image:ImageIcons.womanclap,
       },
       {
        text:'Massage for Men',
        image:ImageIcons.manclap,
       },
        {
        text:'Hair services',
        image:ImageIcons.womanclap,
       }, 

     ];
      const DATA1 = [
       {
        text:'Salon for Men',
        image:ImageIcons.salonman,
       },
        {
       text:'Salon at Home for Women',
        image:ImageIcons.salonwoman,
       },
        {
        text:'Spa for Women',
        image:ImageIcons.salonwoman,
       },
       {
        text:'Massage for Men',
        image:ImageIcons.salonman,
       },
        

     ];

      

      const renderItem = ({ item ,index }) => {
     return(
       <View style={{paddingHorizontal:6, borderRightWidth:1,borderColor:'#f2f2f2',justifyContent:'center'}}>
          <Image source={item.image} style={styles.manclap} />
          <Text style={{fontSize:12,textAlign:'center',maxWidth:55,marginVertical:8}}>{item.text}</Text>
       </View>
  );
}


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={{ paddingBottom: 0 }}>
             
             <TouchableOpacity onPress={() => props.navigation.navigate("Salonwoman")} style={{backgroundColor:'#ffffff',padding:'4%'}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#848484'}}>Bookings not Found</Text>
             </TouchableOpacity>

            </ScrollView>
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Booking;
