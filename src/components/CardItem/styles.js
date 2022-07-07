import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  max-width: 315px;
  min-width: 300px;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  background-color: ${colors.white};
`;

export const Image = styled.img`
  width: 62px;
  height: 62px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const Name = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: ${colors.orange};
  text-align: center;
`;
