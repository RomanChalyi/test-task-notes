import { loadingStart, loadingEnd, showErrorMessage } from '../app/action';

const BASE_URL = 'http://localhost:8000/notes';
const initialOptions = {
  method: 'get',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
};

const callApi = (path, actionType, requestOptions = {}) => async (dispatch) => {
  const endpoint = `${BASE_URL}${path}`;
  const options = { ...initialOptions, ...requestOptions };
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  dispatch(loadingStart());
  try {
    const response = await fetch(endpoint, options);
    dispatch(loadingEnd());
    if (response.status !== 200) {
      return dispatch(showErrorMessage('Error.default'));
    }
    const data = await response.json();

    return actionType ? dispatch({ type: actionType, payload: data }) : data;
  } catch {
    dispatch(loadingEnd());
    dispatch(showErrorMessage('Error.server'));
  }
};

export default callApi;
