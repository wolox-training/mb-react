import { HTMLProps } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit';
  className?: string;
  text: string;
  variant?: 'contained' | 'outlined' | 'text';
}

function Button({ className = '', disabled = false, text, variant = 'contained', ...props }: Props) {
  const btnClasses = classNames(styles[variant], { [styles.disabled]: disabled }, className);

  return (
    <button className={btnClasses} disabled={disabled} type="button" {...props}>
      {text}
    </button>
  );
}

export default Button;
