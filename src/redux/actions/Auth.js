/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import {
  SET_REGISTER_ACCOUNT,
  SET_LOGIN_CREDENTIAL,  
  SET_NETWORK_STATE,
  SET_LOGIN_LOADER,
  USER_LOGOUT
} from '../actions/ActionTypes';
import { Alert } from 'react-native';
import { Api,Utilise } from '../../common';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
//Set Network Connection
export const setNetworkConnection = (networkState) => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_NETWORK_STATE, payload: networkState });
  }
}
//signUp
export const signUp = (request, navigation) => {
  console.log("requestsignup==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.register, request);
        console.log("newsignup==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_REGISTER_ACCOUNT, payload: response.data });
        } else {
          //alert("hello")
          Alert.alert("Filmca", "user already exist")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//departmentList
export const departmentList = () => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_BILL_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.getbill}`)
              console.log("billresponse",response)
              dispatch({ type: GET_BILL_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_BILL_LIST, payload: response.data });
                  
              } else {
                  Alert.alert("Transport", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Transport", String(error?.message))
          }
      };
  }
};


<<<<<<< HEAD
=======
// Set LOGIN token for now fname and role is not recieved in api so passed static
// export const Logincoupon = (loginCredentials, navigation) => {
 
//   return async (dispatch, getState) => {
//     let isInternetConnected = await getState().auth?.isInternetConnected;
//     if (isInternetConnected) {
//       try {
//         dispatch({ type: SET_LOGIN_LOADER, payload: true });
//         let response = await Utilise.apiCalling('POST', Api.Logincoupon, loginCredentials);
//         console.log('response::::',response);
   
//         dispatch({ type: SET_LOGIN_LOADER, payload: false });
//         if (response?.data?.status==true) {
//               dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
//               dispatch(changeLoginCredentials(response?.data));
//               return;
//         }  else {
//           Alert.alert("Cru", 'Incorrect Email or Password')
//         }
//       } catch (error) {
//              dispatch({ type: SET_LOGIN_LOADER, payload: false });
//             dispatch(changeLoginCredentials(null));
//             Alert.alert("Cru", 'Something went wrong!')
//       }
//     }
//   };
// };
// export const Registrationcoupon = (loginCredentials, navigation) => {
 
//   return async (dispatch, getState) => {
//     let isInternetConnected = await getState().auth?.isInternetConnected;
//     if (isInternetConnected) {
//       try {
//         dispatch({ type: SET_LOGIN_LOADER, payload: true });
//         let response = await Utilise.apiCalling('POST',Api.Registrationcoupon, loginCredentials);
//         console.log('response::::',response);
   
//         dispatch({ type: SET_LOGIN_LOADER, payload: false });
//         if (response?.data?.status==false) {
//               dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
//               dispatch(changeLoginCredentials(response?.data));
//               return;
//         }  else {
//           Alert.alert("Cru", 'User Sucessfully')
//         }
//       } catch (error) {
//              dispatch({ type: SET_LOGIN_LOADER, payload: false });
//             dispatch(changeLoginCredentials(null));
//             Alert.alert("Cru", 'Something went wrong!')
//       }
//     }
//   };
// };
// export const Newcoupon = (request, navigation) => {
//   return async (getState) => {
//     // let isInternetConnected = await getState().auth?.isInternetConnected;
//     // if (isInternetConnected) {
//       try {
//         //console.log('abc')
//   console.log('requestpayment==>>',request)

//         let response = await Utilise.apiCalling('POST', Api.Newcoupon, request);
//         console.log("xcç",response)
//         if (response.status == "200") {
//           Alert.alert("Transport", 'Save successfully.')
//           // navigation.dispatch(
//           //   StackActions.replace('Profile')
//           // );
//         } else {
//           Alert.alert("Transport", String(response?.message))
//         }
//       } catch (error) {
//         Alert.alert("Transport", String(error?.message))
//       }
//     };
//   }
>>>>>>> 905efd1eaed540ccad97965759be201685b008dc
export const login = (loginCredentials, navigation) => {
  console.log('signinnnnn',loginCredentials)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {

       // alert('sdfdsf')
<<<<<<< HEAD
       
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch(changeLoginCredentials(response?.data));
        dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
        let response = await Utilise.apiCalling('POST', Api.login, loginCredentials);
=======
       let response = {'data':{
        "email":"test@yopmail.com",
        "user_id":2,
        "id":2
       }}
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch(changeLoginCredentials(response?.data));
        dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
        //let response = await Utilise.apiCalling('POST', Api.login, loginCredentials);
>>>>>>> 905efd1eaed540ccad97965759be201685b008dc
        //alert(isInternetConnected)
        console.log('response::::',response);
        
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        if (response?.status) {
          dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
          dispatch(changeLoginCredentials(response?.data));
          //navigation.navigate("Login");
         
          return;
        } else if (response?.status) {
          //console.log('logindataaaa')
          dispatch({ type: SET_VERIFICAITON_STEPS, payload: 0 })
          if (response?.data?.role === "user") {
            Alert.alert("Filmca", "Wrong email address and password")
            return;
          }
          dispatch(changeLoginCredentials(response?.data));
        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
      // console.log('abcdef',error)
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch(changeLoginCredentials(null));
        Alert.alert("Filmca", String(error?.message))
      }
    }
  };
};


// LOGOUT  
export const logout = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "USER_LOGOUT", payload: null });
    global.authToken = null;   
  };
};


export const changeLoginCredentials = (loginCredentials) => {
  console.log("loginCredentials==>", loginCredentials)
  return async (dispatch, getState) => {
    await AsyncStorage.setItem('@loginCredential', JSON.stringify(loginCredentials));
    dispatch({ type: SET_LOGIN_CREDENTIAL, payload: loginCredentials });
    let verificationStatus = loginCredentials?.store?.verificationStatus
    if (loginCredentials?.role === "vendor") {
      if (loginCredentials?.store) {
        dispatch({ type: SET_VERIFICAITON_STATUS, payload: verificationStatus })
        dispatch({ type: SET_CREATE_STORE_INFO, payload: loginCredentials?.store });
        if (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) {
          dispatch({ type: SET_VERIFICAITON_STEPS, payload: 3 })
        }
        dispatch(setStoreAutofilInfo(loginCredentials?.store, loginCredentials?.store?._id, verificationStatus));
        await AsyncStorage.setItem('@storeInfo', JSON.stringify(loginCredentials?.store));
      } else {
        let verificationStatuss = {
          "isStore": false,
          "isStoreImage": false,
          "isUtilityBill": false
        }
        dispatch(setStoreAutofilInfo(loginCredentials, null, verificationStatuss))
      }
    }
    global.authToken = loginCredentials?.token || null;
  };
};