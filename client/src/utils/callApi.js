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

  dispatch(loadingStart());
  try {
    const response = await fetch(endpoint, options);
    if (response.status === 500) {
      return dispatch(showErrorMessage('Server is down'));
    }
    const data = await response.json();
    dispatch(loadingEnd());
    return dispatch({ type: actionType, payload: data });
  } catch {
    dispatch(showErrorMessage('Server is down'));
  }
};

export default callApi;
