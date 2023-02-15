/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import {
    BUSINESS_LIST_DATA,    
} from '../actions/ActionTypes';

// Redux states
const initialState = {
    businessList: []
};

const Vendor = (state = initialState, action) => {
    switch (action.type) {
       
        case BUSINESS_LIST_DATA:
            console.log('BUSINESS_LIST_DATA::',action.payload)
            return {
                ...state,
                businessList: action.payload,
            };        
        default:
            return state;
    }
};

export default Vendor;
