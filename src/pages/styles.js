import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles";

// sessions

export const MainContainer = styled.div`
  margin: 2rem;
`;

// product

export const Container = styled.div`
  width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  justify-content: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  align-self: center;
`;

export const Text = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: ${({ color }) => color};
`;

export const Subtitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-left: 5px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  margin-left: 5px;
`;

// profile

export const Header = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  align-self: flex-start;
  margin-left: 13%;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
`;

export const SectionProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FormContainer = styled.div`
  width: 314px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  align-self: center;
  gap: 0.5rem;
  background-color: ${colors.white};
  border-radius: 20px;
  margin-bottom: 25px;
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: ${colors.black};
`;

export const LinkEdit = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  color: ${colors.orange};
`;

export const LinkHi = styled(Link)`
  align-self: center;
  width: 314px;
  background-color: ${colors.white};
  height: 60px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`;
