import { all } from 'redux-saga/effects';
import charactersWatcher from './charactersWatcher';
import characterWatcher from './characterWatcher';

export default function* watcher() {
    yield all([
        charactersWatcher(),
        characterWatcher()
    ]);
}