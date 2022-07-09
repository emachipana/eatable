import styled from "@emotion/styled";

export const MainContainer = styled.div`
  margin: 2rem;
`;

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
