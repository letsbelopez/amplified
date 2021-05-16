import React, {Component} from 'react';
// import Amplify, { Auth, Hub } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

export default class App extends Component {
  state = { user: null, customState: null };
// test
  componentDidMount() {
    // Hub.listen("auth", ({ payload: { event, data } }) => {
    //   console.log("event", event);
    //   console.log("data", data);
    //   switch (event) {
    //     case "signIn":
    //       this.setState({ user: data });
    //       break;
    //     case "signOut":
    //       this.setState({ user: null });
    //       break;
    //     case "customOAuthState":
    //       this.setState({ customState: data });
    //   }
    // });

    // Auth.currentAuthenticatedUser()
    //   .then(user => this.setState({ user }))
    //   .catch(() => console.log("Not signed in"));
  }

  render() {
    // const { user } = this.state;

    return (
      <div className="App">
        {/* <button onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>Open Facebook</button>
        <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
        <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button> */}
        {/* <button onClick={() => Auth.signOut()}>Sign Out {user.getUsername()}</button> */}
        hello world
      </div>
    );
  }
}
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
