import { useHistory } from 'react-router';

import { PATHS } from 'constants/paths';
import LocalStorageService from 'services/LocalStorageService';
import logo from 'assets/wolox-logo.png';

import styles from './styles.module.scss';

function NavBar() {
  const history = useHistory();

  const logOut = () => {
    LocalStorageService.removeValue('access-token');
    history.push(PATHS.login);
  };

  return (
    <nav className={styles.nav}>
      <div className={`row full-width space-between ${styles.navContent}`}>
        <img src={logo} alt="Wolox logo" />
        <button type="button" className={styles.logoutBtn} onClick={logOut}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
