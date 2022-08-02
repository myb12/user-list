import './App.css';
import Home from './pages/Home/Home';
import TopBar from './components/shared/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
