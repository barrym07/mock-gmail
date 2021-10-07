import React from "react";

const AllEmails = ({ emails, OnClick }) => {
  return (
    <row>
      {emails.map(email => {
        return (
          <span key={email.id} value={email.id} onClick={OnClick}>
            <h3>Subject: {email.subject} </h3>
            <p>From: {email.sender} </p>
          </span>)
      })}
    </row>
  )

}

export default AllEmails