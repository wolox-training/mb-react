import { useQuery } from 'react-query';

import Spinner from 'components/Spinner';
import { getBooks } from 'services/BooksService';

import BookListItem, { Book } from './BookListItem';
import styles from './styles.module.scss';

function BookList() {
  const { isLoading, data } = useQuery('books', getBooks);

  if (isLoading) {
    return <Spinner containerClassName={styles.loader} />;
  }

  return (
    <>
      <div className={styles.bookContainer}>
        {data &&
          data.page.map((book: Book) => (
            <BookListItem title={book.title} author={book.author} imageUrl={book.imageUrl} key={book.id} />
          ))}
      </div>
    </>
  );
}

export default BookList;
