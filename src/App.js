import logo from './logo.svg';
import './App.css';
import React from 'react';
import AllEmails from './AllEmails';
import Email from './Email';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      emails: [],
      openEmail: {}

    }
  }

  async componentDidMount() {
    this.getEmails();
    //console.log("emails state logged from did mount:", this.state.emails)
  }

  async getEmails() {
    const response = await fetch(`http://localhost:3001/emails`);
    const emails = await response.json();
    this.setState({ emails: emails });
    console.log("emails state logged from getEmails:", this.state.emails);

  }
  //logic needs troubleshooting, doesn't seem to work
  SingleEmailClick = (emailTarget) => {
    let emailID = emailTarget.value;
    let currentEmail = this.state.emails.filter(email => email.id === emailID)[0];
    this.setState({ openEmail: currentEmail });
    console.log("current emails state logged from single click:", this.state.openEmail)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Totally not fake Gmail.
          </p>
          <AllEmails emails={this.state.emails} onClick={this.SingleEmailClick} />

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