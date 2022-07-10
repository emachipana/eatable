import { Container, Header, IconStyle, MainContainer, Title } from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Founded from "../components/Founded";
import OrderCard from "../components/OrderCard/order-card";

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
              orders.map(order => (
                <OrderCard
                  key={order.id}
                  date={order.created_at}
                  items={order.items_count}
                  total={order.total}
                  details={order.order_details}
                  address={order.delivery_address}
                />
              ))
            }
      </Container>
    </MainContainer>
  );
}

export default HistoryPage;