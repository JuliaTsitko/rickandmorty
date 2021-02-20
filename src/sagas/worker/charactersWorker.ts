import { put, call } from 'redux-saga/effects';
import { ICharactersModel } from '../../api/models';
import * as api from './../../api/api';
import * as reduxConstants from './../../constants/reduxConstants';

interface ICharactersAction {
    type: string;
    payload: ICharactersModel;
}

export function* getAllCharactersPerPage(action: ICharactersAction) {
    try {
        const { payload } = action;
        const { data } = yield call(api.getAllCharacters, payload);
        yield put({
            type: reduxConstants.GET_ALL_CHARACTERS_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: reduxConstants.GET_ALL_CHARACTERS_ERROR,
            payload: error
        })
    }
}
