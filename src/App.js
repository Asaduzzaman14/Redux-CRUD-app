import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber';
import BooksView from './features/books/BooksView';

function App() {
  return (
    <div className="App">
      <Navber />
      <h2>redux todo app</h2>
      <BooksView />
    </div>
  );
}

export default App;
