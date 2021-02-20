import clientApi from './index';
import API_HOSTNAME from '../constants/api';
import * as models from './models';

export const getAllCharacters = (model: models.ICharactersModel) => clientApi.get(`${API_HOSTNAME}/character/?page=${model.page}`);
export const getCharacter = (model: models.ICharacterModel) => clientApi.get(`${API_HOSTNAME}/character/${model.id}`);
