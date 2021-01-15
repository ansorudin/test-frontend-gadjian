import {combineReducers} from 'redux';
import MobileActiveReducer from './mobileSectionReducer/MobileActiveReducer';
import FindByNameReducer from './personelListReducer/FindByNameReducer';
import GetDataUserReducer from './personelListReducer/GetDataUserReducer';

const rootReducer = combineReducers({
    PersonnelList : GetDataUserReducer,
    FindByName : FindByNameReducer,
    MobileActive : MobileActiveReducer
})

export default rootReducer