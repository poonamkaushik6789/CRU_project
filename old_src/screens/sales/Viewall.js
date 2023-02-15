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


const Viewall = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const [visible, setVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = React.useState("");
    const [msg, onChangeText2] = React.useState("");
    const [likecount, setLikecount] = React.useState(1);
    const [msgcount, setMsgcount] = React.useState(1);

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
    const handlelikecount = () => {

        setLikecount(likecount + 1)
    };

    const handleMsgcount = () => {
        setMsgcount(msgcount + 1)

    };

    // const showisaction = () => {
    //   setisaction(true);
    // };
    const handlesearch = () => {
        setSearch("");
    };
    const handlestepSubmit = async () => {
        setModalVisible(!modalVisible)
    }
    const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

    const DATA = [
        {
            text2: 'Jonathan Williams',

            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },



    ];
    const DATA1 = [
        {
            text2: 'Jonathan Williams',

            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'Glynden Kenzie',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
    ]
    const DATA3 = [
        {
            text2: 'Jonathan Williams',

            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'Glynden Kenzie',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'John Hafners',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',
        },
        {
            text2: 'Felix Sauermann',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'Pierce Cook',
            image: ImageIcons.womanclap,
            text1: 'Camera Operator',

        },


    ];
    const DATA2 = [
        {
            text2: 'Jonathan Williams',

            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'Glynden Kenzie',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'Glynden Kenzie',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
    ]
    const DATA4 = [
        {
            text2: 'Jonathan Williams',

            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },



    ];
    const DATA5 = [
        {
            text2: 'Jonathan Williams',

            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },



    ];
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-38 h-38 bg-white  ml-2 mr-2   z-10 rounded `} >
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text2}</Text>

                    <Image source={item.image} style={tw`w-24 h-24 mt-1 mx-auto `} />
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>

                </View>
            </View>
        );
    }
    const renderItem1 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-38 h-38 bg-white  ml-2 mr-2   z-10 rounded `} >
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text2}</Text>

                    <Image source={item.image} style={tw`w-24 h-24 mt-1 mx-auto `} />
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>

                </View>
            </View>
        );
    }




    const renderItem3 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-38 h-38 bg-white  ml-2 mr-2 mb-4  z-10 rounded `} >
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text2}</Text>

                    <Image source={item.image} style={tw`w-24 h-24 mt-1 mx-auto `} />
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>

                </View>
            </View>
        );
    }

    const renderItem2 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-38 h-38 bg-white  ml-2 mr-2 mb-4  z-10 rounded `} >
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text2}</Text>

                    <Image source={item.image} style={tw`w-24 h-24 mt-1 mx-auto `} />
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>

                </View>
            </View>
        );
    }
    const renderItem4 = ({ item, index }) => {
        return (
          <View>
            <View style={tw`w-38 h-38 bg-white  ml-2 mr-2   z-10 rounded `} >
            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text2}</Text>
    
              <Image source={item.image} style={tw`w-24 h-24 mt-1 mx-auto `} />
              <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>
    
            </View>
          </View>
        );
      }
      const renderItem5= ({ item, index }) => {
        return (
          <View>
            <View style={tw`w-38 h-38 bg-white  ml-2 mr-2   z-10 rounded `} >
            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text2}</Text>
    
              <Image source={item.image} style={tw`w-24 h-24 mt-1 mx-auto `} />
              <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>
    
            </View>
          </View>
        );
      }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <ScrollView style={{ paddingBottom: 0, marginTop: 0 }}>
                <View >
                <View>
                    <Text style={tw`mt-6 mx-auto text-base font-semibold`}>Producer</Text> 
                    </View>
                    <View style={tw`mx-auto mt-6 ml-3  `}>
                        <FlatList
                            //   horizontal={true}
                            data={DATA}

                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View>
                    <Text style={tw` mt-6 mx-auto text-base font-semibold`}>Director</Text> 
                    </View>
                    <View style={tw`mx-auto mt-6 ml-3  `}>
                        <FlatList
                            //   horizontal={true}
                            data={DATA1}
                            numColumns={2}
                            renderItem={renderItem1}
                            keyExtractor={item => item.id}
                        />

                    </View>

                    <View>
                    <Text style={tw` mt-6 mx-auto text-base font-semibold`}>Camera</Text> 
                    </View>
                    <View style={tw`mx-auto mt-6 ml-3  `}>
                        <FlatList
                            //   horizontal={true}
                            data={DATA3}
                            numColumns={2}
                            renderItem={renderItem3}
                            keyExtractor={item => item.id}
                        />

                    </View>
                    <View>
                    <Text style={tw` mt-3 mx-auto text-base font-semibold`}>Lighting</Text> 
                    </View>
                    <View style={tw`mx-auto mt-6 ml-3  `}>
                        <FlatList
                            //   horizontal={true}
                            data={DATA2}
                            numColumns={2}
                            renderItem={renderItem2}
                            keyExtractor={item => item.id}
                        />

                    </View>
                    <View>
                    <Text style={tw` mt-3 mx-auto text-base font-semibold`}>Special FX</Text> 
                    </View>
                    <View style={tw`mx-auto mt-6 ml-3 `}>
                        <FlatList
                            //   horizontal={true}
                            data={DATA4}
                            numColumns={2}
                            renderItem={renderItem4}
                            keyExtractor={item => item.id}
                        />

                    </View>
                    <View>
                    <Text style={tw` mt-6 mx-auto text-base font-semibold`}>Office</Text> 
                    </View>
                    <View style={tw`mx-auto mt-6 ml-3 mb-100`}>
                        <FlatList
                            //   horizontal={true}
                            data={DATA5}
                            numColumns={5}
                            renderItem={renderItem5}
                            keyExtractor={item => item.id}
                        />

                    </View>
                </View>
                
                <TouchableOpacity style={tw`bg-[#e6e6e6] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mx-10`} onPress={() => handlestepSubmit()}  >
                    <Text style={tw`text-[#000] text-[3.5] p-3 px-15 font-normal`}>Step 2</Text>
                </TouchableOpacity>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    style={tw`m-0`} >
                    <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
                        <View style={tw`bg-white rounded-[2]  justify-center drop-shadow-xl m-4`} >
                            <View style={tw`items-center border-b border-[#ccc] p-4`}>
                                <Text style={tw`text-lg font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >John Hafner</Text>
                            </View>
                            <View style={tw`p-3`}>
                                <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] mt-4 mb-4 h-13  mx-10`} onPress={() => setModalVisible(false)}>
                                    <Text style={tw`text-[#000] text-[3.5] p-2 px-15 font-normal`}>View Profile </Text>
                                </TouchableOpacity>
                                
                           <View style={tw`flex flex-row`}>
                            <Image style={tw`w-15 h-12 ml-8 `} source={ImageIcons.msgs} ></Image>
                            <Image style={tw`w-15 h-12 ml-6 `} source={ImageIcons.msgs} ></Image>
                            <Image style={tw`w-15 h-12 ml-6 `} source={ImageIcons.msgs} ></Image></View>
                            <View style={tw`flex flex-row`}>
                            <Text style={tw`text-[#000] text-sm p-2  ml-9 font-normal`}>Msg</Text>
                            <Text style={tw`text-[#000] text-[3.5] p-2 ml-9 font-normal`}>E-mail </Text>
                            <Text style={tw`text-[#000] text-[3.5] p-2 ml-9 font-normal`}>Call </Text>

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

export default Viewall;
