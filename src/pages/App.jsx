import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SelectSize from '../components/SelectSize';
import { BrowserRouter, Route } from 'react-router-dom';
import Table9 from '../components/Table9';
import Table5 from '../components/Table5';
import Table3 from '../components/Table3';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <h1>Project Pixel Art</h1>
      <p className="info">i</p>
      <Route exact path="/">
        <SelectSize />
      </Route>
      <Route path="/table3">
        <Table3 />
      </Route>
      <Route path="/table5">
        <Table5 />
      </Route>
      <Route path="/table9">
        <Table9 />
      </Route>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
