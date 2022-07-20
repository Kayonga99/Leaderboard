import './style.css';

const refresh = document.querySelector('.refresh');
const gameContainer = document.getElementById('form');
const newScoreler = document.getElementById('name');
const scores = document.getElementById('score');
const listContainer = document.querySelector('.scores-list');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/infBnU0Sa9VBfIz7gMIc/scores/';