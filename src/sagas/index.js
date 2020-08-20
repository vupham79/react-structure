import { all } from 'redux-saga/effects'
import BarSaga from '../components/Bar/BarSaga'
export default function* root() {
  yield all([BarSaga()])
}
