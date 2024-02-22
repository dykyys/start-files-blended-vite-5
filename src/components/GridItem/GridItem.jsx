import style from './GridItem.module.css';

export const GridItem = ({ children }) => {
  return <li className={style.item}>{children}</li>;
};
