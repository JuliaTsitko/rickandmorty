import * as reduxConstants from '../constants/reduxConstants';
import {
    ICharacters,
    IActionState,
    IStore
} from './types';

const initialState: ICharacters = {
    info: null,
    results: null,
    error: null
};

export default function charactersState(state = initialState, action: IActionState) {
    const { type, payload } = action;
    switch (type) {
        case reduxConstants.GET_ALL_CHARACTERS_SUCCESS: {
            const { results } = state;
            if (results) {
                const concatenated = results.concat(payload.results);
                return { ...state, info: payload.info, results: concatenated };
            }
            return { ...state, info: payload.info, results: payload.results };
        }
        case reduxConstants.CLEAR_ALL_CHARACTERS: {
            return { ...state, info: null, results: null };
        }
        case reduxConstants.GET_ALL_CHARACTERS_ERROR: {
            return { ...state, error: payload };
        }
        case reduxConstants.CLEAR_ALL_CHARACTERS_ERROR: {
            return { ...state, error: null };
        }
        default: {
            return state;
        }
    }
}

export const getCharactersState = (store: IStore) => store.state.charactersState;
