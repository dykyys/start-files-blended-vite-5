import style from './Section.module.css';

export const Section = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};
