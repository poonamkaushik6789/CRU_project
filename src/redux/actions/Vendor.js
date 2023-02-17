import {
  BUSINESS_LIST_DATA,
  SET_NEW_POST,
  GET_POST_LIST,
  GET_POSTDETAIL_LIST,
  GET_COMMENT_LIST,
  SET_COMMENT_POST,
  SET_SEND_MESSAGE,
  GET_MESSAGE_LIST,
  SET_LIKE_UNLIKE_POST,
  GET_PROFILE_LIST,
  SET_UPDATE_PROFILE,
  SET_UPDATE_BACKGROUND,
  SET_UPDATE_ABOUT,
  GET_DELETE_POST,
} from './ActionTypes';
import { Alert } from 'react-native';
import { Api, Utilise } from '../../common';
//import AsyncStorage from '@react-native-community/async-storage';
import { search } from '../../common/SearchApiCalling';
import { CommonActions, StackActions } from '@react-navigation/native';

//msgdataid
export const openMessage = (data, navigation) => {
  console.log(data, "msgidddd");
  return async (dispatch, getState) => {
    dispatch({ type: SET_OPENMESSAGE_DATA, payload: data });
    console.log(data, "msgidddd");
    navigation.navigate("MessageData");
  }
}
export const Newcoupon = (request, navigation) => {
  return async (getState) => {
    // let isInternetConnected = await getState().auth?.isInternetConnected;
    // if (isInternetConnected) {
    try {
      //console.log('abc')
      console.log('requestpayment==>>', request)

      let response = await Utilise.apiCalling('POST', Api.Newcoupon, request);
      console.log("xcç", response)
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
      "searchKey": "",
      "pageNo": 1,
      "pageSize": 32,
      "unconnectedFront": null,
      "searchFilterWithExpression": null,
      "baseTableIds": null,
      "uiCustomViewLayoutId": null,
      "uiCustomViewResolutionId": null,
      "uiComponentNameList": ["fronts.frontList"]
    }

    if (isInternetConnected) {
      console.log('businessList request::::', request);
      try {
        //dispatch({ type: SET_LOGIN_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', Api.businessList, request, loginToken);
        console.log('businessList response::::', response);
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
        dispatch({ type: BUSINESS_LIST_DATA, payload: [] })
        Alert.alert("VCA", String(error?.message))
      }
    }
  };
};

//addnewpost
export const addpostnew = (request, navigation) => {
  console.log("requestaddpost==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.addnewpost, request);
        console.log("addnewpost==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_NEW_POST, payload: response.data });
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//postlisting socialfeedlist
export const socialfeedlist = () => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_POST_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.postlisting}`)
              console.log("postlisting_reponse",response)
              dispatch({ type: GET_POST_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_POST_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};
//postDetails 
export const postdetails = (userid) => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_POSTDETAIL_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.postDetails}/${userid}`)
              console.log("postlisting_reponse",response)
              dispatch({ type: GET_POSTDETAIL_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_POSTDETAIL_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};

//commentlistid 
export const commentIdlist = (id) => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_COMMENT_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.commentlistid}/${id}`)
              console.log("commentid_reponse",response)
              dispatch({ type: GET_COMMENT_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_COMMENT_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};
//addcomment 
export const commentAdd = (request, navigation) => {
  console.log("requestcommentAdd==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.addcomment, request);
        console.log("commentAdd==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_COMMENT_POST, payload: response.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//sendmessage 
export const messagesend = (request, navigation) => {
  console.log("requestmessagesend==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.sendmessage, request);
        console.log("messagesend==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_SEND_MESSAGE, payload: response.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//messagelist 
export const getmessage = (id) => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_MESSAGE_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.messagelist}/${id}`)
              console.log("commentid_reponse",response)
              dispatch({ type: GET_MESSAGE_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_MESSAGE_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};

//likeUnlikepost
export const likeunlikepost = (request, navigation) => {
  console.log("requestlikeUnlikepost==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.likeUnlikepost, request);
        console.log("likeUnlikepost==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_LIKE_UNLIKE_POST, payload: response.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//viewprofile 
export const profiledetail = (id) => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_PROFILE_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.viewprofile}/${id}`)
              console.log("viewprofile_reponse",response)
              dispatch({ type: GET_PROFILE_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_PROFILE_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};
//updateProfileImage 
export const updateprofile = (request, navigation) => {
  console.log("updateProfileImagerequest==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateProfileImage, request);
        console.log("updateProfileImage==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_PROFILE, payload: response.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//updatecoverImage 
export const updatebackgroudimage = (request, navigation) => {
  console.log("updatebackgroudimageresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updatecoverImage, request);
        console.log("updatebackgroudimage==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_BACKGROUND, payload: response.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//updateuserAbout updateabout
export const updateabout = (request, navigation) => {
  console.log("updatebackgroudimageresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateuserAbout, request);
        console.log("updatebackgroudimage==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_ABOUT, payload: response.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//deletePost
export const deletepost = (id) => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_DELETE_POST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.deletePost}/${id}`)
              console.log("deletepost==>>>",response)
              dispatch({ type: GET_DELETE_POST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_DELETE_POST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};