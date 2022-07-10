import { Container, Header, IconStyle, MainContainer, Title } from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Founded from "../components/Founded";

function HistoryPage({ orders }) {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Container>
        <Header>
          <AiOutlineLeft
              onClick={() => navigate("/home")}
              {...IconStyle}
            />
            <Title>History</Title>
        </Header>
            {
              orders.length <= 0
              ?
              <Founded
                lenght={0}
                type="history"
              />
              :
              <h1>hello</h1>
            }
      </Container>
    </MainContainer>
  );
}

export default HistoryPage;