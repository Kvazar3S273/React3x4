import {
  REGISTER_AUTH,
  LOGIN_AUTH,
  LOG_OUT,
  REGISTER_BEGIN,
  REGISTER_FAIL,
  ERRORS,
} from "../constants/actionTypes";

const initialState = {
  isAuth: false,
  user: {},
  role: "",
  errorvalid: "",
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("Reducer data :", payload);

  switch (type) {
    case REGISTER_AUTH: {
      return {
        isAuth: true,
        user: payload,
      };
    }
    case REGISTER_BEGIN: {
      return {
        ...state,
      };
    }
    case LOGIN_AUTH: {
      return {
        isAuth: true,
        user: payload,
      };
    }
    case LOG_OUT: {
      return {
        isAuth: false,
        user: {},
      };
    }
    case ERRORS: {
      return {
        errorvalid: payload,
      };
    }
    case REGISTER_FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
