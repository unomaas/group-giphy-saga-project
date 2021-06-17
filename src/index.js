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

  // listen for dispatch for search results GET
  yield takeEvery('SEARCH_BY_KEYWORD');

} // End rootSaga

// searchSaga
function* searchSaga() {
  console.log(`in searchSaga keyword ${action.payload}`);

  try {
    const response = axios.get(`/api/search/?q=${action.payload}`);

    yield put({
      type: 'SET_SEARCH',
      payload: response.data
    });
  } catch (error) {
    console.log('Could not complete search: ', error);
  }
}
//#endregion ⬆⬆ All Saga functions above. 


//#region ⬇⬇ All Reducer functions, below:
const dummyReducer = (state = [], action) => {
  return state;
}
//#endregion ⬆⬆ All Reducer functions above. 


//#region ⬇⬇ All Store & Middleware setup, below:
// ⬇ Create sagaMiddleware:
const sagaMiddleware = createSagaMiddleware();

// ⬇ Create store:
const store = createStore(
  combineReducers({ dummyReducer }),
  applyMiddleware(sagaMiddleware, logger),
);

// ⬇ Pass rootSaga into our sagaMiddleware:
sagaMiddleware.run(rootSaga);

// ⬇ Rendering:
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//#endregion ⬆⬆ All Store & Middleware setup above.