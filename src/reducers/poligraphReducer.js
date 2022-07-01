import {
  POLIGRAPH_VISITCARD,
  POLIGRAPH_FLYER,
  POLIGRAPH_CALENDAR,
  POLIGRAPH_TAG,
  POLIGRAPH_STICKER,
  POLIGRAPH_HANGER,
  POLIGRAPH_ORACAL,
  POLIGRAPH_BANER,
  POLIGRAPH_PVC,
  POLIGRAPH_OTHER
} from "../constants/actionTypes";
  
  const initialState = {
    isPoligraphVisitcard: false,
    isPoligraphFlyer: false,
    isPoligraphCalendar: false,
    isPoligraphTag: false,
    isPoligraphSticker: false,
    isPoligraphHanger: false,
    isPoligraphOracal: false,
    isPoligraphBaner: false,
    isPoligraphPvc: false,
    isPoligraphOther: false
  };
  
  function poligraphReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
      case POLIGRAPH_VISITCARD: {
        return {
            isPoligraphVisitcard: true,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_FLYER: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: true,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_CALENDAR: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: true,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_TAG: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: true,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_STICKER: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: true,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_HANGER: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: true,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_ORACAL: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: true,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_BANER: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: true,
            isPoligraphPvc: false,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_PVC: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: true,
            isPoligraphOther: false
        };
      }
      case POLIGRAPH_OTHER: {
        return {
            isPoligraphVisitcard: false,
            isPoligraphFlyer: false,
            isPoligraphCalendar: false,
            isPoligraphTag: false,
            isPoligraphSticker: false,
            isPoligraphHanger: false,
            isPoligraphOracal: false,
            isPoligraphBaner: false,
            isPoligraphPvc: false,
            isPoligraphOther: true
        };
      }
      
      default: {
        return state;
      }
    }
  }
  
  export default poligraphReducer;