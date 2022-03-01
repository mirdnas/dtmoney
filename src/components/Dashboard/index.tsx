import { Summary } from '../Summary'
import { TransactionsTable } from "../TransactionsTable";
import { Container, Content } from './styles'

export const Dashboard = () => (
  <Container>
    <Content>
      <Summary />
      <TransactionsTable />
    </Content>
  </Container>
)