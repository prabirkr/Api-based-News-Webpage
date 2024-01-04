import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allnews from './Allnews';
import Sport from './Sport';
import Entertainment from './Entertainment';
import Science from './Science';
import Topnews from './Topnews';
import Trending from './Trending';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <ul className="App-header">
            <li>
                <Link to="/Allnews">  All news</Link>
            </li>
            <li>
                <Link to="/Trending">  Trending </Link>
            </li>
            <li>
                <Link to="/Topnews">   Top news </Link>
            </li>
            <li>
                <Link to="/Sport">  Sports  </Link>
            </li>
            <li>
                <Link to="/entertainment">  Entertainment  </Link>
            </li>
            <li>
                <Link to="/science">  Science & Technology  </Link>
            </li>
            </ul>
        <Routes>
                <Route exact path='/Allnews' element={< Allnews />}></Route>
                <Route exact path='/Trending' element={< Trending />}></Route>
                <Route exact path='/Topnews' element={< Topnews />}></Route>
                <Route exact path='/Sport' element={< Sport />}></Route>
                <Route exact path='/Entertainment' element={< Entertainment />}></Route>
                <Route exact path='/Science' element={< Science />}></Route>
        </Routes>
        </div>
    </Router>

  );
}
export default App;

