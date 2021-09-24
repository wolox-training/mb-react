import { FormEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  disabled?: boolean;
  errorText?: string;
  inputRef?: any;
  inputType: string;
  label?: string;
  name: string;
  onBlur?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input({
  disabled = false,
  errorText = '',
  inputRef,
  inputType,
  label = '',
  name,
  onBlur,
  onChange,
  onFocus
}: Props) {
  return (
    <div className="column">
      {label && <label className={`m-bottom-2 ${styles.label}`}>{label}</label>}
      <input
        type={inputType}
        name={name}
        id={name}
        className={styles.input}
        disabled={disabled}
        ref={inputRef}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {errorText && (
        <span id={`${name}-error`} role="alert" className={`m-top-1 ${styles.error}`}>
          {errorText}
        </span>
      )}
    </div>
  );
}

export default Input;
