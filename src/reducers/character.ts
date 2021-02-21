import * as reduxConstants from '../constants/reduxConstants';
import {
    ICharacterState,
    IActionState,
    IStore
} from './types';

const initialState: ICharacterState = {
    character: null
};

export default function characterState(state = initialState, action: IActionState) {
    const { type, payload } = action;
    switch (type) {
        case reduxConstants.GET_ONE_CHARACTER_SUCCESS: {
            return { ...state, character: payload };
        }
        case reduxConstants.CLEAR_ONE_CHARACTER: {
            return { ...state, character: null };
        }
        case reduxConstants.GET_ONE_CHARACTER_ERROR: {
            return { ...state, error: payload };
        }
        case reduxConstants.CLEAR_ONE_CHARACTER_ERROR: {
            return { ...state, error: null };
        }
        default: {
            return state;
        }
    }
}

export const getCharacterState = (store: IStore) => store.state.characterState;
