import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { colors } from '../../styles';

export const Container = styled(Link)`
  max-height: 300px;
  min-height: 285px;
  padding: 0.5rem;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: relative;
  top: -38px;
  object-fit: cover;
`; 

export const Card = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 156px;
  min-height: 240px;
  max-height: 250px;
  border-radius: 30px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  overflow: hidden;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px
`;

export const Name = styled.h2`
  text-align: center;
  color: ${colors.black};
`;

export const Price = styled.p`
  text-align: center;
  color: ${colors.orange};
  font-size: 20px;
`;
