import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  max-width: 56px;
  height: 20px;
  border-radius: 30px;
  background-color: ${colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 2px;
`;

export const Text = styled.p`
  color: ${colors.white};
  font-weight: 600;
  font-size: ${({ isButton }) => isButton ? "20px" : "18px"};
  line-height: 23px;
  cursor: ${({ isButton }) => isButton ? "pointer" : "inherit"};
`;
