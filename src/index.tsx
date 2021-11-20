import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CommentModal } from './components/CommentModal';
import styled from 'styled-components';

const StyledModal = styled(CommentModal)`
  margin-left: 250px;
`;

const modalArray: Array<string> = ['Modal 1', 'Modal 2', 'Modal 3'];

ReactDOM.render(
  <React.StrictMode>
    {modalArray.map((title, index) => (
      <StyledModal key={index} title={title} />
    ))}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
