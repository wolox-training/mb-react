import i18next from 'i18next';

i18next.addResources('es', 'Common', {
  networkError: 'Hubo un problema al cargar los datos, volvé a intentarlo en unos minutos'
});

i18next.addResources('es', 'FormValidations', {
  required: 'Este campo es obligatorio',
  invalidEmail: 'El email no es válido',
  passwordRequirements:
    'La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número',
  confirmPasswordError: 'La contraseña no coincide'
});

i18next.addResources('en', 'FormValidations', {
  required: 'This field is required',
  invalidEmail: 'The email is not valid',
  passwordRequirements: 'The password must contain at least 8 characters, one letter and one number',
  confirmPasswordError: "The password doesn't match"
});
