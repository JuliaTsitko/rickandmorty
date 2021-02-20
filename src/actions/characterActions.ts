import * as sagaConstants from '../constants/sagaConstants';
import * as reduxConstants from '../constants/reduxConstants';
import { ICharacterModel } from '../api/models';

export const getOneCharacterAction = (payload: ICharacterModel) => ({
    type: sagaConstants.GET_ONE_CHARACTER,
    payload
});

export const clearOneCharacterAction = () => ({
    type: reduxConstants.CLEAR_ONE_CHARACTER
});


export const clearOneCharacterErrorAction = () => ({
    type: reduxConstants.CLEAR_ONE_CHARACTER_ERROR
});
