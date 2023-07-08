
import './App.css';
import NotFound from './NotFound';
import PageF1 from './page1/PageF1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App ">
      <Router>
      <Routes>
        <Route exact path="/" element={<PageF1/>} />
        <Route exact path="*" element={<NotFound/>} />
    
      </Routes>
    </Router>
    
    </div>  
  );
}

export default App;
