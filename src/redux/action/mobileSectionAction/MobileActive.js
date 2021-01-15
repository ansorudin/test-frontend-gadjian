import { CHANGE_ACTIVE_MOBILE } from "../ActionTypes"

export const onMobileActive = () => {
    return{
        type : CHANGE_ACTIVE_MOBILE,
        payload : true
    }
}

export const onMobileNotActive = () => {
    return{
        type : CHANGE_ACTIVE_MOBILE,
        payload : false
    }
}