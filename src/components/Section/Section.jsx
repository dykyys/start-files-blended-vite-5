import style from './Section.module.css';

const Section = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};

export default Section;
