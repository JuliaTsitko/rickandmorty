import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from './../../../constants/routes';

function Header() {
    return (
        <header className="header">
            <Link
                to={routes.HOME}
                className="noto700 link"
            >
                Home
            </Link>
            <h1 className="noto700 title">Rick And Morty</h1>
            <a
                href="https://rickandmortyapi.com/"
                target="_blank"
                className="noto700 link"
            >
                Api Docs
            </a>
        </header>
    );
}

export default Header;
