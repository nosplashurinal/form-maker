import React, { Component } from 'react';
import 'styles/bakedCanvas.scss';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class BakedCanvas extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="baked-canvas">
        <Stage width={500} height={500}>
          <Layer>
            {
              children
            }
          </Layer>
        </Stage>
      </section>
    )
  }
}

export default BakedCanvas;
