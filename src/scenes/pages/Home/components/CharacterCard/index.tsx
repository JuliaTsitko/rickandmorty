import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ICharacterCard {
    src: string;
    alt: string;
    characterLink: string;
    name: string;
    status: string;
    species: string;
}

const CharacterCard: FunctionComponent<ICharacterCard> = ({
    src,
    alt,
    characterLink,
    name,
    status,
    species
}) => {
    return (
        <article className="character-card">
            <div className="image-wrapper">
                <img src={src} alt={alt} className="character-image"/>
            </div>
            <div className="info-wrapper">
                <section className="title">
                    <Link to={characterLink} className="link">{name}</Link>
                    <span className="status">
                        <span className="icon" />
                        {
                            `${status} - ${species}`
                        }
                    </span>
                </section>
            </div>
        </article>
    )
};

export default CharacterCard;
