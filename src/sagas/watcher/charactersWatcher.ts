import { takeLatest } from 'redux-saga/effects';
import * as sagaConstants from '../../constants/sagaConstants';
import * as worker from '../worker/charactersWorker';

export default function* charactersWatcher() {
    yield takeLatest(sagaConstants.GET_ALL_CHARACTERS_PER_PAGE, worker.getAllCharactersPerPage);
}
