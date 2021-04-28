/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import Axios from 'axios';
import { API_SURAH } from '../../config';
import { storeData } from '../../utils';

export const getDataSurah = () => (dispatch) => {
  Axios.get(`${API_SURAH}`)
    .then((res) => {
      storeData('surah', { value: res.data });
      dispatch({ type: 'SET_SURAH', value: res.data });
    })
    .catch((err) => console.log(err));
};