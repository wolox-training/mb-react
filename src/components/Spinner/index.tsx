import Spinkit, { SpinnerProps } from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';
import styles from './styles.module.scss';

interface LoadingProps extends SpinnerProps {
  containerClassName: string;
}

function Spinner({
  containerClassName = '',
  className = '',
  name = SPINNER_DEFAULT,
  color = COLOR_SPINNER,
  ...rest
}: LoadingProps) {
  return (
    <div className={`${containerClassName} ${styles.spinnerContainer}`}>
      <Spinkit className={className} name={name} color={color} fadeIn="half" {...rest} />
    </div>
  );
}

export default Spinner;
