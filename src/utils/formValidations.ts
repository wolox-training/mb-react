import { TFunction } from 'react-i18next';

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const requiredValidation = (t: TFunction) => ({ required: t('FormValidations:required') });

export const emailValidation = (t: TFunction) => ({
  ...requiredValidation(t),
  pattern: { value: emailRegex, message: `${t('FormValidations:invalidEmail')}` }
});

export const passwordValidation = (t: TFunction) => ({
  ...requiredValidation(t),
  pattern: { value: passwordRegex, message: `${t('FormValidations:passwordRequirements')}` }
});

export const confirmPasswordValidation = (t: TFunction, password: string) => ({
  ...requiredValidation(t),
  validate: (value: string) => value === password || `${t('FormValidations:confirmPasswordError')}`
});
