import { SHOW_USERS, SHOW_PRICES } from "../constants/actionTypes";

const initialState = {
  isShow: false
};

function showReducer (state = initialState, action) {
  const {type} = action;
  switch(type) {
    case SHOW_USERS:
    case SHOW_PRICES:{
      return{
        isShow: true
      };
    }
    default:{
        return state;
    }
  }
}

export default showReducer;