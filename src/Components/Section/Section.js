import { SectionMain, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionMain>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionMain>
  );
};
