import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';
import { passwordRegex } from 'utils/formValidations';

import logo from './assets/wolox-logo.png';
import styles from './styles.module.scss';

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function Signup() {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignupForm>();

  const password = watch('password');

  const onSubmit = handleSubmit((values) => console.log({ ...values, locale: 'en' }));

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={styles.signupWrapper}>
      <img src={logo} alt="Wolox Logo" className={styles.img} />
      <form className={`column ${styles.form}`} onSubmit={onSubmit}>
        <Input
          inputType="text"
          name="firstName"
          label={t('Signup:firstName')}
          inputRef={register({ required: `${t('Signup:requiredInput')}` })}
          errorText={errors.firstName ? errors.firstName.message : ''}
        />
        <Input
          inputType="text"
          name="lastName"
          label={t('Signup:lastName')}
          inputRef={register({ required: `${t('Signup:requiredInput')}` })}
          errorText={errors.lastName ? errors.lastName.message : ''}
        />
        <Input
          inputType="text"
          name="email"
          label={t('Signup:email')}
          inputRef={register({ required: `${t('Signup:requiredInput')}` })}
          errorText={errors.email ? errors.email.message : ''}
        />
        <Input
          inputType="password"
          name="password"
          label={t('Signup:password')}
          inputRef={register({
            required: `${t('Signup:requiredInput')}`,
            pattern: {
              value: passwordRegex,
              message: `${t('Signup:passwordRequirements')}`
            }
          })}
          errorText={errors.password ? errors.password.message : ''}
        />
        <Input
          inputType="password"
          name="passwordConfirmation"
          label={t('Signup:passwordConfirmation')}
          inputRef={register({
            required: `${t('Signup:requiredInput')}`,
            validate: (value) => value === password || `${t('Signup:passwordConfirmationError')}`
          })}
          errorText={errors.passwordConfirmation ? errors.passwordConfirmation.message : ''}
        />
        <Button type="submit" text={t('Signup:signUp')} className="m-top-2" />
        <hr className={styles.divider} />
        <Button variant="outlined" text={t('Signup:login')} />
      </form>
      <Button
        variant="text"
        text={t('Signup:changeLanguage')}
        onClick={handleChangeLanguage}
        className="m-top-4"
      />
    </div>
  );
}

export default Signup;
