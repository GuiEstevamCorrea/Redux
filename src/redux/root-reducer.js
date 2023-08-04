import { combineReducers } from "redux";
<<<<<<< HEAD

import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer });
=======
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({ userReducer, cartReducer });
>>>>>>> origin/starter

export default rootReducer;
