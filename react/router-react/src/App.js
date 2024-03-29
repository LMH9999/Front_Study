import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profiles from './pages/Profiles';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profiles/:id' element={<Profiles/>}/>
      </Route>

      <Route path='/articles' element={<Articles/>}>
        <Route path='/articles/:id' element={<Article/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
};

export default App;