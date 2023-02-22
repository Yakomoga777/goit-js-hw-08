import _ from 'lodash';

//*1 Створюємо об"єкт з посиланнями на DOM
const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('[type = "email"]'),
  textareaEl: document.querySelector('[name="message"]'),
};
// console.log(refs.textareaEl);

//* 2 Додаємо слухачі подій
refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', _.throttle(onFormInput, 500));

// //* 3 виводимо збережені і розпарсені дані зі сховища в окремі змінні
// const savedDataFeedback = localStorage.getItem('feedback-form-state');
// const parsedDataFeedback = JSON.parse(savedDataFeedback);
// console.log(parsedDataFeedback);

//* Оголошуємо callback функції
function onFormSubmit(event) {
  event.preventDefault();
  const savedDataFeedback = localStorage.getItem('feedback-form-state');
  const parsedDataFeedback = JSON.parse(savedDataFeedback);
  // console.log(parsedDataFeedback);
  if (parsedDataFeedback) {
    console.log('Submit - ', parsedDataFeedback);
    localStorage.removeItem('feedback-form-state');
  }
  event.currentTarget.reset();
}

function onFormInput(event) {
  const email = refs.emailEl.value;
  const message = refs.textareaEl.value;
  // console.log('email - ', email);
  // console.log('message - ', message);
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: refs.emailEl.value,
      message: refs.textareaEl.value,
    })
  );
}

fillFields();
function fillFields() {
  const savedDataFeedback = localStorage.getItem('feedback-form-state');
  const parsedDataFeedback = JSON.parse(savedDataFeedback);
  if (parsedDataFeedback) {
    refs.emailEl.value = parsedDataFeedback.email;
    refs.textareaEl.value = parsedDataFeedback.message;

    // console.log(parsedDataFeedback.email);
    // console.log(parsedDataFeedback.message);
  }
}
