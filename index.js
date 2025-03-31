const gameBoard = document.querySelector(".board");
const boardButton = document.querySelector('.board__button');
const inputBoard = document.querySelector('.board__input');
const form = gameBoard.querySelector('.board__form');


boardButton.addEventListener("click", (event) => {
  event.preventDefault()
  let columns = inputBoard.value;
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  } else {
    inputBoard.value = 4;
  }
  createBoard(columns, count);
});

function createBoard(columns, count) {

  gameBoard.textContent = "";

  const template = document.querySelector("#gameTableTemplate");
  let templateClone = template.cloneNode(true).content;
  const gameTable = templateClone.querySelector('.table');
  const buttonRestart = templateClone.querySelector(".table__button")

  for (let i = 0; i < count; i++) {
    gameTable.append(createCard());
  }

  gameTable.style = `
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${columns}, 1fr);
  `;

  gameBoard.append(gameTable);
    // Слушатель события клика на кнопке "Рестарт"
  buttonRestart.addEventListener("click", () => {
      // Обновление страницы
    location.reload();
  });
  gameBoard.append(buttonRestart);
}

function createCard(flippedIcon) {
  // Клонирование шаблона
  const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  // Поиск нужного элемента (потом понадобится)
  const card = template.querySelector('.card');

  // rutern card означает, что получившийся объект "выбрасывается" в то место, где будет вызвана функция createCard
  return card;
}
createCard()

