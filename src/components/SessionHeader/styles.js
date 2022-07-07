import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 45vh;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Link = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: ${colors.black};
  padding: 13px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.125rem;
  color: ${colors.orange};
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65%;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`
