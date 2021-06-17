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

} // End rootSaga
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