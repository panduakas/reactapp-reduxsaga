import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_HELLO_WORLD, receiveHelloWorld } from './actions';

function* HelloWorld(action) {
   try {
      yield put(receiveHelloWorld("hello world from redux saga"));
   } catch (e) {
    yield put(receiveHelloWorld("hello world from redux saga"));
   }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, HelloWorld);
}
