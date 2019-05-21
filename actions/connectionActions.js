export const setImageList = uris => {
  return {
    type: "setImageList",
    uris
  };
};

export const setModalVisible = modalVisible => {
  return {
    type: "setModalVisible",
    modalVisible
  };
};
