import Spinkit, { SpinnerProps } from 'react-spinkit';

import { SPINNER_DEFAULT } from './constants';
import styles from './styles.module.scss';

interface LoadingProps extends SpinnerProps {
  containerClassName: string;
}

function Spinner({
  containerClassName = '',
  className = '',
  name = SPINNER_DEFAULT,
  color = styles.cerulean,
  ...rest
}: LoadingProps) {
  return (
    <div className={`${containerClassName} row center`}>
      <Spinkit className={className} name={name} color={color} fadeIn="half" {...rest} />
    </div>
  );
}

export default Spinner;
