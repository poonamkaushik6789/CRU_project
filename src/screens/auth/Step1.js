import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, ImageBackground, SafeAreaView, Modal, FlatList, ScrollView, TouchableOpacity, TextInput, Alert, StatusBar, Animated, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import { Api, Utilise } from '../../common';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { requestMultiplePermisisons } from '../../services/permission';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import tw from 'twrnc';
import api from '../../common/Api';

const Step1 = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue
    } = props;

    //Reference
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // Local states
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [deparmentname, setDepartmentname] = useState('');
    const [refreshFiled, setRefreshFiled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [cameramodalVisible, setCameramodalVisible] = useState(false);
    const [Cinematographer, setCinematographer] = useState(false);
    const [operator, setOperator] = useState(false);
    const [assistantcamera, setAssistantcamera] = useState(false);
    const [assistantcamera2, setAssistantcamera2] = useState(false);
    const [loader, setLoader] = useState(false);

    const [deviceToken, setDeviceToken] = useState();
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    // Animation references
    const fadeAnim = useRef(new Animated.Value(0)).current
    const transformAnim = useRef(new Animated.Value(300)).current

    console.log("props======>>>", props)
const signupId = props?.signupCredentials?.data?._id;
    useEffect(() => {
        props.departmentList();
        console.log("props.getdepartMentlist======>>>", props?.getdepartMentlist);
        console.log("getsubdepartmentlist====>>", props.getsubdepartmentlist)
    }, [])

    const data = [
        { id: 1, txt: 'first check', isChecked: false },
        { id: 2, txt: 'second check', isChecked: false },
        { id: 3, txt: 'third check', isChecked: false },
        { id: 4, txt: 'fourth check', isChecked: false },
        { id: 5, txt: 'fifth check', isChecked: false },
        { id: 6, txt: 'sixth check', isChecked: false },
        { id: 7, txt: 'seventh check', isChecked: false },
    ];
    const [products, setProducts] = useState(data);

    const handlecameacategory = (e) => {
        console.log("checkbox===>>>>",e.target)
        // let temp = products.map((product) => {
        //     console.log("checkbox===>", temp)
        //     if (id === product.id) {
        //         return { ...product, isChecked: !product.isChecked };
        //     }

        //     return product;

        // });
       // setProducts(temp);
    };


    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };
    const handledeparment = async (id, name) => {
        setDepartmentname(name);
        setCameramodalVisible(!cameramodalVisible);
        props.subdepartmentList(id);
    }
    // Login request submision 
    const handlestepSubmit = async () => {
        setModalVisible(!modalVisible)

    }
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
    const onNextStep1 = async () => {
        let request = {
            "_id": signupId,
            "workDepartments": ["63e4bebf43f6ad32e81057f4"],    
        }
        props.updateworkdepartment(request, props.navigation);
    }
    const onNextStep2 = async () => {
        let request = {
            "_id": signupId,
            "willingToTravel": ["kapil"],    
        }
        props.updateAreatoTravel(request, props.navigation);
    }
    const onsubmitbtn = async () => {
        let request = {
            "_id": signupId,
            "availabilty": ["kapil"],    
        }
        props.updateAvailAbilty(request, props.navigation);
        setModalVisible(!modalVisible)
    }
    const DATA = [
        {

            image: ImageIcons.social,
            text1: 'Camera operator',

        },
        {
            image: ImageIcons.event,
            text1: 'Cinematographer',

        },
        {
            image: ImageIcons.event,
            text1: 'Gaffer',

        },
        {
            image: ImageIcons.event,
            text1: 'Cinematographer',

        },
        {
            image: ImageIcons.event,
            text1: 'Gaffer',

        },
        {
            image: ImageIcons.event,
            text1: 'Cinematographer',

        },
        {
            image: ImageIcons.event,
            text1: 'Gaffer',

        },

    ];

    const renderItem = ({ item, index }) => {

        return (
            <View style={tw`bg-[#fff]  flex items-center`}>
                <TouchableOpacity style={tw`border  border-[#ccc] w-33 items-center p-5`} onPress={() => handledeparment(item._id, item.departmentName)}>
                    <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-13 h-13 `, { tintColor: '#5fafcf' }]} />
                    <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>{item.departmentName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const renderItem1 = ({ item, index }) => {
console.log("checboxitem===>",item)
        return (
            <View style={tw`flex-row items-center my-1`}>
                <CheckBox
                    value={item.isChecked}
                    onValueChange={setCinematographer}
                    onChange={ handlecameacategory}
                    tintColors={{ true: '#5fafcf', false: '#ccc', }}
                />
                <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>{item.name}</Text>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" && "padding"}
            style={tw`flex-1 justify-center bg-[#e6e6e6]`}  >
            <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />

            <View style={tw`flex-row bg-white justify-between mt-10 p-4`}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={ImageIcons.backarrow} style={{ tintColor: '#fff', width: 15, height: 25 }} />
                </TouchableOpacity>
                <View>
                    <Text style={tw` font-normal text-[#000] text-[5]`}>Step1</Text>
                </View>
                <View>

                </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">

                <View style={tw`flex-1`}>
                    <ProgressSteps {...progressStepsStyle} >
                        <ProgressStep label="" onNext={onNextStep1}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Which department do you work in?</Text>
                                </View>
                                <View style={tw`rounded-[3]`}>
                                    <FlatList
                                        data={props?.getdepartMentlist}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        //horizontal={true}
                                        numColumns={3}
                                    />
                                </View>

                            </View>
                        </ProgressStep>
                        <ProgressStep label="" onNext={onNextStep2}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Select the areas you are willing to travel</Text>
                                </View>
                                <View style={tw`bg-[#fff] rounded-[3] flex p-1`}>
                                    {/* <MapView
                                        initialRegion={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    /> */}
                                    <Image source={ImageIcons.googlemap} style={tw`w-full h-96`} />
                                </View>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="" onSubmit={onsubmitbtn}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Tab on a date to edit your availability</Text>
                                </View>
                                <View style={tw`bg-[#fff] rounded-[3] flex py-5`}>
                                    <CalendarPicker
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
                                        textStyle={{
                                            fontFamily: 'Cochin',
                                            color: '#000000',
                                        }}
                                        onDateChange={onDateChange}
                                    />
                                </View>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>
                
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
                                <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >Congratulations</Text>
                            </View>
                            <View style={tw`p-3`}>
                                <View style={tw`mx-5`}>
                                    <Text style={tw`text-[#000000] mt-1 font-normal text-[3.1]`}>You are now an official Cru Member! Feel free to use this resource to create your own crews, find jobs, events, and maintain your personal business all in one place!</Text>
                                </View>
                                <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mx-10`} onPress={() => { setModalVisible(false); props.navigation.navigate('Login') }}>
                                    <Text style={tw`text-[#000] text-[3.5] p-2 px-15 font-normal`}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={cameramodalVisible}
                    onRequestClose={() => {
                        setCameramodalVisible(!cameramodalVisible);
                    }}
                    style={tw`m-0`} >
                    <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
                        <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
                            <View style={tw`flex-row justify-between items-center border-b border-[#ccc] p-4`}>
                                <View>
                                    <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' ></Text>
                                </View>
                                <View>
                                    <Text style={tw`text-base font-normal  text-black align-middle`} numberOfLines={1} ellipsizeMode='tail' >{deparmentname}</Text>
                                </View>
                                <TouchableOpacity onPress={() => setCameramodalVisible(false)}>
                                    <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                                </TouchableOpacity>
                            </View>
                            <View style={tw`p-3`}>

                                <View style={tw`mx-5 my-2 items-center`}>
                                    <Text style={tw`text-[#000000]  font-normal text-[3.9]`}>Select the positions you work</Text>
                                </View>
                                <View>
                                    <FlatList
                                        data={props?.getsubdepartmentlist}
                                        renderItem={renderItem1}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                    //horizontal={true}
                                    //numColumns={3}
                                    />
                                </View>
                                {/* <View style={tw`flex-row items-center my-1`}>
                                    <CheckBox
                                        value={Cinematographer}
                                        onValueChange={setCinematographer}
                                        tintColors={{ true: '#5fafcf', false: '#ccc', }}
                                    />
                                    <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>Cinematographer</Text>
                                </View>
                                <View style={tw`flex-row items-center  my-1`}>
                                    <CheckBox
                                        value={operator}
                                        onValueChange={setOperator}
                                        tintColors={{ true: '#5fafcf', false: '#ccc', }}
                                    />
                                    <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>Camera Operator</Text>
                                </View>
                                <View style={tw`flex-row items-center  my-1`}>
                                    <CheckBox
                                        value={assistantcamera}
                                        onValueChange={setAssistantcamera}
                                        tintColors={{ true: '#5fafcf', false: '#ccc', }}
                                    />
                                    <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>1st Assistant Camera</Text>
                                </View>
                                <View style={tw`flex-row items-center  my-1`}>
                                    <CheckBox
                                        value={assistantcamera2}
                                        onValueChange={setAssistantcamera2}
                                        tintColors={{ true: '#5fafcf', false: '#ccc', }}
                                    />
                                    <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>1st Assistant Camera</Text>
                                </View>
                                <View style={tw`flex-row items-center  my-1`}>
                                    <CheckBox
                                        value={loader}
                                        onValueChange={setLoader}
                                        tintColors={{ true: '#5fafcf', false: '#ccc', }}

                                    />
                                    <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>Loader</Text>
                                </View> */}
                                <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mx-10`} onPress={() => handlecameacategory()}>
                                    <Text style={tw`text-[#000] text-[3.5] p-2 px-15 font-normal`}>Save</Text>
                                </TouchableOpacity>


                            </View>


                        </View>
                    </View>

                </Modal>
            </ScrollView>
            <Loader isVisible={props?.loginLoader} />


        </KeyboardAvoidingView >
    )
}


const formikEnhancer = withFormik({
    validateOnMount: true,
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
        password: Yup.string().required('Please enter password'),
    }),
    mapPropsToValues: (props) => {
        return {
            email: '',
            password: '',
        };
    },
    handleSubmit: async (payload, { props }) => {
        // props.login(payload)
    },
});


export default formikEnhancer(Step1);