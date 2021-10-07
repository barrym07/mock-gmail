import React from "react";

const AllEmails = ({ emails }) => {
  return (
    <ol>
      {emails.map(email => {
        return (
          <li key={`${email.id}-${email.message}`} >
            Subject: {email.subject}
            <br />
            From: {email.sender}
          </li>)
      })}
    </ol>
  )

}

export default AllEmails