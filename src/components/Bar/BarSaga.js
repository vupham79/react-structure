import { all, takeLatest } from 'redux-saga/effects'
import { BarTypes } from './BarRedux'

function* barRootSagas() {
  yield all([yield takeLatest(BarTypes.GET_USER, getUser)])
}

function* getUser({ params, actionSuccess }) {
  try {
  } catch (error) {}
}

export default barRootSagas
