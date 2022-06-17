import { SHOW_USERS, SHOW_PRICES, SHOW_ADVERTISE, SHOW_INFO } from "../constants/actionTypes";

const initialState = {
  isShowU: false,
  isShowP: false,
  isShowA: false,
  isShowI: false,
  isShowUM: false,
  isShowPM: false,
  isShowAM: false,
  isShowIM: false
};

function showReducer (state = initialState, action) {
  const {type} = action;
  switch(type) {
    case SHOW_USERS:{
      return{
        isShowU: true,
        isShowP: false,
        isShowA: false,
        isShowI: false,
        isShowUM: false,
        isShowPM: false,
        isShowAM: false,
        isShowIM: false
      };
    }
    case SHOW_PRICES:{
      return{
        isShowU: false,
        isShowP: true,
        isShowA: false,
        isShowI: false
      };
    }
    case SHOW_ADVERTISE:{
      return{
        isShowU: false,
        isShowP: false,
        isShowA: true,
        isShowI: false
      };
    }
    case SHOW_INFO:{
      return{
        isShowU: false,
        isShowP: false,
        isShowA: false,
        isShowI: true
      };
    }
    default:{
        return state;
    }
  }
}

export default showReducer;
