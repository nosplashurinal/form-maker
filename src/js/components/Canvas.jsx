import React, { Component } from 'react';
import 'styles/canvas.scss';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeX: 1,
      sizeY: 1,
      posX: 0,
      posY: 0,
      isDrawing: !1
    }
  }
  onMouseDown = (e) => {
    this.setState({
      posX: e.clientX,
      posY: e.clientY,
      isDrawing: !0
    })
  }
  onMouseMove = (e) => {
    const { isDrawing, posX, posY } = this.state;
    isDrawing && this.setState({
      sizeX: e.clientX - posX,
      sizeY: e.clientY - posY
    })
  }
  onMouseUp = () => {
    const { sizeX, sizeY } = this.state;
    this.setState({
      isDrawing: !1
    })
    this.props.bake(<Rect />)
  }
  render() {
    const { sizeX, sizeY, posX, posY, isDrawing } = this.state;
    return (
      <section
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        className="canvas">
        <Stage width={500} height={500}>
          <Layer>
            <Rect
              x={posX}
              y={posY}
              width={sizeX}
              height={sizeY}
              stroke={"black"}
              strokeWidth={"0.6"}
              opacity={0.7}
              cornerRadius={"0"}
            />
            {isDrawing &&
              <Text
                stroke={"#434343"}
                strokeWidth={"0.4"}
                x={posX + sizeX}
                y={posY}
                text={`${sizeX}x${sizeY}`}
              />
            }
          </Layer>
        </Stage>
      </section>
    )
  }
}

export default Canvas;
