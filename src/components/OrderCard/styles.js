import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 315px;
  align-self: center;
  cursor: pointer;
  height: 276px;
  background-color: ${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`;
