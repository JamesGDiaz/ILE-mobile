const initState = {
  images: [null],
  imageList: null,
  modalVisible: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "setImageList":
      return {
        ...state,
        imageList: action.uris
      };
    case "setModalVisible":
      return {
        ...state,
        modalVisible: action.modalVisible
      };
    default:
      return state;
  }
};

export default rootReducer;
