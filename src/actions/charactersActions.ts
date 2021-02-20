import * as sagaConstants from '../constants/sagaConstants';
import * as reduxConstants from '../constants/reduxConstants';
import { ICharactersModel } from '../api/models';

export const getAllCharactersPerPageAction = (payload: ICharactersModel) => ({
    type: sagaConstants.GET_ALL_CHARACTERS_PER_PAGE,
    payload
});

export const clearAllCharactersError = () => ({
    type: reduxConstants.CLEAR_ALL_CHARACTERS_ERROR
});

export const clearAllCharacters = () => ({
    type: reduxConstants.CLEAR_ALL_CHARACTERS
});
