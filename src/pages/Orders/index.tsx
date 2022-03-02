import Button from '../../components/Button';
import Container from '../../components/Container';
import DragDropBoard from './DragDropBoard';
import { StyledUpperSection } from './style';

const Orders = () => {
  return (
    <Container flexDirection='column'>
      <StyledUpperSection>
        <Button>Order Management</Button>
        <Button isActive>Orders Dispatch</Button>
      </StyledUpperSection>
      <DragDropBoard />
    </Container>
  );
};

export default Orders;
