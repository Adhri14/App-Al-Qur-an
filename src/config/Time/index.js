/* eslint-disable import/prefer-default-export */
// import moment from 'moment';

// export const location = moment().local().format('HH:mm');

export const time = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }).replace(/(:\d{2}| [AP]M)$/, '');
