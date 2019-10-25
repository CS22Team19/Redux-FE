import React, { Component } from "react";
import {connect} from "react-redux";
import "./TextSpace.css"
import {userLoginFetch} from '../actions';

class TextSpace extends Component {
  // state = {
  //   username: "",
  //   password: ""
  // };



  
  render() {
    console.log(this.props.player.username)
    let otherPlayers = ["George", "Blake", "Mikis", "Josh"]
    let title = ["Dusty Room", "Treasure Room", "Battle Room"]
    let description = ["Room Covered in Dust", "Room with Gold Bars", "room with an octagon"]
    

    return (
      
      <div className="text-space">
        <h2>Room Details</h2>
        <h6>
       </h6>
        <h6>Room Title: {this.props.room_title}  </h6>
        <h6>Room Description: {this.props.room_description}  </h6>
        <h6> Other Players in Room: 
        {otherPlayers.map(player => {
          return " " + player + ", "
        })}
        </h6>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  player: state.player
})

export default connect(
  mapStateToProps, {userLoginFetch}
)(TextSpace)

// export default TextSpace;












