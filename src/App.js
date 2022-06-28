import logo from './logo.svg';
import './App.css';

// import props button with bootstrap
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>

        <Button text='Tombol Pertama' disableButton={true} colorButton="primary" />
        <br />
        <Button text='Tombol Kedua' disableButton={false} colorButton="secondary" />
        <br />
        <Button text='Tombol Ketiga' disableButton={false} colorButton="success" />

        <br />
        <Container>
        <Form.Control size="sm" type="text" placeholder="Small text" />
        </Container>
      </header>
    </div>
  );
}

export default App;
