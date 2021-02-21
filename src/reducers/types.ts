export interface IActionState {
    type: string;
    payload?: any;
}

export interface IStore {
    state: {
        charactersState: ICharacters;
        characterState: ICharacterState;
    }
}

export interface IInfoCharacters {
    count: number;
    next: string;
    pages: number;
    prev: string | null;
}

export interface ICharacterState {
    character: ICharacter | null;
}

export interface ICharacter {
    created: string;
    episode: Array<string>;
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    }
    name: string;
    origin: {
        name: string;
        url: string;
    }
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface ICharacters {
    info: IInfoCharacters | null;
    results: Array<ICharacter> | null;
    error: any | null;
}
