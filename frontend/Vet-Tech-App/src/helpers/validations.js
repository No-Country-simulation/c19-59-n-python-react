



const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateName = (name) => {

    if(name === '') return false;
    if(name.length <= 4) return true;

};


export const validatePhone = (phone) => {

    if(phone === '') return false;
    if(phone.length <= 8) return true;

};


export const validateEmail = (email) =>{
    if( email === '' ) return false;

    return !isEmailValid(email)

};



export const validatePasswordMatch = (password, password2) => {
    
    if (password2 === '') return false
    if (password === password2 ) return true
  };


export const validatePassword = (password) => {

    if( password === '') return false;

    // Requisitos de la contraseña
    const minLength = 8; // Longitud mínima
    const hasUpperCase = /[A-Z]/; // Al menos una letra mayúscula
    const hasLowerCase = /[a-z]/; // Al menos una letra minúscula
    const hasNumber = /[0-9]/; // Al menos un número
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Al menos un carácter especial

    // Comprobar longitud
    if (password.length < minLength) {
        return true;
    }
    // Comprobar letras mayúsculas
    if (!hasUpperCase.test(password)) {
        return true;
    }
    // Comprobar letras minúsculas
    if (!hasLowerCase.test(password)) {
        return true;
    }
    // Comprobar números
    if (!hasNumber.test(password)) {
        return true;
    }
    // Comprobar caracteres especiales
    if (!hasSpecialChar.test(password)) {
        return true;
    }

}  