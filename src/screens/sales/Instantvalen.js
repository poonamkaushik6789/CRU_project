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


const Instantvalen = (props) => {
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
        image:ImageIcons.salonwoman,
        text:'Hair services for Women',
        text1:'Upto 40% off',
       },
       {
        image:ImageIcons.salonwoman,
        text:'Salon Luxe',
        text1:'Upto 40% off',
       },
       {
        image:ImageIcons.salonwoman,
        text:'Salon Prime',
        text1:'Upto 40% off',
       },
       {
        image:ImageIcons.salonwoman,
        text:'Salon Classic',
        text1:'Upto 40% off',
       },
        {
        image:ImageIcons.salonwoman,
        text:'Spa therapy for Women',
        text1:'Upto 40% off',
       },
       {
        image:ImageIcons.salonman,
        text:'Spa therapy for men',
        text1:'Upto 40% off',
       },
       {
        image:ImageIcons.salonman,
        text:'Salon for men',
        text1:'Upto 40% off',
       }, 
      

     ];
      


      const renderItem = ({ item ,index }) => {
     return(
      <View>
       <TouchableOpacity onPress={() => props.navigation.navigate("Air")} style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%', marginVertical:'4%',padding:'2%'}}>
          <Image source={item.image} style={styles.APPLIANCEvalen} />
          <View style={{alignSelf:'center',marginHorizontal:'5%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#ff0000',width:170,letterSpacing:0.3}}>{item.text}</Text>
            <Text style={{fontSize:12,color:'#ff0000'}}>{item.text1}</Text>
          </View>
          <View style={{alignSelf:'center'}}>
             <Image source={ImageIcons.redarrow}  style={{height:20,width:20,}}/>
          </View>
       </TouchableOpacity>
       <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',width:'88%',alignSelf:'center',}}></View>
      </View> 
  );
}

 


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={{ paddingBottom: 0,backgroundColor:'#ffffff' }}>
             
             <View>
               <Image source={ImageIcons.valen}  style={{height:200,width:'100%',}}/>
             </View>

             <View style={{marginBottom:'20%'}}>
               <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}      
                     />
             </View>

            </ScrollView>
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Instantvalen;
