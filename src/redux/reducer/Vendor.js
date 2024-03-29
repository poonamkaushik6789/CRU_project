/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

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
} from '../actions/ActionTypes';

// Redux states
const initialState = {
    businessList: [],
    newpost: false,
    newcomment: false,
    messagesend:false,
    postlikeunlike:false,
    getmessagelist:[],
    getpostlist: [],
    grtpostdetail: [],
    getcommentidlist: [],
};

const Vendor = (state = initialState, action) => {
    switch (action.type) {

        case BUSINESS_LIST_DATA:
            console.log('BUSINESS_LIST_DATA::', action.payload)
            return {
                ...state,
                businessList: action.payload,
            };

        case SET_NEW_POST:
            return {
                ...state,
                newpost: action.payload,
            };

        case GET_POST_LIST:
            return {
                ...state,
                getpostlist: action.payload,
            };
        case GET_COMMENT_LIST:
            return {
                ...state,
                getcommentidlist: action.payload,
            };
        case SET_COMMENT_POST:
            return {
                ...state,
                newcomment: action.payload,
            };
        case SET_SEND_MESSAGE:
            return {
                ...state,
                messagesend: action.payload,
            };
        case GET_MESSAGE_LIST:
        return {
            ...state,
            getmessagelist: action.payload,
        };
        case SET_LIKE_UNLIKE_POST:
        return {
            ...state,
            postlikeunlike: action.payload,
        };
        // case SET_COMMENT_POST:
        // return {
        //     ...state,
        //     newcomment: action.payload,
        // };
        // case SET_COMMENT_POST:
        // return {
        //     ...state,
        //     newcomment: action.payload,
        // };
        // case SET_COMMENT_POST:
        // return {
        //     ...state,
        //     newcomment: action.payload,
        // };

        // case SET_COMMENT_POST:
        // return {
        //     ...state,
        //     newcomment: action.payload,
        // };case SET_COMMENT_POST:
        // return {
        //     ...state,
        //     newcomment: action.payload,
        // };

        case GET_POSTDETAIL_LIST:
            return {
                ...state,
                grtpostdetail: action.payload,
            };
        default:
            return state;
    }
};

export default Vendor;
