import { put, call } from 'redux-saga/effects';
import { ICharacterModel } from '../../api/models';
import * as api from './../../api/api';
import * as reduxConstants from './../../constants/reduxConstants';

interface ICharacterAction {
    type: string;
    payload: ICharacterModel;
}

export function* getOneCharacter(action: ICharacterAction) {
    try {
        const { payload } = action;
        const { data } = yield call(api.getCharacter, payload);
        console.log(data);
        yield put({
            type: reduxConstants.GET_ONE_CHARACTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: reduxConstants.GET_ONE_CHARACTER_ERROR,
            payload: error
        })
    }
}
