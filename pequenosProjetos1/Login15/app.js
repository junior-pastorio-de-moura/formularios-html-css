const inputs = document.querySelectorAll('.input');
const buttons = document.querySelector('.login-button');

const handleFocus = ({ target }) => {
    const span = target.previousElementsSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if(target.value === ''){
        const span = target.previousElementsSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;
    if (username.value && password.value.lenght) {
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled','');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));