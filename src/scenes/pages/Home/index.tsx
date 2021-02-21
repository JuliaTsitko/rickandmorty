import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ICharacter, IInfoCharacters, IStore } from '../../../reducers/types';
import { bindActionCreators, Dispatch } from 'redux';
import { clearAllCharactersAction, getAllCharactersPerPageAction } from '../../../actions/charactersActions';
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
    info: IInfoCharacters | null;
    clearAllCharacters: () => void;
}

const Home: FunctionComponent<IHome> = ({
    getAllCharactersPerPage,
    getOneCharacter,
    results,
    clearCharacterInfo,
    character,
    info,
    clearAllCharacters
}) => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        clearAllCharacters();
        fetchAllCharactersPerPage();
    }, []);

    const fetchAllCharactersPerPage = () => {
        const model: ICharactersModel = new CharactersModel();
        model.page = page;
        getAllCharactersPerPage(model);

        if (info) {
            if (page === info.pages && hasMore) {
                setHasMore(false);
            }

            if (page < info.pages) {
                setPage(page + 1);
            }
        }
    };

    const onHandleClick = (id: number) => {
        if (character) {
            clearCharacterInfo();
        }
        const model: ICharacterModel = new CharacterModel();
        model.id = id;
        getOneCharacter(model);
    };

    if (info === null || results === null) {
        return null;
    }

    return (
        <section className="home-section">
            <InfiniteScroll
                next={fetchAllCharactersPerPage}
                hasMore={hasMore}
                loader={() => {
                    return <h3 className="noto700 alive">Loading...</h3>
                }}
                dataLength={results.length}
            >
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
            </InfiniteScroll>
        </section>
    );
};

const mapStateToProps = (store: IStore) => ({
    results: getCharactersState(store).results,
    info: getCharactersState(store).info,
    character: getCharacterState(store).character
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllCharactersPerPage: bindActionCreators(getAllCharactersPerPageAction, dispatch),
    getOneCharacter: bindActionCreators(getOneCharacterAction, dispatch),
    clearCharacterInfo: bindActionCreators(clearOneCharacterAction, dispatch),
    clearAllCharacters: bindActionCreators(clearAllCharactersAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
