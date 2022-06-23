import {
  PHOTO_FND,
  PHOTO_PHOTOPRINT,
  PHOTO_PHOTOBOOKS,
  PHOTO_SCAN,
  PHOTO_DUPLICATE,
  PHOTO_RESTORATION,
  PHOTO_BACKGROUND,
  PHOTO_ADDITION,
  PHOTO_BOTTLE,
  PHOTO_PHOTOPICTURE
} from "../constants/actionTypes";

const initialState = {
  isPhotoFnd: false,
  isPhotoPhotoprint: false,
  isPhotoPhotobooks: false,
  isPhotoScan: false,
  isPhotoDuplicate: false,
  isPhotoRestoration: false,
  isPhotoBackground: false,
  isPhotoAddition: false,
  isPhotoBottle: false,
  isPhotoPhotoprint: false
};

function fotoReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case PHOTO_FND: {
      return {
        isPhotoFnd: true,
        isPhotoPhotoprint: false,
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
    case PHOTO_PHOTOPRINT: {
      return {
        isPhotoFnd: false,
        isPhotoPhotoprint: true,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
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
        isPhotoPhotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotoprint: true
      };
    }
    default: {
      return state;
    }
  }
}

export default fotoReducer;
