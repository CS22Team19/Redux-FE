// import React from "react";
// import Hud from "../components/Hud";
// import HomePage from '../components/HomePage'

// const withAuthenticate = Hud => HomePage =>
//   class extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         loggedIn: false
//       };
//     }

//     componentDidMount() {
//       if (localStorage.getItem("loggedIn")) {
//         this.setState({
//           loggedIn: true
//         });
//       } else {
//         this.setState({
//           loggedIn: false
//         });
//       }
//     }

//     render() {
//       if (this.state.loggedIn) {
//         return <Hud />;
//       } else {
//         return <HomePage />;
//       }
//     }
//   };

// export default withAuthenticate;