
import './App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Createuser from './Screens/Createuser';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/usercreation" element={<Createuser/>} />
       
      </Routes> 
    </div>
 </Router>

  );
}

export default App;

