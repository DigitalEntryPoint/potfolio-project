import { useState } from 'react'
// import './App.css'
import './styles.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter'
import './news-letter.css'

function App() {
  
  return (   
    
    <div className='container'>     
      <Header/>
      <Nav/>
      <Main/>
      <NewsLetter/>
      <Footer/>
    </div>
    
  )
}

export default App
