import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { signUp } from 'services/UsersService';
import { useLazyRequest } from 'hooks/useRequest';
import { User } from 'utils/types';
import { getNetworkError } from 'utils/errorValidations';
import {
  requiredValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation
} from 'utils/formValidations';
import { PATHS } from 'constants/paths';
import Button from 'components/Button';
import Input from 'components/Input';
import Spinner from 'components/Spinner';
import logo from 'assets/wolox-logo.png';

import styles from './styles.module.scss';

function Signup() {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<User>();

  const [, loading, error, sendRequest] = useLazyRequest({
    request: signUp,
    withPostSuccess: () => {
      history.push(PATHS.login);
    },
    withPostFailure: (err) => {
      setErrorMessage(getNetworkError(err, t('Signup:registeredEmailError')));
    }
  });

  const onSubmit = handleSubmit((values) => {
    sendRequest(values);
  });

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={styles.signupWrapper}>
      <img src={logo} alt={t('Signup:logoAlt')} className={styles.img} />
      <form className={`column ${styles.form}`} onSubmit={onSubmit}>
        <Input
          inputType="text"
          name="firstName"
          label={t('Signup:firstName')}
          inputRef={register(requiredValidation(t))}
          errorText={errors.firstName ? errors.firstName.message : ''}
        />
        <Input
          inputType="text"
          name="lastName"
          label={t('Signup:lastName')}
          inputRef={register(requiredValidation(t))}
          errorText={errors.lastName ? errors.lastName.message : ''}
        />
        <Input
          inputType="text"
          name="email"
          label={t('Signup:email')}
          inputRef={register(emailValidation(t))}
          errorText={errors.email ? errors.email.message : ''}
        />
        <Input
          inputType="password"
          name="password"
          label={t('Signup:password')}
          inputRef={register(passwordValidation(t))}
          errorText={errors.password ? errors.password.message : ''}
        />
        <Input
          inputType="password"
          name="passwordConfirmation"
          label={t('Signup:passwordConfirmation')}
          inputRef={register(confirmPasswordValidation(t, watch('password')))}
          errorText={errors.passwordConfirmation ? errors.passwordConfirmation.message : ''}
        />
        {error && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button type="submit" text={t('Signup:signUp')} className="m-top-2" />
        <hr className={styles.divider} />
        <Button variant="outlined" text={t('Signup:login')} onClick={() => history.push(PATHS.login)} />
      </form>
      <Button
        variant="text"
        text={t('Signup:changeLanguage')}
        onClick={handleChangeLanguage}
        className="m-top-4"
      />
      {loading && (
        <div className={styles.overlayContainer}>
          <Spinner containerClassName={styles.spinner} />
        </div>
      )}
    </div>
  );
}

export default Signup;
