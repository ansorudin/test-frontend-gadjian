import { CHANGE_ACTIVE_MOBILE } from "../../action/ActionTypes"

const data = {
    mobileActive : false
}

const MobileActiveReducer = (state = data, action) => {
    switch(action.type){
        case CHANGE_ACTIVE_MOBILE :
            return {mobileActive : action.payload}
        default :
            return state
    }
}

export default MobileActiveReducer