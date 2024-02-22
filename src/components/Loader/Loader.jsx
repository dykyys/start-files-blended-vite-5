import { ClimbingBoxLoader } from 'react-spinners';

import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <ClimbingBoxLoader color="#36bed6" />
    </div>
  );
};
