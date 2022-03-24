import {
    DEVICE_GETINFO_REQUEST,
    DEVICE_GETINFO_SUCCESS,
    DEVICE_GETINFO_FAIL
} from '../constants/deviceConstants'

export const deviceGetInfoReducer = (state = {loadingDeviceInfo: true, }, action) => {
    switch(action.type) {
        case DEVICE_GETINFO_REQUEST:
            return { loadingDeviceInfo: true };
        case DEVICE_GETINFO_SUCCESS:
            return { loadingDeviceInfo: false, temperatureSeted:action.payload};
        case DEVICE_GETINFO_FAIL:
            return { loadingDeviceInfo:false, error: action.payload };
        default:
            return state;
    }
}