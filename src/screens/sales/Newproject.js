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
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import { Dropdown } from 'react-native-element-dropdown';
import SelectDropdown from 'react-native-select-dropdown';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Newproject = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    const loginId = props?.loginCredentials?.data?._id
    const productionid = props?.addproductiontype?.data?._id
    //console.log("addproductiontype=======:::",productionid)

    
    const [checkedId1, setcheckedId1] = React.useState([]);
    const [finalarr, setfinalarr] = React.useState([]);
    const [deparmentId, setSepartmentId] = useState('');
    const [newflat1, setnewflat1] = React.useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    const [userarrlist, setUsearrlist] = React.useState('');
    const [selectprofile, setSelectprofile] = useState(false);
    const [description, setDescription] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [production, setProduction] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        props.getproduction();
        console.log("props.getproductionlist======>>>", props?.getproductionlist);
        props.mycrulist(loginId);
        console.log("props.getmycrulist======>>>", props?.getmycrulist);
        console.log("props.getmycrulist?.user======>>>", props?.getmycrulist?.user);
    }, [])

    const progressStepsStyle = {
        activeStepIconBorderColor: '#000',
        activeLabelColor: '#000',
        activeStepNumColor: 'white',
        activeStepIconColor: '#000',
        disabledStepIconColor: '#fff',
        progressBarColor: '#fff',
        completedStepIconColor: '#000',
        completedProgressBarColor: '#000',
        completedCheckColor: '#fff',
        disabledStepNumColor: '#000'
    };
    const onDateChange = (date, type) => {
        //alert(date)
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };
    const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

    const housedata = [
        { label: 'Lory', value: '1' },
        { label: 'Port', value: '2' },
        { label: 'Full', value: '2' },
    ];
    const onNextStep1 = async () => {
        let request = {
            "userId": loginId,
            "fromDate": selectedStartDate.toDate(),
            "toDate": selectedEndDate.toDate(),
            "productionType": production,
            "description": description,
            "title": title,
        }
        //console.log("selectedStartDate===>",selectedStartDate.toDate())
        props.addnewproject(request, props.navigation);
    }
    const onsubmitbtn = async () => {
        let request = {
            "_id": productionid,
            "invitedCru": ["1", "2"],
        }

        props.inviteprojectcru(request, props.navigation);
        alert("Save successfully")
        props.navigation.navigate("Projects")
    }
    const handlecrudata = async (user) => {
        console.log("item.user===>", user)
        setSelectprofile(!selectprofile);
        setUsearrlist(user);
        //props.navigation.navigate("Camera", { user: item.user })
    }

    const callAction1 = async (value) => {
        alert(value)
        for (var i = 0; i < userarrlist.length; i++) {
            if (userarrlist[i].fullName == value) {
                if (checkedId1.indexOf(value) > -1) {
                    var index = checkedId1.indexOf(value);
                    checkedId1.splice(index, 1);
                    setcheckedId1(checkedId1)
                } else {
                    checkedId1.push(value);
                    setcheckedId1(checkedId1)
                }
            }
        }
        console.log("checkedId1==>", checkedId1)
        setnewflat1(s => !s);
        finalarr.push({ value });
        setfinalarr(finalarr);
        setcheckedId1([]);
        console.log("finalarr==>", finalarr)
    }

    const DATA3 = [
        {
            text2: 'Jonathan Williams',
            fullName: 'aksd',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },
        {
            text2: 'Jonathan Williams',
            fullName: 'aksd',
            image: ImageIcons.womanclap,
            text1: 'Cinematographer',

        },

    ];


    const renderItem = ({ item, index }) => {

        return (
            <View style={tw`bg-[#fff]  flex items-center`}>
                <TouchableOpacity style={tw`border  border-[#ccc] w-33 items-center py-4`}
                    onPress={() => handlecrudata(item.user)}>
                    <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-12 h-12 `, { tintColor: '#5fafcf' }]} />
                    <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>{item.departmentName}</Text>
                    <Text style={tw`text-[#000] text-[3.5] font-normal`}>{item?.user?.length}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const renderItem3 = ({ item, index }) => {
        return (
            <TouchableOpacity style={tw`mx-2 w-5.5/12 `} onPress={() => callAction1(item)}
            //onPress={() => props.navigation.navigate("Glyndenprofile", { userId: item?._id })}
            >
                {(checkedId1.indexOf(item._id) > -1) ?
                    <View style={tw` bg-white mt-5 p-5 items-center border border-[#53c653] rounded-[3] `} >
                        <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>
                        <View style={tw`items-center`}>

                            {item?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
                            }
                        </View>
                        <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>
                    </View>
                    :
                    <View style={tw` bg-white mt-5 p-5 items-center border border-[#fff] rounded-[3] `} >
                        <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>
                        <View style={tw`items-center`}>

                            {item?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
                            }
                        </View>
                        <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>
                    </View>
                }
            </TouchableOpacity>
        );
    }
    const renderItem4 = ({ item, index }) => {
        return (
            <TouchableOpacity style={tw`mx-2 w-45`}
            //onPress={() => props.navigation.navigate("Glyndenprofile", { userId: item?._id })}
            >

                <View style={tw` bg-white mt-5 p-5   rounded-[3] `} >
                    <View style={tw`flex-row justify-between 	`}>
                        <View>
                            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} ></Text>
                        </View>
                        <View>
                            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>

                        </View>
                        <TouchableOpacity style={tw``} >
                            <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                        </TouchableOpacity>
                    </View>

                    <View style={tw`items-center my-2`}>

                        {item?.profileImage != null ?
                            <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                            :
                            <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
                        }
                    </View>
                    <View style={tw`items-center`}>
                        <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.text1}</Text>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">

                <View style={tw`flex-1`}>
                    <ProgressSteps {...progressStepsStyle} >
                        <ProgressStep label="" onNext={onNextStep1}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Select the dates and enter the details below </Text>
                                </View>
                                <View style={tw`bg-[#fff] rounded-[3] flex py-5`}>
                                    <CalendarPicker
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={moment().toDate()}
                                        maxDate={moment().add(1, 'month').toDate()}
                                        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                                        months={['January', 'Februray', 'March', 'Abril', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December']}

                                        todayBackgroundColor="#e6ffe6"
                                        selectedDayColor="#66ff33"
                                        selectedDayTextColor="#000000"
                                        scaleFactor={375}
                                        textStyle={{
                                            fontFamily: 'Cochin',
                                            color: '#000000',
                                        }}
                                        onDateChange={onDateChange}
                                    />
                                </View>
                                <View style={tw` bg-white rounded-t-xl  mt-6 py-7`}>
                                    <View style={tw`flex-row justify-center`}>
                                        <View style={tw` w-35 mr-5`}>
                                            <Text style={tw`text-[4] font-bold text-right	`} >*Date:</Text>
                                        </View>
                                        <View style={tw` w-40`}>
                                            <Text style={tw` text-base font-semibold `}>{moment(startDate).format('D')}-{moment(endDate).format('D')}</Text>
                                        </View>

                                    </View>
                                    <View style={tw`flex-row justify-center items-center`}>
                                        <View style={tw` w-40 `}>
                                            <Text style={tw` text-[4] font-bold text-right`} >*Production Type: </Text>
                                        </View>
                                        <View style={tw` w-45 `}>

                                            <SelectDropdown
                                                data={props?.getproductionlist}
                                                onSelect={(selectedItem, index) => {
                                                    console.log("id>>", selectedItem._id, index)
                                                    setProduction(selectedItem._id)
                                                }}
                                                defaultButtonText={'Film'}
                                                buttonTextAfterSelection={(selectedItem, index) => {

                                                    return selectedItem.title
                                                }}
                                                buttonStyle={styles.dropdown1BtnStyle}
                                                buttonTextStyle={styles.dropdown1BtnTxtStyle}

                                                rowTextForSelection={(item, index) => {

                                                    return item.title
                                                }}
                                            />
                                        </View>


                                    </View>
                                    <View style={tw`flex-row justify-center items-center`}>
                                        <View style={tw` w-35`}>
                                            <Text style={tw`text-sm font-bold text-right`} >Title: </Text>
                                        </View>
                                        <View style={tw`h-15 w-45`}>

                                            <TextInput
                                                style={tw`border-b	border-[#d9d9d9] text-black	pl-2 h-15`}
                                                placeholder="Tittle"
                                                value={title}
                                                onChangeText={(text) => setTitle(text)}
                                                placeholderTextColor={'#999999'}

                                            />
                                        </View>
                                    </View>
                                    <View style={tw`flex-row mx-auto items-center mb-5`}>
                                        <View style={tw` w-30`}>
                                            <Text style={tw`text-sm font-bold text-right`} >Description: </Text>
                                        </View>
                                        <View style={tw`h-15 w-45`}>

                                            <TextInput
                                                style={tw`border-b	border-[#d9d9d9] text-black	pl-2 h-15`}
                                                placeholder="Description"
                                                value={description}
                                                onChangeText={(text) => setDescription(text)}
                                                placeholderTextColor={'#999999'}
                                                multiline={true}
                                            />
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </ProgressStep>
                        <ProgressStep label="" >
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Tab a department to select Cru to invite</Text>
                                </View>

                                {selectprofile == true ?
                                    <View style={tw`mx-3 `}>
                                        <FlatList
                                            data={userarrlist}
                                            Key={2}
                                            numColumns={2}
                                            renderItem={renderItem3}
                                            keyExtractor={item => item.id}
                                        />
                                    </View>
                                    :
                                    <View style={tw`rounded-[3]`}>
                                        <FlatList
                                            data={props?.getmycrulist?.data}
                                            renderItem={renderItem}
                                            keyExtractor={item => item.id}
                                            showsHorizontalScrollIndicator={false}
                                            //horizontal={true}
                                            key={3}
                                            numColumns={3}
                                        />
                                    </View>
                                }

                            </View>
                        </ProgressStep>
                        <ProgressStep label="" onSubmit={onsubmitbtn}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Review your Cru invites before sending</Text>
                                </View>
                                <View style={tw`mx-3 `}>
                                    <FlatList
                                        data={finalarr}
                                        Key={2}
                                        numColumns={2}
                                        renderItem={renderItem4}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>

            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Newproject;
