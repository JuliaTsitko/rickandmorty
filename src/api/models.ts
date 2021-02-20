export interface ICharacterModel {
    id: number;
}

export class CharacterModel implements ICharacterModel {
    id = 1;
}

export interface ICharactersModel {
    page: number;
}

export class CharactersModel implements ICharactersModel {
    page = 1;
}


