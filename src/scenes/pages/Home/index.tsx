import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { ICharacter, IStore } from '../../../reducers/types';
import { bindActionCreators, Dispatch } from 'redux';
import { getAllCharactersPerPageAction } from '../../../actions/charactersActions';
import { CharactersModel, ICharactersModel } from '../../../api/models';
import { getCharactersState } from '../../../reducers/characters';
import CharacterCard from './components/CharacterCard';
import * as routes from './../../../constants/routes';

interface IHome {
    getAllCharactersPerPage: (payload: ICharactersModel) => void;
    results: Array<ICharacter> | null;
}

const Home: FunctionComponent<IHome> = ({
    getAllCharactersPerPage,
    results
}) => {
    useEffect(() => {
        const model: ICharactersModel = new CharactersModel();
        model.page = 1;
        getAllCharactersPerPage(model);
    }, []);

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
                        />
                    );
                })
            }
        </section>
    );
};

const mapStateToProps = (store: IStore) => ({
    results: getCharactersState(store).results
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllCharactersPerPage: bindActionCreators(getAllCharactersPerPageAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
