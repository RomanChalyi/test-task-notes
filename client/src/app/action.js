import { LOADING_START, LOADING_END, SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from './types';

export const loadingStart = () => ({ type: LOADING_START });
export const loadingEnd = () => ({ type: LOADING_END });

export const showErrorMessage = (message) => ({ type: SHOW_ERROR_MESSAGE, payload: message });
export const hideErrorMessage = () => ({ type: HIDE_ERROR_MESSAGE });
