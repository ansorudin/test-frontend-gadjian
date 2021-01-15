import { CHANGE_INPUT_FIND } from "../../action/ActionTypes"

const data = {
    inputValue : ''
}

const FindByNameReducer = (state = data, action) => {
    switch(action.type){
        case CHANGE_INPUT_FIND :
            return {inputValue : action.payload}
        default :
            return state
    }
}

export default FindByNameReducer