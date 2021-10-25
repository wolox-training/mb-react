import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import api from 'config/api';
import { PATHS } from 'constants/paths';
import LocalStorageService from 'services/LocalStorageService';
import logo from 'assets/wolox-logo.png';

import styles from './styles.module.scss';

function NavBar() {
  const { t } = useTranslation();
  const history = useHistory();

  const logOut = () => {
    LocalStorageService.removeValue('access-token');
    LocalStorageService.removeValue('client');
    LocalStorageService.removeValue('uid');
    api.deleteHeader('access-token');
    api.deleteHeader('client');
    api.deleteHeader('uid');
    history.push(PATHS.login);
  };

  return (
    <nav className={styles.nav}>
      <div className={`row full-width space-between ${styles.navContent}`}>
        <img src={logo} alt={t('NavBar:logoAlt')} />
        <button type="button" className={styles.logoutBtn} onClick={logOut}>
          {t('NavBar:logout')}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
