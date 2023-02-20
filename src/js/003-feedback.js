//*1 Створюємо об"єкт з посиланнями на DOM
const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('[type = "email"]'),
  textareaEl: document.querySelector('[name="message"]'),
};
// console.log(refs.textareaEl);

//* 2 Додаємо слухачі подій
refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', onFormInput);
// refs.emailEl.addEventListener('input', onEmailInput);
refs.textareaEl.addEventListener('input', onTextareaKeypress);
// refs.textareaEl.addEventListener('click', onTextareaKeypress);

//* 3 виводимо збережені і розпарсені дані зі сховища в окремі змінні
const savedDataFeedback = localStorage.getItem('feedback-form-state');
const parsedDataFeedback = JSON.parse(savedDataFeedback);
// console.log(parsedDataFeedback);

//* Оголошуємо callback функції
function onFormSubmit(event) {
  event.preventDefault();
  const savedDataFeedback = localStorage.getItem('feedback-form-state');
  const parsedDataFeedback = JSON.parse(savedDataFeedback);
  if (parsedDataFeedback) {
    console.log('Submit - ', parsedDataFeedback);
    localStorage.removeItem('feedback-form-state');
  }
  event.currentTarget.reset();
}

function onFormInput(event) {
  const email = refs.emailEl.value;
  const message = refs.textareaEl.value;

  console.log('email - ', email);
  console.log('message - ', message);

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
  if (parsedDataFeedback) {
    refs.emailEl.value = parsedDataFeedback.email;
    refs.textareaEl.value = parsedDataFeedback.message;
  }
}

function onEmailInput(event) {
  console.log(event);
}

function onTextareaKeypress(event) {
  //   const message = event.target.value;
  //   console.log(message);
  //   localStorage.setItem('feedback-msg', message);
  //   console.log(event);
}

function populateTextarea(event) {
  //   event.currentTarget.value = localStorage.getItem('feedback-msg');
  //   const saveMessage = localStorage.getItem('feedback-msg');
  //   if (saveMessage) {
  //     console.log(saveMessage);
  //     refs.textareaEl.value = saveMessage;
  //   }
}
