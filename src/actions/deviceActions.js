import { useState } from 'react';
import { DEVICE_GETINFO_REQUEST, DEVICE_GETINFO_SUCCESS, DEVICE_GETINFO_FAIL } from '../constants/deviceConstants'
import axios from 'axios'

export const getDeviceInfo = (setTemperature) => async (dispatch) => {
    dispatch({type: DEVICE_GETINFO_REQUEST, payload: (setTemperature)});
    try {
        //Onde é feita o GET, POST, PUT, DELETE para o Backend através de uma rota de acordo com a ação que deseja
        /* EXEMPLO DE GET utilizando axios para rota/api/devices/info/${companyName}/${deviceId}/${ref}
        const { data } = await axios.get(`/api/devices/info/${companyName}/${deviceId}/${ref}`, {
            headers: { Authorization: `Bearer ${userInfo.token}`}
        }); */
        
      
            dispatch({type: DEVICE_GETINFO_SUCCESS, payload: setTemperature});

    } catch (error) {
        const message =
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
                dispatch({ type: DEVICE_GETINFO_FAIL, payload: message});

    };
};