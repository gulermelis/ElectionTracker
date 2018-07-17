import React, { Component } from 'react';

import './Header.css';
import Combobox from './Combobox';

import TurkiyeGeneli from './TurkiyeGeneli';
import Buton from './Buton';



class App extends Component {

  render() {

const aparti='%48';
const bparti='%35';
const cparti='%11';
const dparti='%7';




    return (
      <div className="App">

          <h1 id="title"> 2018 SEÇİMLERİNE HOŞGELDİNİZ</h1>

          <TurkiyeGeneli aparti={ aparti } bparti={bparti} cparti={cparti } dparti={dparti}  />

          <h3 id="ilce-title"> SEÇİM SONUCUNU GÖRMEK İSTEDİĞİNİZ İLÇEYİ SECİN...</h3>

          <Combobox />
          <Buton/>





      </div>
    );
  }
}

export default App;