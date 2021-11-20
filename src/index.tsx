import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { App } from './components';
import reportWebVitals from './reportWebVitals';
import { CommentModal } from './components/CommentModal';

const modalArray: Array<string> = ['Modal 1', 'Modal 2', 'Modal 3'];

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {modalArray.map((title, index) => (
      <CommentModal key={index} title={title} />
    ))}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
