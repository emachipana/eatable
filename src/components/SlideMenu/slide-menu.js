/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Container, Section, Link } from "./styles";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { colors } from '../../styles';
//current categories state, when i have a input empty set first categories in other case setSearch categories

function SlideMenu({ options, currentOption, setCurrentOption }) {
  const IconStyle = css`
    background-color: ${colors.orange};
    padding: 5px;
    border-radius: 50%;
    z-index: 1;
    margin: 0 2px;
    cursor: pointer;
    font-weight: 900;
    color: ${colors.orange};
    opacity: .9;
    transition: .2s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  `;

  let currentScroll = 30;
  let scrollAmount = 180;

  const hScroll = document.getElementById("slider");
  const sCont = document.getElementById("section");
  let maxScroll = -sCont?.offsetWidth + hScroll?.offsetWidth;

  function scrollHorizontalY(val){
    currentScroll += (val * scrollAmount);

    if(currentScroll > 0) currentScroll = 30;
    if(currentScroll < maxScroll) currentScroll = maxScroll - 30;

    sCont.style.left = currentScroll + "px";
  }

  return (
    <Container id="slider">
      <AiOutlineLeft
        onClick={() => scrollHorizontalY(1)}
        css={IconStyle}
        color={colors.white}
        id="left"
        size="25px"
      />
      <AiOutlineRight
        onClick={() => scrollHorizontalY(-1)}
        css={IconStyle}
        color={colors.white}
        id="right"
        size="25px"
      />
      <Section id="section">
        { options.map(option => (
          <Link 
            onClick={() => setCurrentOption(option)}
            style={currentOption === option ? {borderBottom: `2px solid ${colors.orange}`, color: colors.orange} : null}
          >
            { option }
          </Link>
        )) }
      </Section>
    </Container>
  );
}

export default SlideMenu;
