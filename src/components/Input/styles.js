import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 322px;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
  color: ${colors.gray.normal};
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${colors.black};
  font-size: 16px;
  line-height: 23px;
  color: ${colors.black};
  outline: none;
  background-color: transparent;
  padding: 0 5px;
  &:disabled {
    color: ${colors.gray.normal};
    border-bottom: 1px solid ${colors.gray.normal};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: #C94C4C;
`;
