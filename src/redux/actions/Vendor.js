import {
    BUSINESS_LIST_DATA,    
} from './ActionTypes';
import { Alert } from 'react-native';
import { Api, Utilise } from '../../common';
//import AsyncStorage from '@react-native-community/async-storage';
import { search } from '../../common/SearchApiCalling';
import { CommonActions, StackActions } from '@react-navigation/native';

//msgdataid
export const openMessage =(data,navigation)=>{
    console.log(data,"msgidddd");
    return async (dispatch, getState) => {
       dispatch({ type: SET_OPENMESSAGE_DATA, payload:data }); 
      console.log(data,"msgidddd");
       navigation.navigate("MessageData");
  }
}
export const Newcoupon = (request, navigation) => {
  return async (getState) => {
    // let isInternetConnected = await getState().auth?.isInternetConnected;
    // if (isInternetConnected) {
      try {
        //console.log('abc')
  console.log('requestpayment==>>',request)

        let response = await Utilise.apiCalling('POST', Api.Newcoupon, request);
        console.log("xcç",response)
        if (response.status == "200") {
          Alert.alert("Transport", 'Save successfully.')
          // navigation.dispatch(
          //   StackActions.replace('Profile')
          // );
        } else {
          Alert.alert("Transport", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Transport", String(error?.message))
      }
    };
  }

// Add Report 

export const businessList = (navigation) => {

  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    let loginCredentials = await getState().auth?.loginCredentials;
    let loginToken = loginCredentials.token;

    let request = {
        "searchKey":"",
        "pageNo":1,
        "pageSize":32,
        "unconnectedFront":null,
        "searchFilterWithExpression":null,
        "baseTableIds":null,
        "uiCustomViewLayoutId":null,
        "uiCustomViewResolutionId":null,
        "uiComponentNameList":["fronts.frontList"]
    }

    if (isInternetConnected) {
      console.log('businessList request::::',request);  
      try {        
        //dispatch({ type: SET_LOGIN_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', Api.businessList,request, loginToken);        
        console.log('businessList response::::',response);
        //Alert.alert(type+' report added successfully');
        //dispatch({ type: SET_LOGIN_LOADER, payload: false });
       
        //navigation.navigate("Logs");
        //if (response?.status==200) {
            dispatch({ type: BUSINESS_LIST_DATA, payload: response?.data?.payload?.list });          
        // } else {
        //     Alert.alert(response?.message)
        // }    
      } catch (error) {
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch({ type: BUSINESS_LIST_DATA, payload: []})
        Alert.alert("VCA", String(error?.message))
      }
    }
  };
};

