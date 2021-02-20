import { takeLatest } from 'redux-saga/effects';
import * as sagaConstants from '../../constants/sagaConstants';
import * as worker from '../worker/characterWorker';

export default function* characterWatcher() {
    yield takeLatest(sagaConstants.GET_ONE_CHARACTER, worker.getOneCharacter);
}
