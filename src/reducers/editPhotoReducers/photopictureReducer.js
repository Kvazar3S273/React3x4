import { GET_PHOTOPICTURE } from "../../constants/actionTypes";

const initialState = {
  listphotopictures: [],
};

function photopictureReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer duplicate data :", data);

  switch (type) {
    case GET_PHOTOPICTURE: {
      return {
        listphotopictures: data,
      };
    }

    default:
      return state;
  }
}
export default photopictureReducer;
