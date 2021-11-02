import { useHistory } from 'react-router-dom';

import { PATHS } from 'constants/paths';

import styles from './styles.module.scss';

export interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

function BookListItem({ id, title, author, imageUrl }: Book) {
  const history = useHistory();

  const handleClick = (bookId: number) => {
    history.push(`${PATHS.bookDetail}/${bookId}`);
  };

  return (
    <div className={`column ${styles.bookCard}`} onClick={() => handleClick(id)}>
      <img src={imageUrl} alt={title} className={`m-bottom-3 ${styles.bookCover}`} />
      <p className={`m-bottom-2 ${styles.title}`}>{title}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

export default BookListItem;
