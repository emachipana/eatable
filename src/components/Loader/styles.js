import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Banner = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("./images/background.jpg")rgba(0, 0, 0, .4);
  bakground-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: darken;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 50%;
  width: 262px;
  height: 262px;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  gap: 26px;
  color: ${colors.orange};
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.125rem;
`;
