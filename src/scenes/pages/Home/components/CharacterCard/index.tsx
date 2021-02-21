import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ICharacterCard {
    src: string;
    alt: string;
    characterLink: string;
    name: string;
    status: string;
    species: string;
    id: number;
    onHandleClick?: (payload: number) => void;
    info?: {

    }
}

const CharacterCard: FunctionComponent<ICharacterCard> = ({
    src,
    alt,
    characterLink,
    name,
    status,
    species,
    onHandleClick,
    id,
    info
}) => {
    const statuses = ['Alive', 'unknown', 'Dead'];
    const statusClass = () => {
        const filtered = statuses.filter((element: string) => {
            return element === status;
        });
        if (filtered.length > 0) {
            return filtered[0].toLowerCase();
        }
        return statuses[1];
    };
    return (
        <article className="character-card">
            <div className="image-wrapper">
                <img src={src} alt={alt} className="image"/>
            </div>
            <div className="info-wrapper">
                <section className="title">
                    <Link
                        to={characterLink}
                        className="link noto700"
                        target="_blank"
                        onClick={onHandleClick ? () => onHandleClick(id) : undefined}
                    >
                        {
                            name
                        }
                    </Link>
                    <span className="status noto500">
                        <span className={`icon ${statusClass()}`} />
                        {
                            `${status} - ${species}`
                        }
                    </span>
                </section>
                {
                    info ? Object.entries(info).map((element: any) => {
                        return (
                            <section className="section">
                                <span className="title noto500">{element[0]}</span>
                                <span className="content noto500">{element[1]}</span>
                            </section>
                        )
                }) : null
                }
            </div>
        </article>
    )
};

export default CharacterCard;
