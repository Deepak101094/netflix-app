import {USER_LOGIN, USER_LOGOUT } from '../action';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        type,
        user: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        type,
      };
    default:
      return state;
  }
};
export default userReducer;
