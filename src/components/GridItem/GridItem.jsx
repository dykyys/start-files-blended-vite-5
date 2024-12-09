import style from './GridItem.module.css';

const GridItem = ({ children }) => {
  return <li className={style.item}>{children}</li>;
};

export default GridItem;
