import {
  PHOTO_FND,
  PHOTO_FOTOPRINT,
  PHOTO_PHOTOBOOKS,
  PHOTO_PHOTOBOOKS_BAMBOOK,
  PHOTO_PHOTOBOOKS_PHOTOBOOK,
  PHOTO_PHOTOBOOKS_PLANSHET,
  PHOTO_PHOTOBOOKS_PRINTBOOK,
  PHOTO_PHOTOBOOKS_SLIMBOOK,
  PHOTO_PHOTOBOOKS_UNIBOOK,
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
  isPhotoPhotobooksUniBook: false,
  isPhotoPhotobooksSlimBook: false,
  isPhotoPhotobooksBamBook: false,
  isPhotoPhotobooksPhotoBook: false,
  isPhotoPhotobooksPrintBook: false,
  isPhotoPhotobooksPlanshet: false,
  isPhotoScan: false,
  isPhotoDuplicate: false,
  isPhotoRestoration: false,
  isPhotoBackground: false,
  isPhotoAddition: false,
  isPhotoBottle: false,
  isPhotoPhotopicture: false
};

function fotoReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case PHOTO_FND: {
      return {
        isPhotoFnd: true,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_FOTOPRINT: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: true,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOBOOKS: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }

    case PHOTO_PHOTOBOOKS_BAMBOOK: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: true,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOBOOKS_PHOTOBOOK: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: true,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOBOOKS_PLANSHET: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: true,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOBOOKS_PRINTBOOK: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: true,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOBOOKS_SLIMBOOK: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: true,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOBOOKS_UNIBOOK: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: true,
        isPhotoPhotobooksUniBook: true,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }

    case PHOTO_SCAN: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: true,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_DUPLICATE: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: true,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_RESTORATION: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: true,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_BACKGROUND: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: true,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case   PHOTO_ADDITION: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: true,
        isPhotoBottle: false,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_BOTTLE: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: true,
        isPhotoPhotopicture: false
      };
    }
    case PHOTO_PHOTOPICTURE: {
      return {
        isPhotoFnd: false,
        isPhotoFotoprint: false,
        isPhotoPhotobooks: false,
        isPhotoPhotobooksUniBook: false,
        isPhotoPhotobooksSlimBook: false,
        isPhotoPhotobooksBamBook: false,
        isPhotoPhotobooksPhotoBook: false,
        isPhotoPhotobooksPrintBook: false,
        isPhotoPhotobooksPlanshet: false,
        isPhotoScan: false,
        isPhotoDuplicate: false,
        isPhotoRestoration: false,
        isPhotoBackground: false,
        isPhotoAddition: false,
        isPhotoBottle: false,
        isPhotoPhotopicture: true
      };
    }
    default: {
      return state;
    }
  }
}

export default fotoReducer;