import { 
    COMP_XEROX,
    COMP_SCAN,
    COMP_LAMINATE,
    COMP_BINDER,
    COMP_USBFLASH,
    COMP_VHS,
    COMP_DISCPRINT,
    COMP_EMAIL
  } from "../constants/actionTypes";
  
  const initialState = {
    isCompXerox: false,
    isCompScan: false,
    isCompLaminate: false,
    isCompBinder: false,
    isCompUsbflash: false,
    isCompVhs: false,
    isCompDiscprint: false,
    isCompEmail: false
  };
  
  function compReducer (state = initialState, action) {
    const {type} = action;
    switch(type) {
  
      case COMP_XEROX: {
        return {
          isCompXerox: true,
          isCompScan: false,
          isCompLaminate: false,
          isCompBinder: false,
          isCompUsbflash: false,
          isCompVhs: false,
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
          isCompVhs: false,
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
          isCompVhs: false,
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
          isCompVhs: false,
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
          isCompVhs: false,
          isCompDiscprint: false,
          isCompEmail: false
        };
      }
      case COMP_VHS: {
        return {
          isCompXerox: false,
          isCompScan: false,
          isCompLaminate: false,
          isCompBinder: false,
          isCompUsbflash: false,
          isCompVhs: true,
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
          isCompVhs: false,
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
          isCompVhs: false,
          isCompDiscprint: false,
          isCompEmail: true
        };
      }
  
      default:{
          return state;
      }
    }
  }
  
  export default compReducer;
  