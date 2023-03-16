import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert, StatusBar, Animated, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import AsyncStorage from '@react-native-community/async-storage';
//import messaging from '@react-native-firebase/messaging';
import { requestMultiplePermisisons } from '../../services/permission';
import AppIntroSlider from 'react-native-app-intro-slider';
import tw from 'twrnc';

const Welcomescreen = (props) => {

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
    const [rememberMe, setRememberMe] = useState(false)
    const [refreshFiled, setRefreshFiled] = useState(false)
    const [deviceToken, setDeviceToken] = useState();
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [showFilmcaApp, setShowFilmcaApp] = useState(false);

    const onDone = () => {
        props.navigation.navigate("Filmcascreen")
        // setShowFilmcaApp(true);
    };

    useEffect(() => {
        props.assignlogindata();
    }, [])

    const slides = [
        {
            key: 1,
            title: 'FILMCA',
            text: 'Description.\nSay something cool',
            image: ImageIcons.filmca,
            //           image: {
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
            // },
            backgroundColor: '#fffff',
        },
        {
            key: 2,
            title: 'FILMCA',
            text: 'Other cool stuff',
            image: ImageIcons.filmca1,
            //         image: {
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
            // },
            backgroundColor: '#fffff',
        },
        {
            key: 3,
            title: 'FILMCA',
            text: 'I\'m already out of descriptions',
            image: ImageIcons.filmca,
            //         image: {
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
            // },
            backgroundColor: '#fffff',
        }
    ];
    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                }}>
                {/* <ImageBackground
                    style={tw`w-full h-full `}
                    source={item.image}
                    imageStyle={{ resizeMode: 'center' }}
                ></ImageBackground> */}
                <Image source={item.image} style={tw`w-100 h-100 mt-40 `} />
                {/* <Text style={tw`text-2xl text-white mx-auto mt-3 font-bold `}>
                    {item.title}
                </Text> */}
                {/* <Text style={styles.text}>{item.text}</Text> */}


                {/* <View><Text style={tw`text-lg text-center text-white mt-5 mx-auto px-6`}>{item.text}</Text></View> */}
            </View>
        );
    };




    return (
        <>
            {showFilmcaApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native App Intro Slider using AppIntroSlider
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip
                            from any slide or Done button at last
                        </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowFilmcaApp(false)}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    bottomButton

                />
            )}
        </>
    );
};
const formikEnhancer = withFormik({


});


export default formikEnhancer(Welcomescreen);
