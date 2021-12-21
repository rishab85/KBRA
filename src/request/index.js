import axios from "axios";
import getService from "./services";
import {storeInstance} from '../store';
import { setError, setLoading } from "../store/ui/actions";

/**
 * 
 * @param {String} serviceName name of service defined in services.js
 * @param {Object} options list of additional configs to be passed to axios
 */
export async function httpRequest(serviceName, options={}){
    const serviceConfig = getService(serviceName)
    const {params={}, ...otherServiceConfig} = serviceConfig;
    const {params:optionParam={}, ...optionConfig} = options;
    storeInstance.dispatch(setLoading(true))
   return  await axios({...otherServiceConfig, ...optionConfig, params: {...params, ...optionParam}})
   .then((res)=>{
       if(res.error) return storeInstance.dispatch(setError(true))
       return res && res.data
    })
   .catch((e)=>{
       //handle exception globally
       storeInstance.dispatch(setError(true))
   }).finally(()=>{
     storeInstance.dispatch(setLoading(false))
   })

}

export default httpRequest