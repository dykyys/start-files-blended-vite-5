import style from './Grid.module.css';

const Grid = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

export default Grid;
