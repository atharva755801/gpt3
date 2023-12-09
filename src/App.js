import React from 'react';

import { Header, Footer, Possibility, Whatgpt3, Features, Blog} from './containers';
import { CTA, Navbar, ScrollButton, Brand } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      <ScrollButton />
    </div>
  )
}

export default App

