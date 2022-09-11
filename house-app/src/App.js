import React, { Component} from 'react';
import { HousesList } from './components/HousesList';
import Navbar from './components/Navbar.js';

class App extends Component {
  render () {
    return(
      <div className='App'>
        {/* will have a HousesList with the props data */}
        <header>
          <Navbar />
          <h1>Design, Create or Delete a Home</h1>
        </header>
        <main>
          <HousesList />
        </main>
      </div>
    )
  }
}

export default App;