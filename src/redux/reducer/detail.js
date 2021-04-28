/* eslint-disable import/prefer-default-export */
const initDetail = {
  data: [],
};

export const detailReducer = (state = initDetail, action) => {
  if (action.type === 'SET_DETAIL') {
    return {
      ...state,
      data: action.value,
    };
  }
  return state;
};
