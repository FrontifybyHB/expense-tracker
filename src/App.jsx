import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import SalaryInput from "./components/SalaryInput";
import ExpenseForm from "./components/ExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={4}>
            <SalaryInput />
            <ExpenseForm />
          </Col>
          <Col lg={8}>
            <ExpenseSummary />
            <CategoryFilter />
            <ExpenseList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
