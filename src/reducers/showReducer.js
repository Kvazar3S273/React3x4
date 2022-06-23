import { SHOW_USERS, SHOW_PRICES, SHOW_ADVERTISE, SHOW_INFO, NOT_SHOW_MENU, PHOTO_ADDITION } from "../constants/actionTypes";

const initialState = {
  isShowU: false,
  isShowP: false,
  isShowA: false,
  isShowI: false,
  notShowMenu: false,
  isPhotoAddition: false
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
        notShowMenu: false
      };
    }
    case SHOW_PRICES:{
      return{
        isShowU: false,
        isShowP: true,
        isShowA: false,
        isShowI: false,
        notShowMenu: false
      };
    }
    case SHOW_ADVERTISE:{
      return{
        isShowU: false,
        isShowP: false,
        isShowA: true,
        isShowI: false,
        notShowMenu: false
      };
    }
    case SHOW_INFO:{
      return{
        isShowU: false,
        isShowP: false,
        isShowA: false,
        isShowI: true,
        notShowMenu: false
      };
    }
    case NOT_SHOW_MENU:{
      return{
        isShowU: false,
        isShowP: false,
        isShowA: false,
        isShowI: false,
        notShowMenu: true
      };
    }
    case PHOTO_ADDITION: {
      return {
        // isPhotoFnd: false,
        // isPhotoPhotoprint: false,
        // isPhotoPhotobooks: false,
        // isPhotoScan: false,
        // isPhotoDuplicate: false,
        // isPhotoRestoration: false,
        // isPhotoBackground: false,
        isPhotoAddition: true,
        // isPhotoBottle: false,
        // isPhotoPhotoprint: false
      };
    }
    default:{
        return state;
    }
  }
}

export default showReducer;
