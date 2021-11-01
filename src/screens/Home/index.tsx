import NavBar from 'components/NavBar';
import BookList from 'components/BookList';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <BookList />
    </div>
  );
}

export default Home;
