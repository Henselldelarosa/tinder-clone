import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Header, Home, Chat, TinderCards} from './exports';

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Routes>

          <Route path='/chat' element={<Chat/>}/>


          <Route path='/' element={<TinderCards/>}/>
        </Routes>
      </Router>
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}
    </div>
  );
}

export default App;
