import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const { id } = useParams<BookDetailParams>();
  const { isLoading, data } = useQuery('book-detail', () => getBookDetail(id));
  return (
    <div className={styles.container}>
      <div onClick={() => history.goBack()} className="row middle">
        <img src={backButton} alt="" />
        <p className={styles.backButton}>{t('BookDetail:back')}</p>
      </div>
      {isLoading && <Spinner containerClassName={styles.loader} />}
      {data && (
        <div className={`row ${styles.bookContainer}`}>
          <img src={data.imageUrl} alt={t('BookDetail:cover')} className={styles.bookCover} />
          <div className={`column ${styles.bookInfo}`}>
            <p className={styles.title}>
              {data.title}
              <span className={styles.genre}>({data.genre})</span>
            </p>
            <p className={styles.infoItem}>
              <span>{t('BookDetail:author')}</span> {data.author}
            </p>
            <p className={styles.infoItem}>
              <span>{t('BookDetail:publisher')}</span> {data.editor}
            </p>
            <p className={styles.infoItem}>
              <span>{t('BookDetail:year')}</span> {data.year}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
