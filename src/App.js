import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/Main';
import List from './pages/List';
import About from './pages/About';

// import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/list' element={<List/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
    </Router>

  );
}

export default App;
