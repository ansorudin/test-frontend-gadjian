import axios from "axios"
import { PERSON_LOADING, PERSON_ERROR, PERSON_LOADED, CHANGE_INPUT_FIND  } from "../ActionTypes"


export const getPersonnelData = () => {
    return async(dispatch) => {
        dispatch({
            type: PERSON_LOADING
        })
        try {
            let res = await axios.get(process.env.REACT_APP_API_KEY)
            if(res.error){
                dispatch({
                    type: PERSON_ERROR,
                    payload: res.error
                })
            }else{
                dispatch({
                    type: PERSON_LOADED,
                    payload: res.data.results,
                })
            }
        } catch (error) {
            dispatch({
                type: PERSON_ERROR,
                payload: error.message
            })
            
        }  
    }
}

export const onValueFindSearch = (text) => {
    return{
        type : CHANGE_INPUT_FIND,
        payload : text
    }
}