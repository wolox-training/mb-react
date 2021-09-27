import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { signUp } from 'services/UsersService';
import { useLazyRequest } from 'hooks/useRequest';
import { User } from 'utils/types';
import Button from 'components/Button';
import Input from 'components/Input';

import logo from './assets/wolox-logo.png';
import styles from './styles.module.scss';

function Signup() {
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<User>();
  const password = watch('password');

  const [state, loading, error, sendRequest] = useLazyRequest({ request: signUp });

  const onSubmit = handleSubmit((values) => {
    sendRequest(values);
    console.log(state, loading, error);
  });

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={styles.loginWrapper}>
      <img src={logo} alt="Wolox Logo" className={styles.img} />
      <form action="" className={`column ${styles.form}`} onSubmit={onSubmit}>
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
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
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
        <Button submit text="Sign Up" className="m-top-2" />
        <hr className={styles.divider} />
        <Button variant="outlined" text="Login" />
      </form>
      <Button variant="text" text="Cambiar idioma" onClick={handleChangeLanguage} className="m-top-4" />
    </div>
  );
}

export default Signup;
