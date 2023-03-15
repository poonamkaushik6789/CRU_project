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
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import tw from 'twrnc';

const Filmcascreen = (props) => {

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
        setShowFilmcaApp(true);
    };

    useEffect(() => {
        props.assignlogindata();
    }, [])

    const slides = [
        {
            key: 1,
            title: 'FILMCA',
            text: 'Description.\nSay something cool',
            image: ImageIcons.loginBgIcon,
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        {
            key: 2,
            title: 'FILMCA',
            text: 'Other cool stuff',
            image: ImageIcons.loginBgIcon,
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        {
            key: 3,
            title: 'FILMCA',
            text: 'I\'m already out of descriptions',
            image: ImageIcons.loginBgIcon,
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    ];
    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                }}>

                <Image  source={item.image}  style={tw`w-full h-100 `} />
                <Text style={tw`text-2xl text-[#5fafcf] mx-auto mt-3 font-bold `}>
                    {item.title}
                </Text>
                {/* <Text style={styles.text}>{item.text}</Text> */}
                <View style={tw`flex-1 mt-1 `}>
                    <View style={tw`w-80 ml-5 `}>
                        <RoundedButton
                            text="Sign In"
                            onPress={() => props.navigation.navigate("Login")}
                        />
                    </View>
                    <View style={tw`items-center my-5`}>
                        <Text style={tw` font-normal text-[#fff] text-[3.3]`}>Don't have an account ?</Text>
                    </View>

                    <View style={tw`w-80 ml-5`}>
                        <RoundedButton
                            text="Sign Up"
                            onPress={() => props.navigation.navigate("Registration")}
                        />
                    </View>

                </View>

                {/* <View><Text style={tw`text-sm text-center text-white mt-5 mx-auto px-6`}>{item.text}</Text></View> */}
            </View>
        );
    };



    //     return (
    //         <KeyboardAvoidingView
    //             behavior={Platform.OS === "ios" && "padding"}
    //             style={tw`flex-1 justify-center`}  >
    //             <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
    //             <ImageBackground
    //                 style={tw`flex-1 `}
    //                 source={ImageIcons.loginBgIcon}
    //                 imageStyle={{ resizeMode: 'cover' }}
    //             >
    //                 <LinearGradient
    //                     colors={[Colors.BLACK, 'rgba(0,0,0,0.5)']}
    //                     start={{ x: 0, y: 0 }} end={{ x: 0, y: 2 }}
    //                     style={tw`flex-1 `}>


    //                     <View style={tw`flex-1 mx-9 mt-15 `}>
    //                         <View style={tw`flex-1 mt-30 `}>
    //                             <Text style={tw`text-center font-normal text-[#5fafcf] text-[20]`}>FILMCA</Text>
    //                             <Text style={tw`text-center font-normal text-[#fff] text-[5.4]`}>be ready to capture</Text>
    //                         </View>
    //                         <View style={tw`flex-1 `}>
    //                             <View style={tw` `}>
    //                                 <RoundedButton
    //                                     text="Sign In"
    //                                     onPress={() => props.navigation.navigate("Login")}
    //                                 />
    //                             </View>
    //                             <View style={tw`items-center my-5`}>
    //                                 <Text style={tw` font-normal text-[#fff] text-[3.3]`}>Don't have an account ?</Text>
    //                             </View>

    //                             <View style={tw``}>
    //                                 <RoundedButton
    //                                     text="Sign Up"
    //                                     onPress={() => props.navigation.navigate("Registration")}
    //                                 />
    //                             </View>

    //                         </View>


    //                     </View>

    //                     <Loader isVisible={props?.loginLoader} />
    //                 </LinearGradient>
    //             </ImageBackground>
    //         </KeyboardAvoidingView >
    //     )
    // }

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
    // validateOnMount: true,
    // validationSchema: Yup.object().shape({
    //     email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
    //     password: Yup.string().required('Please enter password'),
    // }),
    mapPropsToValues: (props) => {
        return {
            // email: '',
            // password: '',
        };
    },
    handleSubmit: async (payload, { props }) => {
        // props.login(payload)
    },
});


export default formikEnhancer(Filmcascreen);
