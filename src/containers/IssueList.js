import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';

function IssueList() {
  const issueList = useSelector(state => state.issueList);
  const issueSortedList = issueList.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  )

  const issueHasPassed = (dueDate) => new Date(dueDate) - new Date() < 0;
  return (
    <Styled>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Due Date</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            issueSortedList.map(issue => (
              <tr className={issueHasPassed(issue.dueDate) && 'issuePassed'}
                key={issue.uniqueID}>
                <td>{issue.uniqueID}</td>
                <td>{issue.dueDate}</td>
                <td>{issue.type}</td>
                <td>{issue.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Styled>
  )
}

export default IssueList;

const Styled = styled.section`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .issuePassed {
    background: red;
  }
`