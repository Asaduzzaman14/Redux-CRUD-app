import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber';
import BooksView from './features/books/BooksView';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBooks from './components/AddBooks';
import MyBooks from './features/books/MyBooks';
import UpdateBook from './components/UpdateBook';


function App() {
  return (
    <div className="App">
      <Navber />

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/addBook" element={<AddBooks />} ></Route>
        <Route path="/myBooks" element={<MyBooks />} ></Route>
        <Route path="/updateBook" element={<UpdateBook />} ></Route>


      </Routes>

    </div >
  );
}

export default App;
