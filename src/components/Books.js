import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from './BooksList.js';
import BookAdd from './BookAdd.js';

const Books = () => (
        <div>
            <BooksList title = 'The Hunger Games' Author = 'Suzanne Collins'/>
            <BooksList title = 'Dune' Author = 'FrankHerbert'/>
            <BooksList title = 'CapitalintheTwenty-FirstCentury' Author = 'Suzanne Collins'/>
            <BookAdd />
        </div>
);

export default Books;