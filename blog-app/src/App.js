import './App.css';
import About from './screens/About';
import Contect from './screens/Contect';
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import CV from './screens/CV';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route exect path = "/" element={<Home/>}></Route>
        <Route exect path = "/home" element={<Home/>}></Route>
        {/* About Route */}
        <Route exect path = "/about" element={<About/>}></Route>
        {/* Project route */}
        <Route exect path='/projects' element = {<Projects/>}></Route>
        {/* Experience Route */}
        <Route exect path='/experience' element = {<Experience/>}></Route>
        {/* Contect route */}
        <Route exect path='/contact' element={<Contect/>}></Route>
        {/* Resume Route */}
        <Route exect path='/CV' element={<CV/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
