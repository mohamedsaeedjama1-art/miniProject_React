import Nav from './Components/Nav'
import Finanace from './Pages/Finance'
import Class from './Pages/Class'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import {Routes, Route} from 'react-router'
import Card from './Tools/Card'
import Header from './Tools/Header'
import Finance from './Pages/Finance'



function App() {
  return (
    <>
    <Nav />
   

   
  
<Routes>
 <Route path="/" element={<Home />} />
        <Route path="/Class" element={<Class />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/registration" element={<Registration />} />
</Routes>

      
    </>
  );
}

export default App;