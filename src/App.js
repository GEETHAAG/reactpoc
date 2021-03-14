import React, {Component } from 'react';
import Saleslist from './saleslist.js';
import sales from './data/sales.json';
import {Multiselect} from 'multiselect-react-dropdown';

import './App.css'


class App extends Component{

  render()
  {
    return(

      <div className='App'>
        <div id="div1">
         <h3>Sales Report</h3>
        </div>
        <div>
          <h3>Customize</h3><Multiselect options={sales} displayValue={sales.Title} />
        </div>

        <br />
        <br />
          <Saleslist/>

      </div>
    )
  }
}

export default App