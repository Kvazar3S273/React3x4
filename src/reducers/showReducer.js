import { 
  SHOW_USERS, 
  SHOW_PRICES, 
  SHOW_ADVERTISE, 
  SHOW_INFO, 
  NOT_SHOW_MENU, 
  
  PHOTO_FND,
  PHOTO_FOTOPRINT,
  PHOTO_PHOTOBOOKS,
  PHOTO_SCAN,
  PHOTO_DUPLICATE,
  PHOTO_RESTORATION,
  PHOTO_BACKGROUND,
  PHOTO_ADDITION,
  PHOTO_BOTTLE,
  PHOTO_PHOTOPICTURE,

  COMP_XEROX,
  COMP_SCAN,
  COMP_LAMINATE,
  COMP_BINDER,
  COMP_USBFLASH,
  COMP_DISCPRINT,
  COMP_EMAIL
} from "../constants/actionTypes";

const initialState = {
  isShowU: false,
  isShowP: false,
  isShowA: false,
  isShowI: false,
  notShowMenu: false,

  isPhotoFnd: false,
  isPhotoFotoprint: false,
  isPhotoPhotobooks: false,
  isPhotoScan: false,
  isPhotoDuplicate: false,
  isPhotoRestoration: false,
  isPhotoBackground: false,
  isPhotoAddition: false,
  isPhotoBottle: false,
  isPhotoPhotoprint: false,

  isCompXerox: false,
  isCompScan: false,
  isCompLaminate: false,
  isCompBinder: false,
  isCompUsbflash: false,
  isCompDiscprint: false,
  isCompEmail: false
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

    case PHOTO_FND: {
      return {
        isPhotoFnd: true,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_FOTOPRINT: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: true,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_PHOTOBOOKS: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_SCAN: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: true,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_DUPLICATE: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: true,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_RESTORATION: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: true,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_BACKGROUND: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: true,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case   PHOTO_ADDITION: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: true,
        isPhotoBottle: false,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_BOTTLE: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: true,
        isPhotoPhotoprint: false
      };
    }
    case PHOTO_PHOTOPICTURE: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: true
      };
    }


    case COMP_XEROX: {
      return {
        isCompXerox: true,
        isCompScan: false,
        isCompLaminate: false,
        isCompBinder: false,
        isCompUsbflash: false,
        isCompDiscprint: false,
        isCompEmail: false
      };
    }
    case COMP_SCAN: {
      return {
        isCompXerox: false,
        isCompScan: true,
        isCompLaminate: false,
        isCompBinder: false,
        isCompUsbflash: false,
        isCompDiscprint: false,
        isCompEmail: false
      };
    }
    case COMP_LAMINATE: {
      return {
        isCompXerox: false,
        isCompScan: false,
        isCompLaminate: true,
        isCompBinder: false,
        isCompUsbflash: false,
        isCompDiscprint: false,
        isCompEmail: false
      };
    }
    case COMP_BINDER: {
      return {
        isCompXerox: false,
        isCompScan: false,
        isCompLaminate: false,
        isCompBinder: true,
        isCompUsbflash: false,
        isCompDiscprint: false,
        isCompEmail: false
      };
    }
    case COMP_USBFLASH: {
      return {
        isCompXerox: false,
        isCompScan: false,
        isCompLaminate: false,
        isCompBinder: false,
        isCompUsbflash: true,
        isCompDiscprint: false,
        isCompEmail: false
      };
    }
    case COMP_DISCPRINT: {
      return {
        isCompXerox: false,
        isCompScan: false,
        isCompLaminate: false,
        isCompBinder: false,
        isCompUsbflash: false,
        isCompDiscprint: true,
        isCompEmail: false
      };
    }
    case COMP_EMAIL: {
      return {
        isCompXerox: false,
        isCompScan: false,
        isCompLaminate: false,
        isCompBinder: false,
        isCompUsbflash: false,
        isCompDiscprint: false,
        isCompEmail: true
      };
    }

    default:{
        return state;
    }
  }
}

export default showReducer;
