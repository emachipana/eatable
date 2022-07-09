import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  height: 40px;
  background-color: ${colors.gray.light};
  z-index: 1;
`;
