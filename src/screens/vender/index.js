import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image, Keyboard, Alert } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import { Api, Utilise, CommonStrings } from '../../common';
import ImagePicker from 'react-native-image-crop-picker';

import moment from 'moment';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Vendor = (props) => {

  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  console.log("props=====>>>>>", props)
  const loginId = props?.loginCredentials?.data?._id
  const [visible, setVisible] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);
  const [billImgPath, setBillImgPath] = useState("");

  useEffect(() => {
    props.socialfeedlist();
    console.log("props.getpostlist======>>>", props?.getpostlist);

  }, [])
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
  
  const handlelikeunlike = (id) => {

    setLikecount(likecount + 1)
    let request = {
      "_id": id,
      "userId": loginId,

    }

    props.likeunlikepost(request, props.navigation)
    props.socialfeedlist();
  };

  const handleMsgcount = () => {
    setMsgcount(msgcount + 1)

  };


  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };
  const selectPhoto = async () => {
    ImagePicker.openPicker({
      width: 400,
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.5,
      height: 400,
    }).then(image => {
      if (image?.path) {
        let fileName = image?.path?.split('/').pop();
        let mimeType = image?.path?.split('.').pop();
        let file = {
          'uri': image?.path,
          'type': `image/${mimeType}`,
          'name': fileName
        }
        // setFieldValue("couponImage", file);
        setBillImgPath(file);
      }
    }).catch((error) => {

    });
  }
  const handlenewpost = async () => {
    Keyboard.dismiss();
    if (description == "") {
      alert('Description is required')
    } else {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("userId", loginId);
      formData.append("image", billImgPath);
      props.addpostnew(formData, props.navigation)

    }
    setDescription('');
    props.socialfeedlist();
  }


  
  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`my-2 `}>
        <Text style={tw`text-[#000] text-center	 text-[3.5]  px-15 font-normal`}>{item?.userId?.fullName}</Text>

        <View style={tw`mt-7`}>

          <View style={tw`flex-row justify-between mx-4 `}>
            <View style={tw`flex-row`}>
              <Image source={ImageIcons.calendar_icon} style={tw`w-4 h-4`} />
              <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{moment(item?.createdAt).format('dddd')}</Text>
            </View>
            <View style={tw`flex-row`}>
              <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{moment(item?.createdAt).startOf('hour').fromNow()}</Text>
              <Image source={ImageIcons.timer} style={tw`w-5 h-5`} />
            </View>
          </View>
          <View style={tw`my-2 bg-white pt-14 px-4 mx-5   rounded-[2]`}>
            <View style={tw`py-2 `}>
              <Text style={tw`text-[#000] text-[3.3] font-normal`}>{item.description}</Text>
              <View style={tw`pt-4`}>
                {item?.image != "" &&
                  <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={tw`w-full h-90	`} />
                }
              </View>
            </View>
            <View style={tw`flex-row justify-between	items-center	py-3`}>
              <View style={tw`flex-row items-center`}>
                {/* {item.is_like == "" ?
                <TouchableOpacity style={styles.middlikeview} onPress={() => { likedislikesubmit(item.id) }}>
                  <LikeIcon height={18} width={18} color={"#a0a0ab"}></LikeIcon>
                  <Text style={[styles.middlebottomlike028, { color: '#a0a0ab' }]}>Like</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.middlikeview} onPress={() => likedislikesubmit(item.id)}>
                  <LikeIcon height={18} width={18} color={"#028ec9"}></LikeIcon>
                  <Text style={[styles.middlebottomlike028, { color: '#a0a0ab' }]}>Like</Text>
                </TouchableOpacity>
              } */}
                {item?.likedBy?.includes(loginId) == "" ?
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.like} style={tw`w-8 h-8	`} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.like} style={[tw`w-8 h-8	`, { tintColor: '#5fafcf' }]} />
                  </TouchableOpacity>

                }


                <TouchableOpacity style={tw`flex-row ml-2 items-center`} onPress={() => props.navigation.navigate("Likelist",{ post_Id: item._id })}>
                  <View style={tw`	z-20`}>
                    <Image source={ImageIcons.man} style={tw`w-12 h-12 rounded-full`} />
                  </View>
                  <View style={tw`absolute	z-10 left-6`}>
                    <Image source={ImageIcons.man} style={tw`w-12 h-12	rounded-full`} />
                  </View>
                  <View style={tw`absolute z-0 left-13 bg-[#f2f2f2] w-12 h-12 rounded-full items-center justify-center`}>
                    <Text> +{item?.likedBy?.length}</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View style={tw`flex-row `}>
                <TouchableOpacity style={tw`flex-row items-center`} onPress={() => props.navigation.navigate("Commentlist", { post_Id: item._id })}>

                  <View style={tw`absolute z-0 `}>
                    <Image source={ImageIcons.man} style={tw`w-12 h-12	rounded-full`} />
                  </View>
                  <View style={tw`absolute	z-10 right-6`}>
                    <Image source={ImageIcons.man} style={tw`w-12 h-12	rounded-full`} />
                  </View>
                  <View style={tw`	z-20 right-12 bg-[#f2f2f2] w-12 h-12 rounded-full items-center justify-center`}>
                    <Text>+{item?.comments?.length}</Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity style={tw`ml-0 `} onPress={() => handleMsgcount()}>
                  <Image source={ImageIcons.chat} style={[tw`w-13 h-13	`, { tintColor: '#5fafcf' }]} />
                </TouchableOpacity>
              </View>

            </View>

          </View>

        </View>
        <View>

        </View>
        <View style={tw`absolute  inset-x-0.7/2	 top-8		 `}>
          {/* <View style={tw`w-3 h-3 bg-[#ff0000] rounded-full absolute left-15 `}></View> */}
          <View style={tw`w-3 h-3 bg-[#008000] rounded-full absolute left-17 `}></View>
          {item?.userId?._id == loginId ?
            <TouchableOpacity onPress={() => props.navigation.navigate("Matthew", { userId: item?.userId?._id })}>
              {item?.userId?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.userId?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
              }
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => props.navigation.navigate("Glyndenprofile", { userId: item?.userId?._id })}>
              {item?.userId?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.userId?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
              }
            </TouchableOpacity>
          }
        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <ScrollView style={{ paddingBottom: 0, marginTop: 0 }}>
        <View >
          <View style={tw`bg-white m-4 rounded-[2] p-3 px-5 h-38`}>
            <View style={tw`border-b border-[#ccc] pl-5`}>

              <TextInput
                value={description}
                placeholder="Share work related content here..."
                placeholderTextColor={'#D3D3D3'}
                onChangeText={(text) => setDescription(text)}
                onSubmitEditing={() => handlenewpost()}
              />

            </View>
            <View style={tw`flex-row my-5 justify-center`}>
              <TouchableOpacity onPress={() => selectPhoto()}>
                <Image source={ImageIcons.camrea} style={tw`w-10 h-10`} />
              </TouchableOpacity>
              <View style={tw`mr-9 ml-3`}>
                <TouchableOpacity onPress={() => handlenewpost()} style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 ml-4 h-12 w-45`}>
                  <Text style={tw`text-[#000] text-[3.5]  px-10 font-normal`}>New Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={tw` `}>
            <FlatList
              data={props?.getpostlist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              extraData={props}
            />
          </View>
        </View>
      </ScrollView>
      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Vendor;
