import { createStore,combineReducers, applyMiddleware} from 'redux';
// import homeStore from './home/store'
import userStore from './user/store'
import thunk from 'redux-thunk';

const reducer = combineReducers({
  // homeStore,
  userStore
})

const store = createStore(reducer,applyMiddleware(thunk));

export default store;