import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons,Api } from '../../common';
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


const Cru = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const [visible, setVisible] = React.useState(false);
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
    const loginId = props?.loginCredentials?.data?._id
    console.log("loginId===>", loginId);

    useEffect(() => {
        props.mycrulist(loginId);
        console.log("props.getmycrulist======>>>", props?.getmycrulist);

    }, [])

    const renderItemcru = ({ item, index }) => {

        return (
            <View style={tw`bg-[#fff]  flex items-center`}>
                <TouchableOpacity style={tw`border  border-[#ccc] w-33 items-center py-4`} onPress={() => props.navigation.navigate("Camera",{user : item.user})}>
                    <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-12 h-12 `, { tintColor: '#5fafcf' }]} />
                    <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>{item.departmentName}</Text>
                    <Text style={tw`text-[#000] text-[3.5] font-normal`}>{item?.user?.length}</Text>
                </TouchableOpacity>
            </View>
        );
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
        
                <View style={tw`rounded-[3] mx-3 my-5`}>
                    <FlatList
                        data={props?.getmycrulist}
                        renderItem={renderItemcru}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        //horizontal={true}
                        numColumns={3}
                    />
                    <View style={tw`  bg-white my-5 rounded-lg`}>
                        <Text style={tw`text-center py-5 text-base`}>Total:13</Text>
                    </View>
                    <TouchableOpacity style={tw` mx-15 bg-white mt-5 rounded-3xl border-2 border-sky-400 `} onPress={() => props.navigation.navigate("Viewall")}>
                        <Text  style={tw`text-center py-4 text-base`}>View All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`mx-15 bg-white mt-5 rounded-3xl border-2 border-sky-400  `}>
                        <Text style={tw`text-center py-4 text-base`}>New Project</Text>
                    </TouchableOpacity>
                </View>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Cru;
