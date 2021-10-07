import React from 'react'

const Email = ({ email }) => {
  return (
    //need to refactor from table to row/col in container
    <table className="emailDetails">
      <tbody>
        <tr>
          <td name="emailSender">
            <span>From: {email.sender}</span>
          </td>
        </tr>
        <tr>
          <td name="emailRecipient">
            <span>To: {email.recipient}</span>
          </td>
        </tr>
        <tr>
          <td name="emailDate">
            <span>Received: {email.date}</span>
          </td>
        </tr>
        <tr>
          <td name="emailSubject">
            <span>Subject: {email.subject}</span>
          </td>
        </tr>
        <tr>
          <td name="emailMessage">
            <br />
            <span>{email.message}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Email