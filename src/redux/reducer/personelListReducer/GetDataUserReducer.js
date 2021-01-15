import { PERSON_ERROR, PERSON_LOADED, PERSON_LOADING } from "../../action/ActionTypes"

const data = {
    loading: false,
    data: null,
    error: null
}

function GetDataUserReducer (state = data, action){
    switch(action.type){
        case PERSON_LOADING: 
            return {loading: true, data: null, error: null}
        case PERSON_LOADED:
            return {loading: false, data: action.payload, error: null}
        case PERSON_ERROR:
            return {...state, loading: false, error: action.payload}
        default: 
            return state
    }
}

export default GetDataUserReducer