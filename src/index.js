import './style.css';

const refresh = document.querySelector('.refresh');
const gameContainer = document.getElementById('form');
const newScoreler = document.getElementById('name');
const scores = document.getElementById('score');
const listContainer = document.querySelector('.scores-list');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/infBnU0Sa9VBfIz7gMIc/scores/';

const renderScore = (gameUsers) => {
  const gamers = (gameUsers.result);
  let list = '';
  gamers.forEach((gameUser) => {
    list += `<li>${gameUser.user} : ${gameUser.score}</li>`;
    listContainer.innerHTML = list;
  });
};
const getScores = async () => {
  const res = await fetch(url);
  const data = await res.json();
  renderScore(data);
};
refresh.addEventListener('click', () => {
  getScores();
});
const addScoreForm = async () => {
  const res = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: newScoreler.value,
      score: scores.value,
    }),
  });
  const data = await (await res).json();
  newScoreler.value = '';
  scores.value = '';
  return data;
};
gameContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  addScoreForm();
});
