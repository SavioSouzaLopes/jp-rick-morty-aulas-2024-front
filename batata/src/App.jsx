import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ApiRickAndMorty from './pages/ApiRickAndMorty'
import './App.css'
import Header from './components/Header'


function App() {


  return (
    <> 
      <Header />
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/rick-and-morty' element = {<ApiRickAndMorty/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
