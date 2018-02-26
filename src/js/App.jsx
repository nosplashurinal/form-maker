import React, { Component, Fragment } from 'react';
import Canvas from 'components/Canvas';
import CodeEditor from 'components/CodeEditor';
import 'styles/app.scss';

class App extends Component {
  bake = () => {

  }
  render() {
    return (
      <Fragment>
        <Canvas />
        <CodeEditor />
      </Fragment>
    )
  }
}

export default App;
