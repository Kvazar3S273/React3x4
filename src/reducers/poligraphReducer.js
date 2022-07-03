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
  POLIGRAPH_OTHER,
  POLIGRAPH_BUKLET,
  POLIGRAPH_PLAKAT,
  POLIGRAPH_BROSHURA,
  POLIGRAPH_3DCALENDAR,
  POLIGRAPH_BLANK,
  POLIGRAPH_MENU,
  POLIGRAPH_BLOKNOT,
  POLIGRAPH_CARDS,
  POLIGRAPH_LEAF,
  POLIGRAPH_KONVERT,
  POLIGRAPH_FOLDER,
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
  isPoligraphOther: false,
  isPoligraphBuklet: false,
  isPoligraphPlakat: false,
  isPoligraphBroshura: false,
  isPoligraph3dcalendar: false,
  isPoligraphBlank: false,
  isPoligraphMenu: false,
  isPoligraphBloknot: false,
  isPoligraphCards: false,
  isPoligraphLeaf: false,
  isPoligraphKonvert: false,
  isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
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
        isPoligraphOther: true,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_BUKLET: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: true,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_PLAKAT: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: true,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_BROSHURA: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: true,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_3DCALENDAR: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: true,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_BLANK: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: true,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_MENU: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: true,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_BLOKNOT: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: true,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_CARDS: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: true,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_LEAF: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: true,
        isPoligraphKonvert: false,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_KONVERT: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: true,
        isPoligraphFolder: false
      };
    }
    case POLIGRAPH_FOLDER: {
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
        isPoligraphOther: false,
        isPoligraphBuklet: false,
        isPoligraphPlakat: false,
        isPoligraphBroshura: false,
        isPoligraph3dcalendar: false,
        isPoligraphBlank: false,
        isPoligraphMenu: false,
        isPoligraphBloknot: false,
        isPoligraphCards: false,
        isPoligraphLeaf: false,
        isPoligraphKonvert: false,
        isPoligraphFolder: true
      };
    }

    default: {
      return state;
    }
  }
}

export default poligraphReducer;