
import { all, fork } from 'redux-saga/effects';
import AuthSaga from './authSaga';

function* dataSaga() {
    yield all([
        fork(AuthSaga),
        
    ]);
}


export default dataSaga;