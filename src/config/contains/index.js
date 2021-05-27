/* eslint-disable import/prefer-default-export */
export const contains = ({ nama }, query) => {
  if (nama.includes(query)) {
    return true;
  }

  return false;
};
