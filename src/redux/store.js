<<<<<<< HEAD
import { createStore } from "redux";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export default store;
=======
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
>>>>>>> origin/starter
