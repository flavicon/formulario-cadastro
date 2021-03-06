let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let phoneInput = document.querySelector('#phone');
let passwordInput = document.querySelector('#password');

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

passwordInput.addEventListener('focusout', () => {
    
    if(passwordInput.value.trim() === "" || passwordInput.value.length < 8){
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
    } else {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
    }

})

document.querySelector('#form').addEventListener('submit', () => {
    
    event.preventDefault();

    let elementTable = document.querySelector('.data-table');
    
    if (
        nameInput.classList.value === "form-control is-invalid" || nameInput.value === "" ||
        emailInput.classList.value === "form-control is-invalid" || emailInput.value === "" ||
        phoneInput.classList.value === "form-control is-invalid" || phoneInput.value === "" 
        //passwordInput.classList.value === "form-control is-invalid" || passwordInput.value === "" 
    ) {
        alert('Ta faltando coisa!');
    } else if (elementTable.children.length > 0) {
        let rowsTable = document.querySelectorAll('.inputName');

        rowsTable.forEach(element => {
            
            if (element.innerHTML.toUpperCase() === nameInput.value.toUpperCase()) {
                alert('Já tem vet'); 
            } else {
                elementTable.innerHTML += 
                `
                <tr>
                    <td class="inputName">${nameInput.value}</td>
                    <td class="">${emailInput.value}</td>
                    <td class="">${phoneInput.value}</td>
                </tr>
                `
            }
        })
        
    } else {
        elementTable.innerHTML += 
        `
        <tr>
            <td class="inputName">${nameInput.value}</td>
            <td class="">${emailInput.value}</td>
            <td class="">${phoneInput.value}</td>
        </tr>
        `
    }
})