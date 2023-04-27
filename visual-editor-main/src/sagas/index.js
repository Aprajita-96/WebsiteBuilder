import { call, put, takeEvery, takeLatest, select, take } from 'redux-saga/effects'
import axios from 'axios';
import store from '../utils/store';

function* postWebPages(action) {
    console.log(" inside fethuser");

  try {
     const someValue = yield select(state => state);
     let postObject={
      fileName: action.filename,
      config:someValue.config,
      layout:someValue.layout
     }
     console.log(postObject);
     const user = yield call(axios.post, "http://localhost:8080/api/pages/", postObject);
     console.log("user", user);
    console.log("someValue", someValue);

    // axios.put('/api/update', data)

   // const updateWebPage = yield call(axios.put, "http://localhost:5000/", data);
    //console.log("updateWebPage", updateWebPage);


    //const webPagesSaved = yield call(axios.get, "http://localhost:5000/");
    //console.log("webPagesSaved", webPagesSaved);
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}



function* getWebPages() {
    console.log(" inside fethuser");
  try {
    const webPagesSaved = yield call(axios.get, "http://localhost:8080/api/pages");
    console.log("webPagesSaved", webPagesSaved);

    yield put({ type: 'WEBPAGES_FETCH_SUCCEEDED', webPagesSaved })
  } catch (e) {
    yield put({ type: 'WEBPAGES_FETCH_FAILED', message: e.message })
  }
}

function* deleteWebPages(action) {
  console.log(" inside delete" +"********"+action);
try {
  const webPagesSaved = yield call(axios.delete, "http://localhost:8080/api/pages/"+action.filename);
  console.log("webPagesSaved", webPagesSaved);
  store.dispatch({ type: 'RESET_BLOCK_DATA' });
  yield put({ type: 'RESET_BLOCK_DATA'})
} catch (e) {
  yield put({ type: 'WEBPAGES_DELETE_FAILED', message: e.message })
}
}

export default function* rootSaga() {
    
 yield takeEvery('LAYOUT/SAVE_BLOCKS_DATA', postWebPages);
  yield takeEvery('LAYOUT/RETRIVE_BLOCK_DATA', getWebPages);
  yield takeEvery('LAYOUT/DELETE_FILE',deleteWebPages)

}
