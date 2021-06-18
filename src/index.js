//#region ⬇⬇ All document setup, below:
// ⬇ App & index Setup:
import App from './components/App/App';
import './index.css';
// ⬇ React/Redux Setup:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// ⬇ Middleware Setup:
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// ⬇ Saga Setup:
import { takeEvery, put } from 'redux-saga/effects';
// ⬇ Server Calls Setup:
import axios from 'axios';
// ⬇ Font setup:
import './fonts/OpenDyslexia/opendyslexic-regular-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-regular-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-bold-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-bold-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-italic-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-italic-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-bolditalic-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-bolditalic-webfont.woff2'
//#endregion ⬆⬆ All document setup above.


//#region ⬇⬇ All Saga functions, below:
// ⬇ rootSaga below:
function* rootSaga() {
  yield takeEvery('GET_FAVORITES', getFavorites);
  yield takeEvery('SEARCH_BY_KEYWORD', searchSaga);
}; // End rootSaga

// ⬇ searchSaga below:
function* searchSaga(action) {
  console.log(`In searchSaga, keyword: ${action.payload}`);
  try {
    // ⬇ Calling to server to get search data:
    const response = yield axios.get(`/api/search/?q=${action.payload}`);
    console.log('Response is:', response.data);
    // ⬇ Sending the data from the server to the reducer to hold:
    yield put({ type: 'SET_RESULTS', payload: response.data.data });
  } // End try
  catch (error) {
    console.error('Could not complete search: ', error);
  } // End catch
} // End searchSaga

// ⬇ getFavorites below: 
function* getFavorites() {
  console.log('In getFavorites');
  try {
    // ⬇ Calling to server to load result data:
    const response = yield axios.get('/api/favorite');
    console.log('Response is:', response.data)
    // ⬇ Sending the data from the server to the reducer to hold:
    yield put({ type: 'SET_FAVORITES', payload: response });
  } // End try 
  catch (error) {
    console.error('Error in GET favorites', error)
  } // End catch
}; // End getFavorites
//#endregion ⬆⬆ All Saga functions above. 


//#region ⬇⬇ All Reducer functions, below:
// ⬇ searchResults reducer below:
const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESULTS':
      return action.payload;
    default:
      return state;
  } // End switch
} // End searchResults

// ⬇ favoriteResults reducer below:
const favoriteResults = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.payload;
    default:
      return state;
  } // End switch
} // End favoriteResults
//#endregion ⬆⬆ All Reducer functions above. 


//#region ⬇⬇ All Store & Middleware setup, below:
// ⬇ Create sagaMiddleware:
const sagaMiddleware = createSagaMiddleware();

// ⬇ Create store:
const store = createStore(
  combineReducers({ searchResults, favoriteResults }),
  applyMiddleware(sagaMiddleware, logger),
);

// ⬇ Pass rootSaga into our sagaMiddleware:
sagaMiddleware.run(rootSaga);

// ⬇ Rendering:
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//#endregion ⬆⬆ All Store & Middleware setup above.