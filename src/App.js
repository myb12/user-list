import './App.css';
import './styles/main.scss';
import Home from './pages/Home/Home';
import TopBar from './components/shared/TopBar/TopBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className='main-section'>
      <TopBar />
      <Home />
    </Container>
  );
}

export default App;
