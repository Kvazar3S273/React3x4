import { GET_PHOTOSCAN } from "../../constants/actionTypes";

const initialState = {
  listphotoscans: [],
};

function photoscanReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer fotoprint data :", data);

  switch (type) {
    case GET_PHOTOSCAN: {
      return {
        listphotoscans: data,
      };
    }

    default:
      return state;
  }
}
export default photoscanReducer;
