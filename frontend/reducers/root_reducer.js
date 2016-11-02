import {combineReducers} from 'redux';

import FiltersReducer from './filter_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  filters: FiltersReducer,
  session: SessionReducer
});

export default RootReducer;
