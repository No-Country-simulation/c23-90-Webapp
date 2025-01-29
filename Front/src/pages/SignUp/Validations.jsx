// Validaciones para los campos del formulario de registro

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    return passwordRegex.test(password);
  };
  
  export const validateName = (name) => {
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s'-]{2,50}$/;
    return nameRegex.test(name);
  };
  
  export const validateNationality = (nationality) => {
    const nationalityRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s'-]{2,50}$/;
    return nationalityRegex.test(nationality);
  };
  
  export const validateGender = (gender) => {
    return ["male", "female", "other"].includes(gender);
  };
  
  export const validateBirthdate = (birthdate) => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    return birthdate && birthdateDate < today && today.getFullYear() - birthdateDate.getFullYear() >= 18; // Mayor de 18 años
  };
  
  export const validateTermsAccepted = (termsAccepted) => {
    return termsAccepted === true;
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  