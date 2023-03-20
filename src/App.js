import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './error';
import Menu from './Menu';
import Search from './Search';
import Services from './Services';
function App() {

  return (
  <>
      <Menu/>
      <Routes>
      <Route exact path="/" element={<About name = "About"/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route exact path='/service/:fname' element={<Services/>}/>
      <Route exact path='/service' element={<Services/>}/>
      <Route exact path='/search' element={<Search/>}/>
      <Route path = "/*" element={<Error/>}/>
      </Routes>
  </>
  );
}

export default App;

