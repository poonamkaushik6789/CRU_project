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


const Projects = (props) => {
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



    const DATA = [
        {
            text1: 'June',
            text2: '9',
            text3: 'Music Video',
            text4: 'R&B Artist',

        },
        {
            text1: 'June',
            text2: '13',
            text3: 'TV Commercial',
            text4: 'luxury Car Dealership',
        },
        {
            text1: 'June',
            text2: '15-16',
            text3: 'Short Film',
            text4: 'Comic Con',

        },
        {
            text1: 'July',
            text2: '3',
            text3: 'Music Video',
            text4: 'Hip-Hop Artist',

        },


    ];
    const DATA1 = [
        {
            text1: 'June',
            text2: '9',
            text3: 'Music Video',
            text4: 'R&B Artist',

        },
    ]





    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-80 h-25 bg-white rounded-xl flex flex-row mb-6`} >
                    <View style={tw`w-22 h-18 bg-white mt-3 ml-3 flex flex-row  border-r-2 border-slate-100`} >



                        <View style={tw`w-4 h-18 bg-black `} >
                        </View>
                        <View style={tw`flex flex-column`}>
                            <Text style={tw`text-center text-black text-base font-semibold mt-3 ml-3`} >{item.text1}</Text>
                            <Text style={tw`text-center text-black text-base font-bold mt-1 ml-3`} >{item.text2}</Text>

                        </View>
                    </View>
                    <View style={tw`flex flex column  mt-4 w-40`}>
                        <Text style={tw` text-black text-base font-bold ml-4`} >{item.text3}</Text>
                        <Text style={tw`text-black text-xm font-semibold mt-4 ml-4 `} >{item.text4}</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderItem1 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-80 h-25 bg-white rounded-xl flex flex-row mb-6`} >
                    <View style={tw`w-22 h-18 bg-white mt-3 ml-3 flex flex-row `} >



                        <View style={tw`w-4 h-18 bg-black `} >
                        </View>
                        <View style={tw`flex flex-column`}>
                            <Text style={tw`text-center text-black text-base font-semibold mt-3 ml-3`} >{item.text1}</Text>
                            <Text style={tw`text-center text-black text-base font-bold mt-1 ml-3`} >{item.text2}</Text>

                        </View>
                    </View>
                    <View style={tw`flex flex column  mt-4 w-40`}>
                        <Text style={tw` text-black text-base font-bold ml-4`} >{item.text3}</Text>
                        <Text style={tw`text-black text-xm font-semibold mt-4 ml-4 `} >{item.text4}</Text>
                    </View>
                </View>
            </View>
        );
    }







    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={tw``}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Projectdetails")} style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 mx-auto h-12 w-52 mt-6`}>
                    <Text style={tw`text-[#000] text-base  px-10 font-normal`}>New Project</Text>
                </TouchableOpacity>

                <View style={tw`mx-auto mt-6`}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>
                <View>
                    <Text style={tw` text-base  text-center font-normal`}>Complete</Text></View>
                <View style={tw`mx-auto mt-6`}>
                    <FlatList
                        data={DATA1}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    />

                </View>


            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Projects;
