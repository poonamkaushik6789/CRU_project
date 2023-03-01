import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, Api, ImageIcons } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import Loader from '../../components/modals/Loader';
import CalendarPicker from 'react-native-calendar-picker';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';
import Cru from './Cru';


const Matthew = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const { width } = Dimensions.get('window');
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [about, setAbout] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');


  const [socilfeed, setSocialfeed] = useState('1');
  const [billImgPath, setBillImgPath] = useState("");
  const [deletepostid, setDeletepostid] = useState('');


  const loginId = props?.loginCredentials?.data?._id
  //console.log("loginId===>", props);
  console.log("jfjgfprops.availabilty======>>>", props?.getprofilelist?.availabilty);

  useEffect(() => {
    props.mycrulist(loginId);
    props.mynetworklist(loginId);
    console.log("props.getmynetworklist======>>>", props?.getmynetworklist);

  }, [])

  useEffect(() => {
    //console.log("props.getprofilelist======>>>", props?.getprofilelist?.email);
    if (props?.getprofilelist.email == undefined) {
      props.profiledetail(loginId);
      setTimeout(function () {
        props.profiledetail(loginId);

      }, 1500);
      setAbout(props?.getprofilelist?.about);

    }
    // console.log("props.getprofilelist======>>>", props?.getprofilelist);
  }, [props.getprofilelist])

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
      

    }
  };
  const handlelikeunlike = (id) => {

    //setLikecount(likecount + 1)
    let request = {
      "_id": id,
      "userId": loginId,

    }

    props.likeunlikepost(request, props.navigation)
    props.profiledetail(loginId);
  };

  const handleMsgcount = () => {
    setMsgcount(msgcount + 1)

  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  const handletabchange = (id) => {
    setSocialfeed(id);
    
  };

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


        const formData = new FormData();
        formData.append("_id", loginId);
        formData.append("image", file);
        props.updateprofile(formData, props.navigation)
        props.profiledetail(loginId);
      }
    }).catch((error) => {

    });
  }

  const selectPhotobackground = async () => {
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


        const formData = new FormData();
        formData.append("_id", loginId);
        formData.append("image", file);
        props.updatebackgroudimage(formData, props.navigation)
        props.profiledetail(loginId);
      }
    }).catch((error) => {

    });
  }


  const deletepostmodal = async (id) => {
    setDeletepostid(id)
    setModalVisible(true);

  }


  const handledeletepost = async () => {

    props.deletepost(deletepostid)
    setModalVisible(false);
    props.profiledetail(loginId);
  }
  const handleeditabout = async () => {

    let request = {
      "_id": loginId,
      "about": about,

    }
    props.updateabout(request, props.navigation)
    setSocialfeed('3');
    props.profiledetail(loginId);
  }
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };
  const DATA3 = [
    {
      id: 1,
      image: ImageIcons.social,
      image2: ImageIcons.socialcolor,
      text1: 'Social Feed',

    },
    {
      id: 2,
      image: ImageIcons.event,
      image2: ImageIcons.calendar_icon,
      text1: 'Calender',

    },
    {
      id: 3,
      image: ImageIcons.about,
      image2: ImageIcons.profile,
      text1: 'About',

    },


  ];
  const renderItemnetwork = ({ item, index }) => {

    return (
      <View style={tw`bg-[#fff] w-4/12 flex  justify-center`}>
        <TouchableOpacity style={tw`border  border-[#ccc] w-32 items-center py-4`}
        //onPress={() => handledeparment(item._id, item.departmentName)}
        >
          <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-12 h-12 `, { tintColor: '#5fafcf' }]} />
          <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>{item.departmentName}</Text>
          <Text style={tw`text-[#000] text-[3.5] font-normal`}>{item?.user?.length}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const renderItemcru = ({ item, index }) => {

    return (
      <View style={tw`bg-[#fff] w-4/12 flex  justify-center`}>
        <TouchableOpacity style={tw`border  border-[#ccc] w-32 items-center py-4`}
        //onPress={() => handledeparment(item._id, item.departmentName)}
        >
          <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-12 h-12 `, { tintColor: '#5fafcf' }]} />
          <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>{item.departmentName}</Text>
          <Text style={tw`text-[#000] text-[3.5] font-normal`}>{item?.user?.length}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const renderItem1 = ({ item, index }) => {
    return (
      <View >
        <TouchableOpacity style={tw`  border-solid rounded-full mx-2 bg-white`}>
          <Text style={tw`text-center my-auto text-xs p-2 px-3`}>{item?.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem3 = ({ item, index }) => {
    return (
      <View style={tw`my-5 justify-center	`}>
        {socilfeed == item.id ?
          <TouchableOpacity style={tw` bg-white ml-0.5 p-6 items-center	`} onPress={() => handletabchange(item.id)}>
            {socilfeed == '3' &&
              <TouchableOpacity style={tw`right-2 top-4 z-50 absolute`} onPress={() => setSocialfeed('6')}>
                <Image source={ImageIcons.editclap} style={[tw`w-5 h-5 rounded-full`, { tintColor: '#5fafcf' }]} />
              </TouchableOpacity>}
            <Image source={item.image2} style={tw`w-14 h-14  `} />
            <Text style={tw`text-center text-black text-base font-semibold `} >{item.text1}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={tw` bg-white  ml-0.5 p-6 items-center	`} onPress={() => handletabchange(item.id)}>
            <Image source={item.image} style={tw`w-16 h-14  `} />
            <Text style={tw`text-center text-black text-base font-semibold `} >{item.text1}</Text>
          </TouchableOpacity>
        }
      </View>
    );
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
          <TouchableOpacity style={tw`items-end	top-10 right-5 z-10 `} onPress={() => deletepostmodal(item._id)}>
            <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
          </TouchableOpacity>
          <View style={tw`my-2 bg-white pt-14 px-3  rounded-[2]`}>

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
                {item?.likedBy?.includes(loginId) == "" ?
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.like} style={tw`w-8 h-8	`} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.redlike} style={tw`w-9 h-8	`} />
                  </TouchableOpacity>

                }
                {item?.likedBy?.length > 0 ?
                  <TouchableOpacity style={tw`flex-row ml-2 `} onPress={() => props.navigation.navigate("Likelist", { post_Id: item._id })}>

                    <View style={tw` `}>
                      <Text style={tw`text-[#000] text-[3.5]  font-normal`}> {item?.likedBy?.length} Likes</Text>
                    </View>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`flex-row ml-2 `} >

                    <View style={tw``}>
                      <Text style={tw`text-[#000]	 text-[3.5]  font-normal`}> {item?.likedBy?.length} Likes</Text>
                    </View>
                  </TouchableOpacity>
                }

              </View>

              <View style={tw`flex-row items-center   `}>
                <TouchableOpacity style={tw`items-center`} onPress={() => props.navigation.navigate("Commentlist", { post_Id: item._id })}>
                  <Text style={tw`text-[#000]	 text-[3.5]  font-normal`}>{item?.comments?.length} Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw` `} onPress={() => { handleMsgcount(), props.navigation.navigate("Commentlist", { post_Id: item._id }) }}>
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
          {item?.userId?.profileImage != null ?
            <Image source={{ uri: `${Api.imageUri}${item?.userId?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
            :
            <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
          }
        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <ScrollView style={tw`w-full`}>
        <View >
          <View>
            {props?.getprofilelist?.coverImage != null ?
              <Image source={{ uri: `${Api.imageUri}${props?.getprofilelist?.coverImage}` }} style={tw`w-full h-45 rounded-b-full z-30 absolute`} />
              :
              <Image source={ImageIcons.rawartist} style={tw`w-full h-45 rounded-b-full z-30 absolute`} />
            }

            <View style={tw`w-11/12 h-75 px-6 pt-50 mx-4 flex-row	justify-between bg-white `} >
              <TouchableOpacity style={tw`items-center	`} onPress={() => setSocialfeed('4')}>
                <Image style={tw`w-15 h-13 `} source={ImageIcons.cru} />
                <Text style={tw`text-black `}>My Cru</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`items-center	`} onPress={() => setSocialfeed('5')}>
                <Image style={tw`w-15 h-13  `} source={ImageIcons.grouprofile} />
                <Text style={tw`text-black `}>Connections</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={tw`right-15 mt-33 z-60 absolute`} onPress={() => selectPhotobackground()}>
              <Image source={ImageIcons.editclap} style={[tw`w-7 h-7 rounded-full`, { tintColor: '#5fafcf' }]} />
            </TouchableOpacity>
            <View style={tw` left-4/12 mt-33 z-50 absolute`}>
              {props?.getprofilelist?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${props?.getprofilelist?.profileImage}` }} style={tw`w-30 h-30 rounded-full `} />
                :
                <Image source={ImageIcons.man} style={tw`w-30 h-30 rounded-full `} />
              }
            </View>
            <TouchableOpacity style={tw`left-7/12 mt-48 z-50 absolute`} onPress={() => selectPhoto()}>
              <Image source={ImageIcons.editclap} style={[tw`w-7 h-7 rounded-full`, { tintColor: '#5fafcf' }]} />
            </TouchableOpacity>
          </View>
          <View style={tw`ml-5 mt-5`}>
            {(props?.getprofilelist.email != undefined && props?.getprofilelist.email != "") &&
              <FlatList
                horizontal={true}
                data={props?.getprofilelist?.workDepartments[0]?.position}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
              />
            }
          </View>
          <View style={tw`ml-5`}>
            <FlatList
              horizontal={true}
              data={DATA3}
              renderItem={renderItem3}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View style={tw`mx-5`}>
          {socilfeed == "1" &&
            <FlatList
              data={props?.getprofilelist?.posts}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          }
          {socilfeed == "2" &&
            <View style={tw`bg-[#fff] rounded-[3] flex py-5`}>
              <CalendarPicker
                selectedStartDate={props?.getprofilelist?.availabilty[0]?.selectedStartDate}
                selectedEndDate={props?.getprofilelist?.availabilty[0]?.selectedEndtDate}
                //markedDates={}
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={moment(new Date()).toDate()}
                maxDate={moment().add(1, 'month').toDate()}
                weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                months={['January', 'Februray', 'March', 'Abril', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December']}
                todayBackgroundColor="#e6ffe6"
                selectedDayColor="#66ff33"
                selectedDayTextColor="#000000"
                scaleFactor={375}
                markingType={"period"}

                textStyle={{
                  fontFamily: 'Cochin',
                  color: '#000000',
                }}
                onDateChange={onDateChange}
              />
            </View>
          }
          {socilfeed == "3" &&
            <TouchableOpacity style={tw`	 border-solid rounded-[3] bg-white`}>
              <Text style={tw` my-auto text-[3.8] p-7`}>{props?.getprofilelist?.about}</Text>
            </TouchableOpacity>
          }
          {socilfeed == "4" &&
            <View style={tw`rounded-[3] w-full my-5`}>
              <FlatList
                data={props?.getmycrulist?.data}
                renderItem={renderItemcru}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                //horizontal={true}
                numColumns={3}
              />
              <View style={tw`  bg-white my-5 rounded-lg`}>
                <Text style={tw`text-center py-5 text-base`}>Total: {props?.getmycrulist?.cruData?.length}</Text>
              </View>
            </View>

          }
          {socilfeed == "5" &&
            <View style={tw`rounded-[3] w-full my-5`}>
              <FlatList
                data={props?.getmynetworklist?.data}
                renderItem={renderItemnetwork}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                //horizontal={true}
                numColumns={3}
              />
              <View style={tw`  bg-white my-5 rounded-lg`}>
                <Text style={tw`text-center py-5 text-base`}>Total: {props?.getmynetworklist?.cruData?.length}</Text>
              </View>
            </View>
          }
          {socilfeed == "6" &&
            <TouchableOpacity style={tw`	p-5 border-solid rounded-[3] bg-white items-center mb-5`}>
              <View style={tw`border border-[#ccc] rounded-[3] w-85  pl-5`}>

                <TextInput
                  value={about}
                  placeholder="Share work related content here..."
                  placeholderTextColor={'#D3D3D3'}
                  onChangeText={(text) => setAbout(text)}
                  onSubmitEditing={() => handlenewpost()}
                  multiline={true}
                />

              </View>
              <TouchableOpacity onPress={() => handleeditabout()} style={tw`bg-[#fff] border-[#5fafcf] border-2 my-5	 items-center  justify-center rounded-[10] p-1 ml-4 h-12 w-45`}>
                <Text style={tw`text-[#000] text-[3.5]  px-10 font-normal`}>Save</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          }

        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          style={tw`m-0`} >
          <View style={tw`flex-1	 justify-center  bg-neutral-500	`}>
            <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
              <View style={tw`items-center border-b border-[#ccc] p-4`}>
                <Text style={tw`text-base font-bold  text-black `} numberOfLines={1} ellipsizeMode='tail' >Delete</Text>
              </View>
              <View style={tw`p-3`}>
                <View style={tw`mx-5`}>
                  <Text style={tw`text-[#000000] mt-1 font-normal text-[3.1]`}>Are You Sure You Want to delete this Post ?</Text>
                </View>
                <View style={tw`flex-row my-5 justify-around`}>
                  <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	  justify-center rounded-[4] p-1 `} onPress={() => handledeletepost()}>
                    <Text style={tw`text-[#000] text-[3.5] p-2 px-6 font-normal`}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[4] p-1 `} onPress={() => { setModalVisible(false) }}>
                    <Text style={tw`text-[#000] text-[3.5] p-2 px-10 font-normal`}>No</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>

        </Modal>

      </ScrollView>
      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Matthew;
