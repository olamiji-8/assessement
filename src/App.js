import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/academy' element={<Academy />} /> */}
      </Routes>
    </Router>
  </div>
  )
}

export default App