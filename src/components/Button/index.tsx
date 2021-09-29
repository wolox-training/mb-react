import { HTMLProps } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  className?: string;
  text: string;
  type?: 'button' | 'submit';
  variant?: 'contained' | 'outlined' | 'text';
}

function Button({ className = '', disabled = false, text, type = 'button', variant = 'contained' }: Props) {
  return (
    <button
      className={classNames(styles[variant], { [styles.disabled]: disabled }, className)}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
