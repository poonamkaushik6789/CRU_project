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


const Eventdetail = (props) => {
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


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={tw`flex-1`}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView >
        <View >
          <View>
            <Image source={ImageIcons.rawartist} style={tw` h-60 w-5/5 `} />
          </View>
          <View style={tw`bg-white mx-4 rounded-b-lg mb-2`}>
            <Text style={tw`text-center py-4`} >RAW Artists Annual Short Film Festival</Text>
          </View>

          <View style={tw`bg-white rounded-[2]  justify-center drop-shadow-xl m-4`} >
            <View style={tw`items-center border-b border-[#ccc] p-4`}>
              <Text style={tw`text-[4.4] font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >About</Text>
            </View>
            <View style={tw`mx-5 p-3 py-5`}>
              <Text style={tw`text-[#000000] mt-1 font-normal text-[3.1]`}>RAWFF is the innovative film festival from acclaimed arts showcase presenters RAW: natural born artists.{'\n'}{'\n'}
                Taking place at the Bootleg Theater in Echo Park, LOs Angeles, the one day pop-up shorts fest features work from local talent across Soluthern California and beyond.{'\n'}{'\n'}
                Numerous cinematic disciplines are represented, with a focus on fresh, sdgy, subversive programming from innovative indies on the come-up.</Text>
            </View>
          </View>
          <View style={tw`bg-white rounded-[2]  justify-center drop-shadow-xl m-4`} >
            <View style={tw`items-center border-b border-[#ccc] p-4`}>
              <Text style={tw`text-[4.4] font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >Details</Text>
            </View>
            <View style={tw`mx-5 p-3 py-5`}>
              <View style={tw`flex-row my-2 items-center`}>
                <View>
                  <Image source={ImageIcons.calendar_icon} style={tw` h-6 w-6 `} />
                </View>
                <View style={tw`ml-4`}>
                  <Text style={tw`text-[#000000] mt-1 font-normal text-[3.2]`}>Sunday, June 3, 2018</Text>
                </View>
              </View>
              <View style={tw`flex-row my-2 items-center`}>
                <View>
                  <Image source={ImageIcons.clockclap} style={tw` h-6 w-6 `} />
                </View>
                <View style={tw`ml-4`}>
                  <Text style={tw`text-[#000000] mt-1 font-normal text-[3.2]`}>12:00 PM - 10:00 PM</Text>
                </View>
              </View>
              <View style={tw`flex-row my-2 items-center`}>
                <View>
                  <Image source={ImageIcons.locationclap} style={tw` h-6 w-6 `} />
                </View>
                <View style={tw`mx-4`}>
                  <Text style={tw`text-[#000000] mt-1 font-normal text-[3.2]`}>2220 Beverly Boulevard Los Angeles, California 90057</Text>
                </View>
              </View>
              <View style={tw`my-2 items-center`}>

              </View>
            </View>
          </View>

        </View>

        <TouchableOpacity style={tw`border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-2 my-5 mx-15`} onPress={() => setModalVisible(false)}>
          <Text style={tw`text-[#000] text-[4] p-2 px-7 font-normal`}>Purchase Tickets</Text>
        </TouchableOpacity>


      </ScrollView>
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Eventdetail;
