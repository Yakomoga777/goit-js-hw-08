!function(){var e={formEl:document.querySelector(".feedback-form"),emailEl:document.querySelector('[type = "email"]'),textareaEl:document.querySelector('[name="message"]')};e.formEl.addEventListener("submit",(function(e){e.preventDefault(),a&&(console.log("Submit - ",a),localStorage.removeItem("feedback-form-state"));e.currentTarget.reset()})),e.formEl.addEventListener("input",(function(t){e.emailEl.value,e.textareaEl.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e.emailEl.value,message:e.textareaEl.value}))})),e.textareaEl.addEventListener("input",(function(e){}));var t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);a&&(e.emailEl.value=a.email,e.textareaEl.value=a.message)}();
//# sourceMappingURL=03-feedback.06596b9c.js.map
