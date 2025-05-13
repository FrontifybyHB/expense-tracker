import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
