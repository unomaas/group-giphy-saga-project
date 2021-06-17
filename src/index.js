//#region ⬇⬇ All document setup, below:
// ⬇ App Setup:
import App from './components/App/App';
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
//#endregion ⬆⬆ All document setup above.


//#region ⬇⬇ All Saga functions, below:
// ⬇ rootSaga below:
function* rootSaga() {
  yield takeEvery('GET_RESULTS', getResults);
  yield takeEvery('GET_FAVORITES',getFavorites);
}; // End rootSaga

// ⬇ getResults below: 
function* getResults() {
  console.log('In getResults Saga');
  try {
    // ⬇ Calling to server to load result data:
    const response = yield axios.get('/api/search');
    console.log('Response is:', response.data);
    // ⬇ Sending the data from the server to the reducer to hold:
    yield put({ type: 'SET_RESULTS', payload: response.data });
  } // End try
  catch (error) {
    console.error('Error is:', error);
  } // End catch
}; // End getResults

// ⬇ getFavorites below: 
function* getFavorites() {
  console.log('In getFavorites');
  try {
    // ⬇ Calling to server to load result data:
    const response = yield axios.get('/api/favorites');
    console.log('Response favorites:', response.data)
    // ⬇ Sending the data from the server to the reducer to hold:
    yield put({type: 'SET_FAVORITES', payload: response.data});
  } // End try 
  catch (error) {
    console.error('Error in GET favorites', error)
  } // End catch
}; // End getFavorites
//#endregion ⬆⬆ All Saga functions above.


//#region ⬇⬇ All Reducer functions, below:
// ⬇ searchResults below:
const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESULTS':
      return action.payload;
    default:
      return state;
  } // End switch}
}

// ⬇ favoriteResults below:
const favoriteResults = (state =[], action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.payload;
    default:
      return state;
  }
}
//#endregion ⬆⬆ All Reducer functions above. 


//#region ⬇⬇ All Store & Middleware setup, below:
// ⬇ Create sagaMiddleware:
const sagaMiddleware = createSagaMiddleware();

// ⬇ Create store:
const store = createStore(
  combineReducers({ searchResults }),
  applyMiddleware(sagaMiddleware, logger),
);

// ⬇ Pass rootSaga into our sagaMiddleware:
sagaMiddleware.run(rootSaga);

// ⬇ Rendering:
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//#endregion ⬆⬆ All Store & Middleware setup above.