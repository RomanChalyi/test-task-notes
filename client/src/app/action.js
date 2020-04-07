import { LOADING_START, LOADING_END } from './types';

export const loadingStart = () => ({ type: LOADING_START });

export const loadingEnd = () => ({ type: LOADING_END });
