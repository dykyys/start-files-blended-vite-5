import { ClimbingBoxLoader } from 'react-spinners';

import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.backdrop}>
      <ClimbingBoxLoader color="#36bed6" />
    </div>
  );
};

export default Loader;
