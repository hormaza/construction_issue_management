import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';

function IssueList() {
  const issueList = useSelector(state => state.issueList);
  const dispatch = useDispatch();

  const issueSortedList = issueList.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  )

  const starredIssue = (id) => {
    const starred = issueList.find(issue => issue.uniqueID === id)
    dispatch({
      type: 'STARREDISSUE',
      payload: {
        uniqueID: starred.uniqueID
      }
    });
  }

  const issueHasPassed = (dueDate) => new Date(dueDate) - new Date() < 0;
  return (
    <Styled>
      <div className="content">
        <div className="table-header">
          <h2>Issues Table</h2>
        </div>
        {
          !!issueList.length ?
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Due Date</th>
                  <th>Creation Date</th>
                </tr>
              </thead>

              <tbody>
                {
                  issueSortedList.map(issue => (
                    <tr className={
                      [
                        issueHasPassed(issue.dueDate) ? "issuePassed" : "",
                        issue.starred ? "starred" : ""
                      ].join(" ")
                    }
                      key={issue.uniqueID}
                      onClick={() => starredIssue(issue.uniqueID)}
                    >
                      <td>{issue.uniqueID}</td>
                      <td>{issue.description}</td>
                      <td>{issue.type}</td>
                      <td>{issue.dueDate}</td>
                      <td>{issue.creationDate}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table> :
            <div className="no-issues"><h3>There are no issues to display.</h3></div>
        }
      </div>
    </Styled>
  )
}

export default IssueList;

const Styled = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin: 20px 0;
  .content {
    width: 100%;
    max-width: 1000px;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 10px;
    overflow: hidden;
  }

  .table-header{
    width: 100%;
    background-color: #eff0f1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    h2 {
      font-size: 30px;
      text-align: center;
      color: #666;
      padding: 20px 0;
      margin: 0;
      border-bottom: 1px solid #cccccc;
    }
  }
  
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  tbody{
    tr {
      &:hover {
        background: #1bba939e;
        cursor: pointer;
      }
    }
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  .no-issues {
    text-align: center;
  }
  .issuePassed {
    color: red !important;
    background: lightsalmon;
    font-weight: bold;
  }

  .starred {
    background-color: #1bba93;
    font-weight: bold;
    color: white;
  }
`