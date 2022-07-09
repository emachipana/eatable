import { IconStyle, Container, FormContainer, FormTitle, Header, LinkEdit, LinkHi, MainContainer, SectionProfile, Subtitle, Title } from "./styles";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useUser } from "../context/user-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, logout } = useUser();

  const navigate = useNavigate();

  return (
    <MainContainer>
      <Container>
        <Header>
          <AiOutlineLeft
            onClick={() => navigate("/home")}
            {...IconStyle}
          />
          <Title>My Profile</Title>
        </Header>
        <SectionProfile>
          <Subtitle>Personal details</Subtitle>
          <LinkEdit to="edit">change</LinkEdit>
        </SectionProfile>
        <FormContainer>
          <FormTitle>{ user.name || "User"}</FormTitle>
          <Input 
            disabled
            name="email"
            value={user.email}
          />
          <Input
            disabled
            name="phone"
            value={user.phone || undefined}
            placeholder="no phone provided"
          />
          <Input 
            disabled
            name="adress"
            value={user.address || undefined}
            placeholder="no adress provided"
          />
        </FormContainer>
        <LinkHi to="/history">
          <FormTitle>History</FormTitle>
          <AiOutlineRight {...IconStyle}/>
        </LinkHi>
        <Button
          style={{alignSelf: "center", position: "fixed", bottom: "70px"}}
          onClick={() => logout()}
        >Logout</Button>
      </Container>
    </MainContainer>
  );
}

export default ProfilePage;
