import { GET_STICKER } from "../../constants/actionTypes";

const initialState = {
  liststickers: [],
};

function stickerReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer sticker data :", data);

  switch (type) {
    case GET_STICKER: {
      return {
        liststickers: data,
      };
    }

    default:
      return state;
  }
}
export default stickerReducer;
	