import React, { Component } from 'react';
import 'styles/codeEditor.scss';

class CodeEditor extends Component {
  render() {
    return (
      <section className="code-editor">
        <div className="html-area"></div>
        <div className="v-line"></div>
        <div className="css-area"></div>
      </section>
    )
  }
}

export default CodeEditor;
