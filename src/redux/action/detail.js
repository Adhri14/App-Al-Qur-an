/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import Axios from 'axios';
import { API_AYAT } from '../../config';

export const getDataAyat = (nomor) => (dispatch) => {
  Axios.get(`${API_AYAT(nomor)}`)
    .then((res) => {
      dispatch({ type: 'SET_DETAIL', value: res.data });
    });
};