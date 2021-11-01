import { useQuery } from 'react-query';

import Spinner from 'components/Spinner';
import { getBooks } from 'services/BooksService';

import BookListItem, { Book } from './BookListItem';
import styles from './styles.module.scss';

function BookList() {
  const { isLoading, data } = useQuery('books', getBooks);

  return (
    <div className={styles.bookContainer}>
      {isLoading && <Spinner containerClassName={styles.loader} />}
      {data &&
        data.page.map((book: Book) => (
          <BookListItem title={book.title} author={book.author} imageUrl={book.imageUrl} key={book.id} />
        ))}
    </div>
  );
}

export default BookList;
