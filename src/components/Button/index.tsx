import styles from './styles.module.scss';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  submit?: boolean;
  text: string;
  variant?: string;
}

function Button({
  className = '',
  disabled = false,
  submit = false,
  text,
  variant = 'contained',
  onClick
}: Props) {
  return (
    <div>
      <button
        className={`${(styles.button, styles[variant])} ${disabled ? styles.disabled : ''} ${className}`}
        disabled={disabled}
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
