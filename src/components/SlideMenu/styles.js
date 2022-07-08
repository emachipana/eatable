import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Section = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  position: absolute;
  left: 30px;
  transition: .5s all ease-out;
`;

export const Link = styled.p`
  font-size: 17px;
  line-height: 20px;
  padding: 14px;
  text-transform: capitalize;
  cursor: pointer;
`;
