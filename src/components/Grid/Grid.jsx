import style from './Grid.module.css';

export const Grid = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};
