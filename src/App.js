import logo from './logo.svg';
import './App.css';
import React from 'react';
import AllEmails from './AllEmails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      emails: []

    }
  }

  async componentDidMount() {
    this.getEmails();
    //console.log("emails state logged from did mount:", this.state.emails)
  }

  async getEmails() {
    const response = await fetch(`http://localhost:3001/emails`)
    const emails = await response.json()
    this.setState({ emails: emails })
    console.log("emails state logged from getEmails:", this.state.emails)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Emails should be here.
          </p>
          <AllEmails emails={this.state.emails} />

        </header>
      </div>
    );
  }
}


export default App;


// View all of my email messages (subject line + sender)
// View one of my email messages with all of its details
// Send an email
// Search for a specific email by subject