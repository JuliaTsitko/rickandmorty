import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from './../../../constants/routes';

function Header() {
    return (
        <header className="header">
            <div className="link-wrapper">
                <Link
                    to={routes.HOME}
                    className="noto700 link"
                >
                    Home
                </Link>
                <a
                    href="https://rickandmortyapi.com/"
                    target="_blank"
                    className="noto700 link"
                >
                    Api Docs
                </a>
            </div>
            <div>
                <h1 className="noto700 title">Rick And Morty</h1>
            </div>
        </header>
    );
}

export default Header;
