import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" alt="react logo" width="40px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Fun</li>
        <li>Exciting</li>
      </ol>
      <footer>
        <small>Copyright 2022 Palmboom development. All rights reserved.</small>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
