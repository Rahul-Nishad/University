
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Academics from './Components/Academics/Academics';
import Blog from './Components/Blog/Blog';

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
