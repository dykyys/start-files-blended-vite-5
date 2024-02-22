import styled from './Container.module.css';
export const Container = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};
