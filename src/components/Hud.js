import React from "react";
import { connect } from "react-redux";
import MapGrid from "./MapGrid.js";
import TextSpace from "./TextSpace";

class Hud extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <MapGrid />
        
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Hud);
