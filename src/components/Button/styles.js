import styled from "@emotion/styled";
import { colors } from "../../styles";

export const StyledButton = styled.button`
  max-width: 310px;
  min-width: 300px;
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 1rem;
  border: none;
  border-radius: 30px;
  background-color: ${colors.orange};
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: ${colors.white};
  cursor: pointer;
  &:disabled {
    transform: none;
    opacity: .6;
    cursor: not-allowed;
  }
`;
