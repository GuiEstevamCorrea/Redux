import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,
<<<<<<< HEAD
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
=======
}

const userReducer = (state = initialState, action) => {

  switch(action.type){
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };

    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null }

    default:
      return state;
  }
}


export default userReducer
>>>>>>> origin/starter
