import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { ICharacter, IStore } from '../../../reducers/types';
import { bindActionCreators, Dispatch } from 'redux';
import { getAllCharactersPerPageAction } from '../../../actions/charactersActions';
import { CharacterModel, CharactersModel, ICharacterModel, ICharactersModel } from '../../../api/models';
import { getCharactersState } from '../../../reducers/characters';
import CharacterCard from './components/CharacterCard';
import * as routes from './../../../constants/routes';
import { clearOneCharacterAction, getOneCharacterAction } from '../../../actions/characterActions';
import { getCharacterState } from '../../../reducers/character';

interface IHome {
    getAllCharactersPerPage: (payload: ICharactersModel) => void;
    getOneCharacter: (payload: ICharacterModel) => void;
    results: Array<ICharacter> | null;
    clearCharacterInfo: () => void;
    character: ICharacter | null;
}

const Home: FunctionComponent<IHome> = ({
    getAllCharactersPerPage,
    getOneCharacter,
    results,
    clearCharacterInfo,
    character
}) => {
    useEffect(() => {
        const model: ICharactersModel = new CharactersModel();
        model.page = 1;
        getAllCharactersPerPage(model);
    }, []);

    const onHandleClick = (id: number) => {
        if (character) {
            clearCharacterInfo();
        }
        const model: ICharacterModel = new CharacterModel();
        model.id = id;
        getOneCharacter(model);
    };

    return (
        <section className="home-section">
            {
                results && results.map((result: ICharacter) => {
                    return (
                        <CharacterCard
                            src={result.image}
                            alt={result.name}
                            characterLink={routes.CHARACTER}
                            name={result.name}
                            status={result.status}
                            species={result.species}
                            id={result.id}
                            onHandleClick={onHandleClick}
                        />
                    );
                })
            }
        </section>
    );
};

const mapStateToProps = (store: IStore) => ({
    results: getCharactersState(store).results,
    character: getCharacterState(store).character
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllCharactersPerPage: bindActionCreators(getAllCharactersPerPageAction, dispatch),
    getOneCharacter: bindActionCreators(getOneCharacterAction, dispatch),
    clearCharacterInfo: bindActionCreators(clearOneCharacterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
