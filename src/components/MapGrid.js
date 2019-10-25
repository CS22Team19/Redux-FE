import React, { Component } from "react";
import {connect} from "react-redux";
import "./MapGrid.css"
import TextSpace from "./TextSpace";

class MapGrid extends Component {
  state = {
    grid: [],
    current_room: [0,0], //[x(left and right), y(up and down)]
    room_title: "",
    room_description: ""
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   // this.props.userLoginFetch(this.state)
  // };
  componentDidMount = () => {
    this.map();
  }
  
  map = () => {
    // event.preventDefault()
    let grid_arr = []
    let titles = ["small room", "cold room", "musty room", "dusty room", "cool room", "old room", "nice room"]
    let descriptions = ["this room makes me feel claustrophobic", "the room is surrounded by ice", "the room is surrounded by mold", "dust permeates the air", "this room has a window open with a cold breeze", "this room is filled with antiques", "this room is so sweet"]
    for(let i = 0; i < 13; i++){
      grid_arr[i] = []
      for(let j = 0; j < 13; j++){
        let num = Math.floor(Math.random() * 7)
        grid_arr[i][j] = {
          exists: "on", 
          title: titles[num],
          description: descriptions[num]
        }
      }
    }
    grid_arr[5][0].exists = "off"
    grid_arr[3][5].exists = "off"
    grid_arr[6][11].exists = "off"
    grid_arr[4][9].exists = "off"
    grid_arr[10][3].exists = "off"
    grid_arr[2][9].exists = "off"
    grid_arr[11][9].exists = "off"
    grid_arr[12][9].exists = "off"
    console.log("ga", grid_arr)
    this.setState({grid: grid_arr})
    console.log(this.state.grid.length)
  }

  setCurrentRoomData = (i_0, i_1) => {
    console.log("title", this.state.grid[i_0][i_1].title)
    this.setState({
      room_title: this.state.grid[i_0][i_1].title,
      room_description: this.state.grid[i_0][i_1].description
    })

  }

  up = event => {
    if(this.state.current_room[1] !== 0 && this.state.grid[this.state.current_room[1]-1][this.state.current_room[0]].exists === "on"){
      // console.log(this.state.current_room[0], this.state.current_room[1]-1)
      this.setState({current_room: [this.state.current_room[0], this.state.current_room[1]-1]})
      this.setCurrentRoomData(this.state.current_room[0], this.state.current_room[1]-1)
      //send call to BE
    }
  }
  left = event => {
    if(this.state.current_room[0] !== 0 && this.state.grid[this.state.current_room[1]][this.state.current_room[0]-1].exists === "on"){
      // console.log(this.state.current_room[0], this.state.current_room[1]-1)
      this.setState({current_room: [this.state.current_room[0]-1, this.state.current_room[1]]})
      this.setCurrentRoomData(this.state.current_room[0]-1, this.state.current_room[1])
      //send call to BE
    }
  }
  right = event => {
    if(this.state.current_room[0] !== 12 && this.state.grid[this.state.current_room[1]][this.state.current_room[0]+1].exists === "on"){
      // console.log(this.state.current_room[0], this.state.current_room[1]-1)
      this.setState({current_room: [this.state.current_room[0]+1, this.state.current_room[1]]})
      this.setCurrentRoomData(this.state.current_room[0]+1, this.state.current_room[1])
      //send call to BE
    }
  }
  down = event => {
    if(this.state.current_room[1] !== 12 && this.state.grid[this.state.current_room[1]+1][this.state.current_room[0]].exists === "on"){
      // console.log(this.state.current_room[0], this.state.current_room[1]-1)
      this.setState({current_room: [this.state.current_room[0], this.state.current_room[1]+1]})
      this.setCurrentRoomData(this.state.current_room[0], this.state.current_room[1]+1)
      //send call to BE (setState callback?)
    }
  }

  

  render() {
    return (
      <div className="Map">
        <div className="arrows">
        <button onClick={this.up}>^</button>
        <div className="leftright">
          <button onClick={this.left}>&lt;</button>
          <button onClick={this.right}>&gt;</button>
        </div>
        <button onClick={this.down}>v</button>
        </div>
        {/* <button onClick={this.map}>make map</button> */}
        {this.state.grid.length > 0 && this.state.grid.map((e, i) => {
          return(
            <div className="row">
              {e.map((event, index) => {
                return(
                  <span className={`room ${event.exists}`} >
                    {this.state.current_room[0] === index && this.state.current_room[1] === i ? ":~)" : ""}
                  </span>
                )
              })}
            </div>
          )
        })

        }
        <TextSpace 
        room_title={this.state.room_title}
        room_description={this.state.room_description}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { room_title } = this.state.room_title
}

export default connect(null, {})(MapGrid)