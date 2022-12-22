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

      const DATA2 = [
       {
        text:'Salon for Men',
        image:ImageIcons.salonman,
       },
        {
       text:'Salon at Home for Women',
        image:ImageIcons.salonwoman,
       },

     ];

     const DATA3 = [
       {
        text:'Salon for Men',
        image:ImageIcons.cleanclap,
       },
        {
       text:'Salon for Women',
        image:ImageIcons.repairclap,
       },
        {
        text:'Spa for Women',
        image:ImageIcons.repairclap,
       },
       {
        text:'Massage for Men',
        image:ImageIcons.cleanclap,
       },
        {
        text:'Hair services',
        image:ImageIcons.repairclap,
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

 const renderItem2 = ({ item ,index }) => {
     return(
       <View style={{padding:8}}>
          <Image source={item.image} style={styles.manclap2} />
          <Text style={{fontSize:12,textAlign:'center',marginVertical:8}}>{item.text}</Text>
       </View>
  );
}

const renderItem3 = ({ item ,index }) => {
     return(
       <View style={{paddingHorizontal:6, borderRightWidth:1,borderColor:'#f2f2f2',justifyContent:'center'}}>
          <Image source={item.image} style={styles.manclap3} />
          <Text style={{fontSize:12,textAlign:'center',maxWidth:55,marginVertical:8}}>{item.text}</Text>
       </View>
  );
}




    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={{ paddingBottom: 0, }}>
            <View style={{backgroundColor:'#ffffff'}}> 
             <View style={{margin:'5%'}}>
                 <Image source={ImageIcons.uclogo}  style={{height:33,width:73,}}/>  
               <Text style={{fontSize:24,fontWeight:'bold',color:'#000000'}}>Select your Salon</Text>
               <Text style={{fontSize:14,color:'#848484',marginTop:'2%'}}>Choose from range of brands,prices and salon experience</Text>
             </View>

             <TouchableOpacity onPress={() => props.navigation.navigate("Waterpurifier")} style={{flexDirection:'row',marginHorizontal:'7%',marginVertical:'5%'}}>
        
               <View>
                <Image source={ImageIcons.womansalon}  style={{height:87,width:87,borderRadius:5}}/>
               </View>
               <View style={{marginLeft:'7%',alignSelf:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',width:210,}}>
                   <Text style={{fontSize:16,fontWeight:'bold'}}>Salon Prime</Text>
                   <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}}/>
                 </View>
                   <View style={{flexDirection:'row',marginVertical:'2%'}}>
                     <View style={{backgroundColor:'#b3ffcc',width:48,borderRadius:5,}}>
                        <Text style={{fontSize:12,color:'#009900',fontWeight:'bold', textAlign:'center',margin:2}}>Rs.Rs.</Text>
                     </View>
                     <View style={{backgroundColor:'#d9d9d9',width:55,borderRadius:5,marginLeft:5}}>
                        <Text style={{fontSize:11,color:'#848484',margin:2}}>PREMIUM</Text>
                     </View>
                   </View>
                     <Text style={{fontSize:16,color:'#848484'}}>LOREAL  |  RICA  |  O3+</Text>
               </View>

             </TouchableOpacity>
             <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'6%'}}></View>

             <View style={{flexDirection:'row',marginHorizontal:'7%',marginVertical:'5%'}}>
        
               <View>
                <Image source={ImageIcons.womansalon}  style={{height:89,width:89,borderRadius:5}}/>
               </View>
               <View style={{marginLeft:'7%',alignSelf:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',width:210}}>
                   <Text style={{fontSize:16,fontWeight:'bold'}}>Salon Classic</Text>
                   <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}}/>
                 </View>

                  <View style={{flexDirection:'row',marginVertical:'2%'}}>
                     <View style={{backgroundColor:'#b3ffcc',width:48,borderRadius:5,}}>
                        <Text style={{fontSize:12,color:'#009900',fontWeight:'bold', textAlign:'center',margin:2}}>Rs.Rs.</Text>
                     </View>
                     <View style={{backgroundColor:'#d9d9d9',width:74,borderRadius:5,marginLeft:5}}>
                        <Text style={{fontSize:11,color:'#848484',margin:2}}>ECONOMICAL</Text>
                     </View>
                   </View>
    
                     <View>
                       <Text style={{fontSize:16,marginLeft:6,color:'#848484'}}>VLCC  |  RICHELON  |  Crave</Text>
                     </View>
               </View>

             </View>
          </View>

            </ScrollView>
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Salonwoman;
