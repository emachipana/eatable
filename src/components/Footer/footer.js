/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Container } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import { colors } from '../../styles';
import { NavLink } from 'react-router-dom';

const IconStyle = css`
  font-size: 25px;
  cursor: pointer;
  transition: .3s ease-in;
  &:hover {
    color: ${colors.orange};
  }
`;

function Footer() {

  return (
    <Container>
      <NavLink to="/home" style={({ isActive }) => (
        isActive ? { color: colors.orange } : { color: colors.gray.normal }
      )}>
        <AiFillHome 
          css={IconStyle}
        />
      </NavLink>
      <NavLink to="/profile" style={({ isActive }) => (
        isActive ? { color: colors.orange } : { color: colors.gray.normal }
      )}>
        <GoPerson 
          css={IconStyle}
        />
      </NavLink>
      <NavLink to="/history" style={({ isActive }) => (
        isActive ? { color: colors.orange } : { color: colors.gray.normal }
      )}>
        <FaHistory 
          css={IconStyle}
        />
      </NavLink>
    </Container>
  )
}

export default Footer;
