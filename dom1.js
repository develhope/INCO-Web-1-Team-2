// Get the value of the form-input text input field and print it in the console

const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    console.log(input.value);
});
