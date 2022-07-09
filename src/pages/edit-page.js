import { IconStyle, SectionProfile, Subtitle, Container, MainContainer, Header, Title } from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FormProfile from "./utils";

function EditPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Container>
      <Header>
          <AiOutlineLeft
            onClick={() => navigate("/profile")}
            {...IconStyle}
          />
          <Title>My Profile</Title>
        </Header>
        <SectionProfile>
          <Subtitle>Update personal details</Subtitle>
        </SectionProfile>
        <FormProfile />
      </Container>
    </MainContainer>
  );
}

export default EditPage;
