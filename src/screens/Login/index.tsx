import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';

import Input from 'components/Input';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import { requiredValidation, emailValidation } from 'utils/formValidations';
import { User } from 'utils/types';
import { signIn } from 'services/UsersService';
import { getNetworkError } from 'utils/errorValidations';
import { Error } from 'hooks/useRequest';

import logo from '../../assets/wolox-logo.png';

import styles from './styles.module.scss';

function Login() {
  const history = useHistory();
  const [errorMessage, setErrorMsg] = useState('');
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const { mutate, isLoading, isError } = useMutation((values: User) => signIn(values), {
    onSuccess: ({ headers }) =>
      console.log({
        accessToken: headers?.['access-token'],
        uid: headers?.uid,
        client: headers?.client
      }),
    onError: (err: Error<unknown>) => setErrorMsg(getNetworkError(err, t('Login:credentialsError')))
  });

  const onSubmit = handleSubmit((values) => {
    mutate(values);
  });

  return (
    <div className={styles.loginWrapper}>
      <img src={logo} alt={t('Login:logoAlt')} className={styles.img} />
      <form className={`column ${styles.form}`} onSubmit={onSubmit}>
        <Input
          inputType="text"
          name="email"
          label={t('Login:email')}
          inputRef={register(emailValidation(t))}
          errorText={errors.email ? errors.email.message : ''}
        />
        <Input
          inputType="password"
          name="password"
          label={t('Login:password')}
          inputRef={register(requiredValidation(t))}
          errorText={errors.password ? errors.password.message : ''}
        />
        {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button type="submit" text={t('Login:login')} className="m-top-2" />
        <hr className={styles.divider} />
        <Button variant="outlined" text={t('Login:signUp')} onClick={() => history.push('/sign_up')} />
      </form>
      {isLoading && (
        <div className={styles.overlayContainer}>
          <Spinner containerClassName={styles.spinner} />
        </div>
      )}
    </div>
  );
}

export default Login;
