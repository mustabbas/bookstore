import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-headere">
            <div className="container">
            <Link to = '/'><a className="navbar-brand" id ="navText" href="#"> Bookstore CMS</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to = '/'>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">BOOKS</a>
                    </li>
                    </Link>
                    <Link to = '/Categories'>
                    <li className="nav-item">
                    <a className="nav-link" href="#">CATEGORIES</a>
                    </li>
                    </Link>
                </ul>
                <FontAwesomeIcon className = "faUserCircle" icon={faUserCircle} />
                </div>
            </div>
        </nav>
</div>
);

export default Header;