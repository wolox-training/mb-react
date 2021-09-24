import i18next from 'i18next';

i18next.addResources('es', 'Signup', {
  firstName: 'Nombre',
  lastName: 'Apellido',
  email: 'Email',
  password: 'Password',
  passwordConfirmation: 'Confirmación de Password',
  requiredInput: 'Este campo es obligatorio',
  passwordRequirements:
    'La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número',
  passwordConfirmationError: 'La contraseña no coincide'
});

i18next.addResources('en', 'Signup', {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
  passwordConfirmation: 'Confirm Password',
  requiredInput: 'This field is required',
  passwordRequirements: 'The password must contain at least 8 characters, one letter and one number',
  passwordConfirmationError: "The password doesn't match"
});
