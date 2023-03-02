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


const Projectdetails = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    const project_Id = props?.route?.params?.projectid
    //console.log("project_Id===>>>>",project_Id)
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


    useEffect(() => {
        props.getprojectdetail(project_Id);
        console.log("props.getprojectdetilslist======>>>", props?.getprojectdetilslist);

    }, [])


    const DATA = [
        {
            text: '6/15',
            //  image:ImageIcons.salonman,
        },
        {
            text: '6/16',
            //  image:ImageIcons.salonwoman,
        },


    ];
    const DATA1 = [
        {

            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: '2nd Assistant director ',
            text3: '8:44 pm',

        },
        {
            image: ImageIcons.womanclap,
            text1: 'Sarah Orefice',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
    ]
    const DATA2 = [
        {

            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: '2nd Assistant director ',
            text3: '8:44 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Jonathan Williams',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
    ]
    const DATA3 = [
        {

            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: '2nd Assistant director ',
            text3: '8:44 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Jonathan Williams',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
    ]






    const renderItem = ({ item, index }) => {
        return (
            <View style={tw`w-30 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-black`} >
                <Text style={tw`mx-auto my-auto text-base font-bold`}>{item.text}</Text>
            </View>
        );
    }

    const renderItem1 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-6`} >
                    <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
                    <View style={tw` flex flex-column w-38`}>
                        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
                        <Text style={tw`text-[#808080] text-xs font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
                    </View>
                    <Image source={item.image2} style={tw`w-9.5 h-9.5 mt-7 `} />

                    <Image source={item.image1} style={tw`w-10 h-10 mt-7 ml-2`} />



                </View>
            </View>
        );
    }
    const renderItem2 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-6`} >
                    <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
                    <View style={tw` flex flex-column w-38`}>
                        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
                        <Text style={tw`text-[#808080] text-xs font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
                    </View>
                    <Image source={item.image2} style={tw`w-9.5 h-9.5 mt-7 `} />

                    <Image source={item.image1} style={tw`w-10 h-10 mt-7 ml-2`} />



                </View>
            </View>
        );
    }
    const renderItem3 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-80 h-25 bg-white rounded flex flex-row mb-6`} >
                    <Image source={item.image} style={tw`w-15 h-15 mt-5 ml-4  `} />
                    <View style={tw` flex flex-column w-38`}>
                        <Text style={tw` text-black text-base font-bold mt-4 ml-2`} >{item.text1}</Text>
                        <Text style={tw`text-[#808080] text-xs font-semibold mt-1 mt-5 ml-2`} >{item.text2}</Text>
                    </View>
                    <Image source={item.image2} style={tw`w-9.5 h-9.5 mt-7 `} />

                    <Image source={item.image1} style={tw`w-10 h-10 mt-7 ml-2`} />
                </View>
            </View>
        );
    }




    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={tw``}>
                
                <View style={tw` rounded-xl mx-5 mt-4 py-4`}>
                    <View style={tw`flex-row bg-white w-full rounded-t-[3]	 mb-1 py-4 items-center`}>
                        <View style={tw` w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Date: </Text>
                        </View>
                        <View style={tw`w-7/12`}>
                            <Text style={tw` text-base font-semibold `}>{moment(props?.getprojectdetilslist?.fromDate).format('MMM D')} - {moment(props?.getprojectdetilslist?.toDate).format('MMM D')}</Text>
                        </View>

                    </View>
                    <View style={tw`flex-row bg-white w-full py-4 mb-1 items-center`}>
                        <View style={tw` w-5/12 mr-5 `}>
                            <Text style={tw` text-[4] font-bold text-right`} >Production Type: </Text>
                        </View>
                        <View style={tw` w-7/12 `}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.productionType?.title}</Text>

                        </View>


                    </View>
                    <View style={tw`flex-row bg-white w-full py-4 mb-1 items-center`}>
                        <View style={tw` w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Title: </Text>
                        </View>
                        <View style={tw` w-7/12`}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.title}</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row bg-white w-full rounded-b-[3]	 py-4 mb-1  mb-5 pr-4`}>
                        <View style={tw`w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Description: </Text>
                        </View>
                        <View style={tw`w-7/12 pr-3 `}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.description}</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={tw`mx-auto `}><Text style={tw`text-base font-bold`}>Director</Text></View>
                <View style={tw`mx-auto mt-6`}>
                    <FlatList
                        data={DATA1}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={tw`mx-auto `}><Text style={tw`text-base font-bold`}>Camera</Text></View>
                <View style={tw`mx-auto mt-6`}>
                    <FlatList
                        data={DATA2}
                        renderItem={renderItem2}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={tw`mx-auto `}><Text style={tw`text-base font-bold`}>Lighting</Text></View>
                <View style={tw`mx-auto mt-6`}>
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

export default Projectdetails;
