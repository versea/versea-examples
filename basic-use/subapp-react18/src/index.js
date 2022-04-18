import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root = null;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export function bootstrap(props) {
  console.log('app2 bootstrap')
}

export function mount() {
  console.log('app2 mount')
  root = ReactDOM.createRoot(document.getElementById('microApp'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
}

export function unmount() {
  root.unmount()
  root = null;
}
