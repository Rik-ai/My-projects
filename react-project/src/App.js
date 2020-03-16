import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'


class App extends Component {
  render() {
    return (
      <Layout>



        <div style={{ width: 400, border: '2px solid black', padding: '10px', margin: '5px' }}>
          <h1>Layout works</h1>

        </div>
      </Layout>
    )

  }

}

export default App;
