import styles from './styles.module.scss';

export interface Book {
  title: string;
  author: string;
  id?: number;
  imageUrl: string;
}

function BookListItem({ title, author, imageUrl }: Book) {
  return (
    <div className={`column ${styles.bookCard}`}>
      <img src={imageUrl} alt={title} className={`m-bottom-3 ${styles.bookCover}`} />
      <p className={`m-bottom-2 ${styles.title}`}>{title}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

export default BookListItem;
