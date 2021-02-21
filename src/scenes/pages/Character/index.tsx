import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { ICharacter as IApiCharacter, IStore } from '../../../reducers/types';
import { getCharacterState } from '../../../reducers/character';
import CharacterCard from '../Home/components/CharacterCard';
import * as routes from '../../../constants/routes';

interface ICharacter {
    character: IApiCharacter | null;
}

const Character: FunctionComponent<ICharacter> = ({
    character
}) => {

    if (character) {
        return (
            <section className="character-page">
                <CharacterCard
                    src={character.image}
                    alt={character.name}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    characterLink={routes.CHARACTER}
                    id={character.id}
                    info={{
                        gender: character.gender,
                        location: character.location.name,
                        origin: character.origin.name
                    }}
                />
            </section>
        );
    }
    return null;
};

const mapStateToProps = (store: IStore) => ({
    character: getCharacterState(store).character
});

export default connect(mapStateToProps)(Character);
