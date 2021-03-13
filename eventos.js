let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let phoneInput = document.querySelector('#phone');

nameInput.addEventListener('focusout', () => {

    if(nameInput.value.trim() === "" || nameInput.value.length < 3){
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
    } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
    }

})

emailInput.addEventListener('focusout', () => {
    
    if(emailInput.value.trim() === "" || emailInput.value.length < 3){
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    }

})

phoneInput.addEventListener('focusout', () => {
    
    if(phoneInput.value.trim() === "" || phoneInput.value.length < 9){
        phoneInput.classList.add('is-invalid');
        phoneInput.classList.remove('is-valid');
    } else {
        phoneInput.classList.remove('is-invalid');
        phoneInput.classList.add('is-valid');
    }

})

function clearInputs() {

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    nameInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    phoneInput.classList.remove('is-valid');

}

let namesInTable = document.querySelectorAll('.inputName');
let elementTable = document.querySelector('.data-table');

document.querySelector('#form').addEventListener('submit', () => {
    
    event.preventDefault();

    let alertError = document.querySelector('#alert-error');
    let alertSuccess = document.querySelector('#alert-success');
    

    if (
        nameInput.classList.value === "form-control is-invalid" || nameInput.value === "" ||
        emailInput.classList.value === "form-control is-invalid" || emailInput.value === "" ||
        phoneInput.classList.value === "form-control is-invalid" || phoneInput.value === "" 
    ) {

        alertError.classList.remove('d-none');

        setTimeout(() => {
            alertError.classList.add('d-none');
        }, 2000);
        
    } else {

        elementTable.innerHTML += 
        `
        <tr>
            <td class="inputName">${nameInput.value}</td>
            <td class="">${emailInput.value}</td>
            <td class="">${phoneInput.value}</td>
        </tr>
        `

        alertSuccess.classList.remove('d-none');

        setTimeout(() => {
            alertSuccess.classList.add('d-none');
        }, 2000);

        clearInputs();

    }
})