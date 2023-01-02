// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления


// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

const colors = new Map([['красный', 'red'], ['зеленый', 'green'],
                       ['синий','blue'], ['желтый','yellow'],
                       ['голубой','cyan'], ['пурпурный', 'purple'], 
                       ['фиолетовый', 'violet'], ['розово-красный', 'carmazin'],
                       ['светло-коричневый', 'lightbrown']]); 
// преобразование JSON в объект JavaScript

Object.values(colors);
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {

  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  while (fruitsList.firstChild) {
    fruitsList.removeChild(fruitsList.firstChild);
  }

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    const list = fruitsList;
    const colorUl=colors.get(fruits [i].color);
    const newLi = document.createElement("li");
    newLi.className=`fruit__item fruit_${colorUl}`;
    const divInfo = document.createElement("div");
    divInfo.className ="fruit__info";
    const divIndex = document.createElement("div");
    divIndex.innerHTML=`index ${i}`;
    const divKind = document.createElement("div");
    divKind.innerHTML=`kind: ${ fruits [i].kind }`;
    const divColor = document.createElement("div");
    divColor.innerHTML=`color: ${ fruits [i].color}`;
    const divWeight = document.createElement("div");
    divWeight.innerHTML=`weght: ${ fruits [i].weight}`;

    list.appendChild(newLi);
    newLi.appendChild(divInfo);
    divInfo.append(divIndex);
    divInfo.append(divKind);
    divInfo.append(divColor);
    divInfo.append(divWeight);

  }

 
};

// первая отрисовка карточек
display();
  
/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


let result = [];
let firstList =[];
// перемешивание массива
const shuffleFruits = () => {
    result = [];
    firstList=fruits; 
  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {

    let indx =getRandomInt(0,fruits.length-1);
    // TODO: допишите функцию перемешивания массива
    result.push(fruits[indx]);
    fruits.splice(indx,1);

  }

  if (JSON.stringify(result)===JSON.stringify(firstList)){
    alert ("Не удалось смешать список.");
  }
//  else alert ("Массив перемешан!")
};

shuffleButton.addEventListener('click', () => {
   shuffleFruits();
   fruits=result;
   display();

});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
