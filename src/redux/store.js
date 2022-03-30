import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducer';

const ComposeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, ComposeEnhancers);

export default store;
