import React, { Component } from "react";
import "./MapGrid.css"

class MapGrid extends Component {
  state = {
    grid: [],
    current_room: [4,3]
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   // this.props.userLoginFetch(this.state)
  // };
  map = event => {
    event.preventDefault()
    let grid_arr = []
    for(let i = 0; i < 13; i++){
      grid_arr[i] = []
      for(let j = 0; j < 13; j++){
        grid_arr[i][j] = "on"
      }
    }
    grid_arr[5][0] = "off"
    grid_arr[3][5] = "off"
    grid_arr[6][11] = "off"
    grid_arr[4][9] = "off"
    grid_arr[10][3] = "off"
    grid_arr[2][9] = "off"
    grid_arr[11][9] = "off"
    grid_arr[12][9] = "off"
    console.log("ga", grid_arr)
    this.setState({grid: grid_arr})
    console.log(this.state.grid.length)
  }


  render() {
    return (
      <div className="Map">

        <button onClick={this.map}>make map</button>
        {this.state.grid.length > 0 && this.state.grid.map((e, i) => {
          return(
            <div className="row">
              {e.map((event, index) => {
                return(
                  <span className={`room ${event}`} >
                    {this.state.current_room[0] === index && this.state.current_room[1] === i ? ":^)" : ""}
                  </span>
                )
              })}
            </div>
          )
        })

        }
      </div>
    );
  }
}

export default MapGrid;