import React from 'react'
import { Footer } from './containers/Footer';
import { Header } from './containers/Header';
import { List } from './containers/List';


function App() {
  return (
      <>
      <div className='container'>
        <Header/>
        <List/>
        <Footer/>
      </div>
      </>
  );
}

export default App;
