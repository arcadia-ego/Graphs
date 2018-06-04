import React, { Component } from "react";
import { Graph } from "./graph";
import "./App.css";

// !!! IMPLEMENT ME
const canvasWidth = 1400;
const canvasHeight = 900;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "green";
    ctx.fillRect(0,575,1400,500);
    ctx.beginPath();
    ctx.moveTo(0,575);
    ctx.lineTo(100,200);
    ctx.lineTo(400,500);
    ctx.lineTo(450,200);
    ctx.lineTo(700, 400);
    ctx.lineTo(800,400);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.moveTo(0,0);

   
    // function checkIfBelongsToMandelbrotSet(x, y) {
    //   var realComponentOfResult = x;
    //   var imaginaryComponentOfResult = y;
    //   var maxIterations = 100;
    //   for (var i = 0; i < maxIterations; i++) {
    //     var tempRealComponent =
    //       realComponentOfResult * realComponentOfResult -
    //       imaginaryComponentOfResult * imaginaryComponentOfResult +
    //       x;
    //     var tempImaginaryComponent =
    //       2 * realComponentOfResult * imaginaryComponentOfResult + y;
    //     realComponentOfResult = tempRealComponent;
    //     imaginaryComponentOfResult = tempImaginaryComponent;

    //     // Return a number as a percentage
    //     if (realComponentOfResult * imaginaryComponentOfResult > 5)
    //       return i / maxIterations * 100;
    //   }
    //   return 0; // Return zero if in set
    // }

    // var magnificationFactor = 2000;
    // var panX = 0.8;
    // var panY = 0.6;
    // for (var x = 0; x < canvas.width; x++) {
    //   for (var y = 0; y < canvas.height; y++) {
    //     var belongsToSet = checkIfBelongsToMandelbrotSet(
    //       x / magnificationFactor - panX,
    //       y / magnificationFactor - panY
    //     );
    //     if (belongsToSet == 0) {
    //       ctx.fillStyle = "white";
    //       ctx.fillRect(x, y, 1, 1); // Draw a black pixel
    //     } else {
    //       ctx.fillStyle = "hsl(186, 100%, " + belongsToSet + "%)";
    //       ctx.fillRect(x, y, 1, 1); // Draw a colorful pixel
    //     }
    //   }
    // }

    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
  }

  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />;
  }
}

/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph} />
      </div>
    );
  }
}

export default App;
