import React, { Component } from 'react';
import 'styles/controlPanel.scss';

const controlButtons = [
  {
    id: 'text-input',
    className: 'control-button',
    name: 'input type="text"'
  },
  {
    id: 'button',
    className: 'control-button',
    name: 'button'
  }
]

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: props.activeButton
    };
  }
  render() {
    const { onButtonActive, activeDrawTool } = this.props;
    return (
      <div className="control-panel">
        {
          controlButtons.map((item, key) => (
            <button
              key={key}
              id={item.id}
              className={`${item.className}${activeDrawTool === item.id ? ' active' : ''}`}
              onClick={() => onButtonActive(item.id)}>
              {item.name}
            </button>
          ))
        }
      </div>
    )
  }
}

export default ControlPanel;
