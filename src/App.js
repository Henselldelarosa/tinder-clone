import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Header, Home, Chats, TinderCards, SwipeButtons, ChatScreen} from './exports';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/chat/:person'
          element={
            <>
              <Header backButton = '/chat' chat/>
              <ChatScreen/>
            </>
          }/>

          <Route path='/chat'
          element={
            <>
              <Header backButton = '/'/>
              <Chats/>
            </>
          }/>

          <Route path='/' element={
          <>
          <Header/>
          <TinderCards/>
          <SwipeButtons/>
          </>
        }/>
        </Routes>
      </Router>
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}
    </div>
  );
}

export default App;
