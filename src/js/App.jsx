import React, { Component } from 'react';
import Canvas from 'components/Canvas';
import BakedCanvas from 'components/BakedCanvas';
import CodeEditor from 'components/CodeEditor';
import ControlPanel from 'components/ControlPanel';
import 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      activeDrawTool: null
    };
  }
  bake = (c) => {
    this.setState({
      canvas: c
    })
  }
  onButtonActive = (e) => {
    this.setState({
      activeDrawTool: e
    })
  }
  render() {
    const { canvas, activeDrawTool } = this.state;
    return (
      <div className="app">
        <Canvas bake={this.bake} activeDrawTool={activeDrawTool} />
        <BakedCanvas>
          {
            this.state.canvas
          }
        </BakedCanvas>
        <CodeEditor />
        <ControlPanel activeDrawTool={activeDrawTool} onButtonActive={this.onButtonActive}/>
      </div>
    )
  }
}

export default App;
