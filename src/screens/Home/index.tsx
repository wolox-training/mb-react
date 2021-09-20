import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import FormInput from 'components/FormInput';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { withContextProvider, useSelector, useDispatch } from './context';
import { actionCreators } from './context/reducer';

interface TechForm {
  tech: string;
}

function Home() {
  const { t, i18n } = useTranslation();

  // Example of how to use these custom hooks
  const tech = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<TechForm>();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const onSubmit = handleSubmit((values) => {
    if (values.tech) {
      dispatch(actionCreators.setTech(values.tech));
    }
  });

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>{t('Home:techIs', { tech })}</p>
        <form className="column center m-bottom-10" onSubmit={onSubmit}>
          <FormInput
            className="m-bottom-2"
            placeholder={t('Home:newTech')}
            inputRef={register()}
            name="tech"
            inputType="text"
          />
          <button className={styles.appLink} type="submit">
            {t('Home:setNewTech')}
          </button>
        </form>
        <button type="button" onClick={handleChangeLanguage} className={`m-bottom-4 ${styles.appLink}`}>
          {t('Home:changeLang')}
        </button>
      </header>
    </div>
  );
}

export default withContextProvider(Home);
