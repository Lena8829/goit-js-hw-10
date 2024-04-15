// // Напиши скрипт, який після сабміту форми створює проміс.

// // *В середині колбека цього промісу через вказану користувачем кількість мілісекунд проміс має виконуватися(при fulfilled) або відхилятися(при rejected), залежно від обраної опції в радіокнопках.

// // *Значенням промісу, яке передається як аргумент у методи resolve / reject, має бути значення затримки в мілісекундах.

// // *Створений проміс треба опрацювати у відповідних для вдалого/невдалого виконання методах.

// // *Якщо проміс виконується вдало, виводь у консоль наступний рядок, де delay — це значення затримки виклику промісу в мілісекундах.

// //* `✅ Fulfilled promise in ${delay}ms`

// // *Якщо проміс буде відхилено, то виводь у консоль наступний рядок, де delay — це значення затримки промісу в мілісекундах.

// // *`❌ Rejected promise in ${delay}ms`;
// //-----------------------------------------------------------------------------------------------------------------------------

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayEl = form.querySelector("input[name='delay']"); //введене значення затримки
const stateEl = form.querySelector("input[name='state']");

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  // Отримуємо значення з поля введення та перетворюємо його число

  const delayValue = parseInt(delayEl.value);
  // Отримуємо обраний стан з радіокнопок
  const state = stateEl.value;

  console.log(state);

  // Створюємо новий проміс
  const promise = new Promise((resolve, reject) => {
    // Встановлюємо таймер
    setTimeout(() => {
      //перевіряємо стан обраної кнопки
      if (state === 'fulfilled') {
        resolve(delayValue);
      } else if (state === 'rejected') {
        reject(delayValue);
      }
    }, delayValue);
  });

  //обробляємо проміс
  promise
    .then(delay => {
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
