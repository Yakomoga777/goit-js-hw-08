// const refs = {};
const formEl = document.querySelector('.feedback-form');
console.log(formEl);
const emailEl = document.querySelector('[type = "email"]');
console.log(emailEl);

emailEl.addEventListener('keypress', callback);

function callback() {
  console.log(`click`);
}
console.log('hello');
