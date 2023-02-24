import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
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


const Likelist = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  const postid = props?.route?.params?.post_Id;
  const [visible, setVisible] = React.useState(false);
  const [subMsg, onChangeText1] = React.useState("");
  const [msg, onChangeText2] = React.useState("");

  const [isaction, setisaction] = useState(true);

  useEffect(() => {
    props.getlike(postid);
    console.log("props.getlikstlist======>>>", props?.getlikstlist);

  }, [])

  // const showisaction = () => {
  //   setisaction(true);
  // };
  // const hideisaction = () => {
  //   setisaction(false);
  // };
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };



  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`items-center mx-4`}>
        <Text style={tw`text-[#000] text-center	 text-[3.4] font-normal`}>{item.fullName}</Text>
        <View>
          {item?.profileImage != null ?
            <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-20 h-20 rounded-full`} />
            :
            <Image source={ImageIcons.man} style={tw`w-20 h-20 rounded-full`} />
          }
        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={tw`flex-1	`}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>

        <View style={tw`m-4 bg-white rounded-[3] p-3 py-5`}>
          <FlatList
            data={props?.getlikstlist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
          />
        </View>

      </ScrollView>
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Likelist;
