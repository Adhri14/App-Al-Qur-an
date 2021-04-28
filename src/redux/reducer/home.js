/* eslint-disable import/prefer-default-export */
const initHome = {
  surah: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_SURAH') {
    return {
      ...state,
      surah: action.value,
    };
  }
  return state;
};
