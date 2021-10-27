import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getBookDetail } from 'services/BooksService';
import Spinner from 'components/Spinner';

import backButton from './assets/back-arrow.png';
import styles from './styles.module.scss';

type BookDetailParams = {
  id: string;
};

function BookDetail() {
  const history = useHistory();
  const { id } = useParams<BookDetailParams>();
  const { isLoading, data } = useQuery('book-detail', () => getBookDetail(id));
  return (
    <div className={styles.container}>
      <div onClick={() => history.goBack()} className="row middle">
        <img src={backButton} />
        <p className={styles.backButton}>Atrás</p>
      </div>
      {isLoading && <Spinner containerClassName={styles.loader} />}
      {data && (
        <div className={`row ${styles.bookContainer}`}>
          <img src={data.imageUrl} alt={data.title} className={styles.bookCover} />
          <div className={`column ${styles.bookInfo}`}>
            <p className={styles.title}>
              {data.title}
              <span className={styles.genre}>({data.genre})</span>
            </p>
            <p className={styles.infoItem}>
              <span>Autor del libro:</span> {data.author}
            </p>
            <p className={styles.infoItem}>
              <span>Editorial:</span> {data.editor}
            </p>
            <p className={styles.infoItem}>
              <span>Año de publicación:</span> {data.year}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
